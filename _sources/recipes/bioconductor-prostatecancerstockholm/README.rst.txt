:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostatecancerstockholm'
.. highlight: bash

bioconductor-prostatecancerstockholm
====================================

.. conda:recipe:: bioconductor-prostatecancerstockholm
   :replaces_section_title:

   A Bioconductor data package for the Stockholm dataset

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/prostateCancerStockholm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancerstockholm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancerstockholm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancerstockholm/meta.yaml>`_

   


.. conda:package:: bioconductor-prostatecancerstockholm

   |downloads_bioconductor-prostatecancerstockholm| |docker_bioconductor-prostatecancerstockholm|

   :versions: 1.10.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancerstockholm

   and update with::

      conda update bioconductor-prostatecancerstockholm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostatecancerstockholm:<tag>

   (see `bioconductor-prostatecancerstockholm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostatecancerstockholm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancerstockholm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancerstockholm| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm
.. _`bioconductor-prostatecancerstockholm/tags`: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancerstockholm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancerstockholm/README.html