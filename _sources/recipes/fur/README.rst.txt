:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fur'
.. highlight: bash

fur
===

.. conda:recipe:: fur
   :replaces_section_title:
   :noindex:

   Find unique genomic regions from target and neighbor genomes

   :homepage: https://github.com/evolbioinf/fur
   :license: GPL-3.0-or-later
   :recipe: /`fur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fur/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab022`, doi: :doi:`10.1093/bioadv/vbae113`

   


.. conda:package:: fur

   |downloads_fur| |docker_fur|

   :versions:
      
      

      ``4.3-0``

      

   
   :depends on blast: 
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libgcc: ``>=14``
   :depends on phylonium: 

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

    pixi global install fur

to add into an existing workspace instead, run::

    pixi add fur

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fur

Alternatively, to install into a new environment, run::

    conda create -n envname fur

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fur:<tag>

(see `fur/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fur| image:: https://img.shields.io/conda/dn/bioconda/fur.svg?style=flat
   :target: https://anaconda.org/bioconda/fur
   :alt:   (downloads)
.. |docker_fur| image:: https://quay.io/repository/biocontainers/fur/status
   :target: https://quay.io/repository/biocontainers/fur
.. _`fur/tags`: https://quay.io/repository/biocontainers/fur?tab=tags


.. raw:: html

    <script>
        var package = "fur";
        var versions = ["4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fur/README.html