:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbl2asn'
.. highlight: bash

tbl2asn
=======

.. conda:recipe:: tbl2asn
   :replaces_section_title:
   :noindex:

   tbl2asn is a program that automates the creation of sequence records for submission to GenBank

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/tbl2asn2
   :license: Public Domain
   :recipe: /`tbl2asn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn/meta.yaml>`_

   


.. conda:package:: tbl2asn

   |downloads_tbl2asn| |docker_tbl2asn|

   :versions:
      
      

      ``25.7-1``,  ``25.7-0``,  ``25.6-3``,  ``25.6-2``,  ``25.6-1``,  ``25.6-0``,  ``25.3-0``,  ``25.0-0``

      

   
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

    pixi global install tbl2asn

to add into an existing workspace instead, run::

    pixi add tbl2asn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbl2asn

Alternatively, to install into a new environment, run::

    conda create -n envname tbl2asn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbl2asn:<tag>

(see `tbl2asn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbl2asn| image:: https://img.shields.io/conda/dn/bioconda/tbl2asn.svg?style=flat
   :target: https://anaconda.org/bioconda/tbl2asn
   :alt:   (downloads)
.. |docker_tbl2asn| image:: https://quay.io/repository/biocontainers/tbl2asn/status
   :target: https://quay.io/repository/biocontainers/tbl2asn
.. _`tbl2asn/tags`: https://quay.io/repository/biocontainers/tbl2asn?tab=tags


.. raw:: html

    <script>
        var package = "tbl2asn";
        var versions = ["25.7","25.7","25.6","25.6","25.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbl2asn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbl2asn/README.html