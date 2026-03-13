:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxio'
.. highlight: bash

bioconductor-tenxio
===================

.. conda:recipe:: bioconductor-tenxio
   :replaces_section_title:
   :noindex:

   Import methods for 10X Genomics files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TENxIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio/meta.yaml>`_

   Provides a structured S4 approach to importing data files from the 10X pipelines. It mainly supports Single Cell Multiome ATAC \+ Gene Expression data among other data types. The main Bioconductor data representations used are SingleCellExperiment and RaggedExperiment.


.. conda:package:: bioconductor-tenxio

   |downloads_bioconductor-tenxio| |docker_bioconductor-tenxio|

   :versions:
      
      

      ``1.12.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocio: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-readr: 

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

    pixi global install bioconductor-tenxio

to add into an existing workspace instead, run::

    pixi add bioconductor-tenxio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tenxio

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tenxio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tenxio:<tag>

(see `bioconductor-tenxio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tenxio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxio
   :alt:   (downloads)
.. |docker_bioconductor-tenxio| image:: https://quay.io/repository/biocontainers/bioconductor-tenxio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxio
.. _`bioconductor-tenxio/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxio";
        var versions = ["1.12.1","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxio/README.html