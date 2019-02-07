.. title:: Package Recipe 'bioconductor-ga4ghclient'
.. highlight: bash


bioconductor-ga4ghclient
========================

.. conda:recipe:: bioconductor-ga4ghclient
   :replaces_section_title:

   GA4GHclient provides an easy way to access public data servers through Global Alliance for Genomics and Health \(GA4GH\) genomics API. It provides low\-level access to GA4GH API and translates response data into Bioconductor\-based class objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GA4GHclient.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ga4ghclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient/meta.yaml>`_

   


.. conda:package:: bioconductor-ga4ghclient

   |downloads_bioconductor-ga4ghclient| |docker_bioconductor-ga4ghclient|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  

   :required~by: |required_by_bioconductor-ga4ghclient|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ga4ghclient

   and update with::

      conda update bioconductor-ga4ghclient

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ga4ghclient


.. |required_by_bioconductor-ga4ghclient| conda:required_by:: bioconductor-ga4ghclient
.. |downloads_bioconductor-ga4ghclient| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghclient.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghclient| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html

