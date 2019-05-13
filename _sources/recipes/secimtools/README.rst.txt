:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secimtools'
.. highlight: bash

secimtools
==========

.. conda:recipe:: secimtools
   :replaces_section_title:

   Metabolomics tools from the SECIM project

   :homepage: https://github.com/secimTools/SECIMTools
   :license: MIT / MIT License
   :recipe: /`secimtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools/meta.yaml>`_

   SECIMTools project aims to develop a suite of tools for processing of metabolomics data\, which can be run in a standalone mode or via Galaxy Genomics Framework.


.. conda:package:: secimtools

   |downloads_secimtools| |docker_secimtools|

   :versions: 1.0.0-4, 1.0.0-3, 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-impute: 1.46.0
   :depends lxml: 
   :depends matplotlib: >=1.5.1,<2.0.0
   :depends matplotlib-venn: >=0.11.1
   :depends numpy: >=1.9.3,<2.0a0
   :depends palettable: >=3.0.0
   :depends pandas: 0.18.1
   :depends patsy: >=0.4.0
   :depends pymc: >=2.3.6
   :depends python: >=2.7,<2.8.0a0
   :depends r-glmnet: 2.0_5
   :depends rpy2: >=2.3.10,<2.9
   :depends scikit-learn: 0.18.1
   :depends scipy: >=0.18.1,<1.0.0
   :depends seaborn: 0.7.0
   :depends statsmodels: 0.6.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secimtools

   and update with::

      conda update secimtools

   or use the docker container::

      docker pull quay.io/biocontainers/secimtools:<tag>

   (see `secimtools/tags`_ for valid values for ``<tag>``)


.. |downloads_secimtools| image:: https://img.shields.io/conda/dn/bioconda/secimtools.svg?style=flat
   :target: https://anaconda.org/bioconda/secimtools
   :alt:   (downloads)
.. |docker_secimtools| image:: https://quay.io/repository/biocontainers/secimtools/status
   :target: https://quay.io/repository/biocontainers/secimtools
.. _`secimtools/tags`: https://quay.io/repository/biocontainers/secimtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secimtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secimtools/README.html