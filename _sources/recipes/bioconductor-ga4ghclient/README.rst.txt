:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ga4ghclient'
.. highlight: bash

bioconductor-ga4ghclient
========================

.. conda:recipe:: bioconductor-ga4ghclient
   :replaces_section_title:
   :noindex:

   A Bioconductor package for accessing GA4GH API data servers

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GA4GHclient.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ga4ghclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient/meta.yaml>`_

   GA4GHclient provides an easy way to access public data servers through Global Alliance for Genomics and Health \(GA4GH\) genomics API. It provides low\-level access to GA4GH API and translates response data into Bioconductor\-based class objects.


.. conda:package:: bioconductor-ga4ghclient

   |downloads_bioconductor-ga4ghclient| |docker_bioconductor-ga4ghclient|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ga4ghclient

   and update with::

      conda update bioconductor-ga4ghclient

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ga4ghclient:<tag>

   (see `bioconductor-ga4ghclient/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ga4ghclient| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghclient.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ga4ghclient
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghclient| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient
.. _`bioconductor-ga4ghclient/tags`: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html