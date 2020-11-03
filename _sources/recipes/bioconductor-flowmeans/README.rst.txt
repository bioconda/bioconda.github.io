:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmeans'
.. highlight: bash

bioconductor-flowmeans
======================

.. conda:recipe:: bioconductor-flowmeans
   :replaces_section_title:
   :noindex:

   Non\-parametric Flow Cytometry Data Gating

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/flowMeans.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmeans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmeans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmeans/meta.yaml>`_

   Identifies cell populations in Flow Cytometry data using non\-parametric clustering and segmented\-regression\-based change point detection. Note\: R 2.11.0 or newer is required.


.. conda:package:: bioconductor-flowmeans

   |downloads_bioconductor-flowmeans| |docker_bioconductor-flowmeans|

   :versions:
      
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-feature: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowmeans

   and update with::

      conda update bioconductor-flowmeans

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmeans:<tag>

   (see `bioconductor-flowmeans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmeans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmeans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmeans
   :alt:   (downloads)
.. |docker_bioconductor-flowmeans| image:: https://quay.io/repository/biocontainers/bioconductor-flowmeans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmeans
.. _`bioconductor-flowmeans/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmeans?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmeans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmeans/README.html