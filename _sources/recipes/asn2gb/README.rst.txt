:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asn2gb'
.. highlight: bash

asn2gb
======

.. conda:recipe:: asn2gb
   :replaces_section_title:
   :noindex:

   asn2gb converts ASN1 format sequence records to Genbank format

   :homepage: https://www.ncbi.nlm.nih.gov/IEB/ToolBox/C_DOC/lxr/source/doc/asn2gb.txt
   :license: Public Domain
   :recipe: /`asn2gb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asn2gb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asn2gb/meta.yaml>`_

   


.. conda:package:: asn2gb

   |downloads_asn2gb| |docker_asn2gb|

   :versions:
      
      

      ``18.2-3``,  ``18.2-2``,  ``18.2-1``,  ``18.2-0``

      

   
   :depends on libidn11: 
   :depends on zlib: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install asn2gb

to add into an existing workspace instead, run::

    pixi add asn2gb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install asn2gb

Alternatively, to install into a new environment, run::

    conda create -n envname asn2gb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/asn2gb:<tag>

(see `asn2gb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_asn2gb| image:: https://img.shields.io/conda/dn/bioconda/asn2gb.svg?style=flat
   :target: https://anaconda.org/bioconda/asn2gb
   :alt:   (downloads)
.. |docker_asn2gb| image:: https://quay.io/repository/biocontainers/asn2gb/status
   :target: https://quay.io/repository/biocontainers/asn2gb
.. _`asn2gb/tags`: https://quay.io/repository/biocontainers/asn2gb?tab=tags


.. raw:: html

    <script>
        var package = "asn2gb";
        var versions = ["18.2","18.2","18.2","18.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asn2gb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asn2gb/README.html