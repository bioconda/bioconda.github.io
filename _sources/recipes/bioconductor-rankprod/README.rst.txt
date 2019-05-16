:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rankprod'
.. highlight: bash

bioconductor-rankprod
=====================

.. conda:recipe:: bioconductor-rankprod
   :replaces_section_title:

   Non\-parametric method for identifying differentially expressed \(up\- or down\- regulated\) genes based on the estimated percentage of false predictions \(pfp\). The method can combine data sets from different origins \(meta\-analysis\) to increase the power of the identification.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RankProd.html
   :license: file LICENSE
   :recipe: /`bioconductor-rankprod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod/meta.yaml>`_
   :links: biotools: :biotools:`rankprod`, doi: :doi:`10.1093/bioinformatics/btl476`

   


.. conda:package:: bioconductor-rankprod

   |downloads_bioconductor-rankprod| |docker_bioconductor-rankprod|

   :versions: 3.10.0-0, 3.8.0-0, 3.6.0-0, 3.4.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gmp: 
   :depends r-rmpfr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rankprod

   and update with::

      conda update bioconductor-rankprod

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rankprod:<tag>

   (see `bioconductor-rankprod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rankprod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rankprod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rankprod
   :alt:   (downloads)
.. |docker_bioconductor-rankprod| image:: https://quay.io/repository/biocontainers/bioconductor-rankprod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rankprod
.. _`bioconductor-rankprod/tags`: https://quay.io/repository/biocontainers/bioconductor-rankprod?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rankprod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rankprod/README.html