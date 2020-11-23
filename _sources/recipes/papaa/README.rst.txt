:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'papaa'
.. highlight: bash

papaa
=====

.. conda:recipe:: papaa
   :replaces_section_title:
   :noindex:

   PAPAA tools to measure mutation specific pathway acitvity in TCGA pancancer dataset

   :homepage: https://github.com/nvk747/papaa
   :license: BSD / BSD-3-Clause License
   :recipe: /`papaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/papaa/meta.yaml>`_

   


.. conda:package:: papaa

   |downloads_papaa| |docker_papaa|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends biopython: ``>=1.70``
   :depends bunch: ``>=1.0``
   :depends numexpr: ``>=2.6``
   :depends numpy: ``>=1.14``
   :depends pandas: ``>=0.23``
   :depends plotnine: ``>=0.3``
   :depends python: ``>=3.6``
   :depends r-cowplot: ``>=0.9``
   :depends r-dplyr: ``>=0.7``
   :depends r-ggplot2: ``>=3.0``
   :depends r-ggpmisc: ``>=0.3``
   :depends r-ggrepel: ``>=0.8``
   :depends r-hmisc: ``>=4.1.1``
   :depends r-optparse: ``>=1.6``
   :depends r-pheatmap: ``>=1.0``
   :depends r-readr: ``>=1.1``
   :depends scikit-learn: ``>=0.19``
   :depends seaborn: ``>=0.8``
   :depends statsmodels: ``>=0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install papaa

   and update with::

      conda update papaa

   or use the docker container::

      docker pull quay.io/biocontainers/papaa:<tag>

   (see `papaa/tags`_ for valid values for ``<tag>``)


.. |downloads_papaa| image:: https://img.shields.io/conda/dn/bioconda/papaa.svg?style=flat
   :target: https://anaconda.org/bioconda/papaa
   :alt:   (downloads)
.. |docker_papaa| image:: https://quay.io/repository/biocontainers/papaa/status
   :target: https://quay.io/repository/biocontainers/papaa
.. _`papaa/tags`: https://quay.io/repository/biocontainers/papaa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/papaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/papaa/README.html