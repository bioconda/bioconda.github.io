:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ga4ghclient'
.. highlight: bash

bioconductor-ga4ghclient
========================

.. conda:recipe:: bioconductor-ga4ghclient
   :replaces_section_title:
   :noindex:

   A Bioconductor package for accessing GA4GH API data servers

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GA4GHclient.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ga4ghclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient/meta.yaml>`_

   GA4GHclient provides an easy way to access public data servers through Global Alliance for Genomics and Health \(GA4GH\) genomics API. It provides low\-level access to GA4GH API and translates response data into Bioconductor\-based class objects.


.. conda:package:: bioconductor-ga4ghclient

   |downloads_bioconductor-ga4ghclient| |docker_bioconductor-ga4ghclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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


.. raw:: html

    <script>
        var package = "bioconductor-ga4ghclient";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html