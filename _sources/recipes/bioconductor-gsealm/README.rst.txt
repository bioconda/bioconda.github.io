:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsealm'
.. highlight: bash

bioconductor-gsealm
===================

.. conda:recipe:: bioconductor-gsealm
   :replaces_section_title:
   :noindex:

   Linear Model Toolset for Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GSEAlm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsealm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsealm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsealm/meta.yaml>`_
   :links: biotools: :biotools:`gsealm`, doi: :doi:`10.1093/bioinformatics/btn465`

   Models and methods for fitting linear models to gene expression data\, together with tools for computing and using various regression diagnostics.


.. conda:package:: bioconductor-gsealm

   |downloads_bioconductor-gsealm| |docker_bioconductor-gsealm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsealm

   and update with::

      conda update bioconductor-gsealm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsealm:<tag>

   (see `bioconductor-gsealm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsealm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsealm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsealm
   :alt:   (downloads)
.. |docker_bioconductor-gsealm| image:: https://quay.io/repository/biocontainers/bioconductor-gsealm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsealm
.. _`bioconductor-gsealm/tags`: https://quay.io/repository/biocontainers/bioconductor-gsealm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsealm";
        var versions = ["1.58.0","1.54.0","1.52.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsealm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsealm/README.html