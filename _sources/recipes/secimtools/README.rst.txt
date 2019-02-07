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

   :versions: 1.0.0

   :depends: :conda:package:`lxml` >=3.3.3 :conda:package:`matplotlib` >=1.5.1,<2.0.0 :conda:package:`matplotlib-venn` >=0.11.1 :conda:package:`mpld3` ==0.2 :conda:package:`numpy` ==1.11.0 :conda:package:`palettable`  :conda:package:`pandas` ==0.18.1 :conda:package:`patsy` >=0.4.0 :conda:package:`pymc` >=2.3.6 :conda:package:`python` 2.7* :conda:package:`rpy2` >=2.3.10 :conda:package:`scikit-learn` >=0.18 :conda:package:`scipy` >=0.15.1 :conda:package:`seaborn` ==0.7.0 :conda:package:`statsmodels` ==0.6.1 :conda:package:`sympy` ==0.7.4.1 

   :required~by: |required_by_secimtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secimtools

   and update with::

      conda update secimtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/secimtools


.. |required_by_secimtools| conda:required_by:: secimtools
.. |downloads_secimtools| image:: https://img.shields.io/conda/dn/bioconda/secimtools.svg?style=flat
   :alt:   (downloads)
.. |docker_secimtools| image:: https://quay.io/repository/biocontainers/secimtools/status
   :target: https://quay.io/repository/biocontainers/secimtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secimtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secimtools/README.html

