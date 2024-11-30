:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxvisiumdata'
.. highlight: bash

bioconductor-tenxvisiumdata
===========================

.. conda:recipe:: bioconductor-tenxvisiumdata
   :replaces_section_title:
   :noindex:

   Visium spatial gene expression data by 10X Genomics

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/TENxVisiumData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tenxvisiumdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxvisiumdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxvisiumdata/meta.yaml>`_

   Collection of Visium spatial gene expression datasets by 10X Genomics\, formatted into objects of class SpatialExperiment. Data cover various organisms and tissues\, and include\: single\- and multi\-section experiments\, as well as single sections subjected to both whole transcriptome and targeted panel analysis. Datasets may be used for testing of and as examples in packages\, for tutorials and workflow demonstrations\, or similar purposes.


.. conda:package:: bioconductor-tenxvisiumdata

   |downloads_bioconductor-tenxvisiumdata| |docker_bioconductor-tenxvisiumdata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-tenxvisiumdata

   and update with::

      mamba update bioconductor-tenxvisiumdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tenxvisiumdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxvisiumdata:<tag>

   (see `bioconductor-tenxvisiumdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxvisiumdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxvisiumdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxvisiumdata
   :alt:   (downloads)
.. |docker_bioconductor-tenxvisiumdata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata
.. _`bioconductor-tenxvisiumdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxvisiumdata";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxvisiumdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxvisiumdata/README.html