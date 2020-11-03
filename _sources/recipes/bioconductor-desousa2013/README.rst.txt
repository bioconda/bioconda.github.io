:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desousa2013'
.. highlight: bash

bioconductor-desousa2013
========================

.. conda:recipe:: bioconductor-desousa2013
   :replaces_section_title:
   :noindex:

   Poor prognosis colon cancer is defined by a molecularly distinct subtype and precursor lesion

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/DeSousa2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-desousa2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013/meta.yaml>`_

   This package reproduces the main pipeline to analyze the AMC\-AJCCII\-90 microarray data set in De Sousa et al. accepted by Nature Medicine in 2013.


.. conda:package:: bioconductor-desousa2013

   |downloads_bioconductor-desousa2013| |docker_bioconductor-desousa2013|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-consensusclusterplus: ``>=1.54.0,<1.55.0``
   :depends bioconductor-frma: ``>=1.42.0,<1.43.0``
   :depends bioconductor-frmatools: ``>=1.42.0,<1.43.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.2.0,<3.3.0``
   :depends bioconductor-hgu133plus2frmavecs: ``>=1.5.0,<1.6.0``
   :depends bioconductor-siggenes: ``>=1.64.0,<1.65.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-pamr: 
   :depends r-rgl: 
   :depends r-rocr: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-desousa2013

   and update with::

      conda update bioconductor-desousa2013

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-desousa2013:<tag>

   (see `bioconductor-desousa2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-desousa2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desousa2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desousa2013
   :alt:   (downloads)
.. |docker_bioconductor-desousa2013| image:: https://quay.io/repository/biocontainers/bioconductor-desousa2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desousa2013
.. _`bioconductor-desousa2013/tags`: https://quay.io/repository/biocontainers/bioconductor-desousa2013?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html