:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxio'
.. highlight: bash

bioconductor-tenxio
===================

.. conda:recipe:: bioconductor-tenxio
   :replaces_section_title:
   :noindex:

   Import methods for 10X Genomics files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TENxIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio/meta.yaml>`_

   Provides a structured S4 approach to importing data files from the 10X pipelines. It mainly supports Single Cell Multiome ATAC \+ Gene Expression data among other data types. The main Bioconductor data representations used are SingleCellExperiment and RaggedExperiment.


.. conda:package:: bioconductor-tenxio

   |downloads_bioconductor-tenxio| |docker_bioconductor-tenxio|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-readr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tenxio

   and update with::

      mamba update bioconductor-tenxio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tenxio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxio:<tag>

   (see `bioconductor-tenxio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxio
   :alt:   (downloads)
.. |docker_bioconductor-tenxio| image:: https://quay.io/repository/biocontainers/bioconductor-tenxio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxio
.. _`bioconductor-tenxio/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxio";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
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