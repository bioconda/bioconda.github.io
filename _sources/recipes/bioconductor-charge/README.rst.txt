:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-charge'
.. highlight: bash

bioconductor-charge
===================

.. conda:recipe:: bioconductor-charge
   :replaces_section_title:

   Identifies genomic duplications or deletions from gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CHARGE.html
   :license: GPL-2
   :recipe: /`bioconductor-charge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charge/meta.yaml>`_

   


.. conda:package:: bioconductor-charge

   |downloads_bioconductor-charge| |docker_bioconductor-charge|

   :versions: 1.2.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-cluster: 
   
   :depends r-diptest: 
   
   :depends r-factoextra: 
   
   :depends r-factominer: 
   
   :depends r-matrixstats: 
   
   :depends r-modes: 
   
   :depends r-plyr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-charge

   and update with::

      conda update bioconductor-charge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-charge:<tag>

   (see `bioconductor-charge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-charge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-charge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-charge| image:: https://quay.io/repository/biocontainers/bioconductor-charge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-charge
.. _`bioconductor-charge/tags`: https://quay.io/repository/biocontainers/bioconductor-charge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-charge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-charge/README.html