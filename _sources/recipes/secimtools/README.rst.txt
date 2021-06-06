:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secimtools'
.. highlight: bash

secimtools
==========

.. conda:recipe:: secimtools
   :replaces_section_title:
   :noindex:

   Metabolomics tools from the SECIM project

   :homepage: https://github.com/secimTools/SECIMTools
   :license: MIT / MIT License
   :recipe: /`secimtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools/meta.yaml>`_

   suite of standalone and Galaxy tools for processing of metabolomics data.


.. conda:package:: secimtools

   |downloads_secimtools| |docker_secimtools|

   :versions:
      
      

      ``21.6.3-0``,  ``21.3.4.2-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-impute: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: ``>=1.16``
   :depends palettable: 
   :depends pandas: 
   :depends perl-vcftools-vcf: 
   :depends pymc: 
   :depends python: ``>=3.7``
   :depends r-glmnet: 
   :depends rpy2: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
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