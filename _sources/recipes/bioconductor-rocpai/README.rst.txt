:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rocpai'
.. highlight: bash

bioconductor-rocpai
===================

.. conda:recipe:: bioconductor-rocpai
   :replaces_section_title:
   :noindex:

   Receiver Operating Characteristic Partial Area Indexes for evaluating classifiers

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ROCpAI.html
   :license: GPL-3
   :recipe: /`bioconductor-rocpai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai/meta.yaml>`_

   The package analyzes the Curve ROC\, identificates it among different types of Curve ROC and calculates the area under de curve through the method that is most accuracy. This package is able to standarizate proper and improper pAUC.


.. conda:package:: bioconductor-rocpai

   |downloads_bioconductor-rocpai| |docker_bioconductor-rocpai|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-fission: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-boot: 
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rocpai

   and update with::

      conda update bioconductor-rocpai

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rocpai:<tag>

   (see `bioconductor-rocpai/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rocpai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rocpai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rocpai
   :alt:   (downloads)
.. |docker_bioconductor-rocpai| image:: https://quay.io/repository/biocontainers/bioconductor-rocpai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rocpai
.. _`bioconductor-rocpai/tags`: https://quay.io/repository/biocontainers/bioconductor-rocpai?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rocpai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rocpai/README.html