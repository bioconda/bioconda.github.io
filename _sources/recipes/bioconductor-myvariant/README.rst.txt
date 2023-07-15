:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-myvariant'
.. highlight: bash

bioconductor-myvariant
======================

.. conda:recipe:: bioconductor-myvariant
   :replaces_section_title:
   :noindex:

   Accesses MyVariant.info variant query and annotation services

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/myvariant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-myvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant/meta.yaml>`_
   :links: biotools: :biotools:`myvariant`, doi: :doi:`10.1101/035667`

   MyVariant.info is a comprehensive aggregation of variant annotation resources. myvariant is a wrapper for querying MyVariant.info services


.. conda:package:: bioconductor-myvariant

   |downloads_bioconductor-myvariant| |docker_bioconductor-myvariant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hmisc: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-myvariant

   and update with::

      conda update bioconductor-myvariant

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-myvariant:<tag>

   (see `bioconductor-myvariant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-myvariant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-myvariant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-myvariant
   :alt:   (downloads)
.. |docker_bioconductor-myvariant| image:: https://quay.io/repository/biocontainers/bioconductor-myvariant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-myvariant
.. _`bioconductor-myvariant/tags`: https://quay.io/repository/biocontainers/bioconductor-myvariant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-myvariant";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-myvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-myvariant/README.html