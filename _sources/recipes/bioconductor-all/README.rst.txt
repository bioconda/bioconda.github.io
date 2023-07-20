:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-all'
.. highlight: bash

bioconductor-all
================

.. conda:recipe:: bioconductor-all
   :replaces_section_title:
   :noindex:

   A data package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ALL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-all/meta.yaml>`_

   Data of T\- and B\-cell Acute Lymphocytic Leukemia from the Ritz Laboratory at the DFCI \(includes Apr 2004 versions\)


.. conda:package:: bioconductor-all

   |downloads_bioconductor-all| |docker_bioconductor-all|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-all

   and update with::

      conda update bioconductor-all

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-all:<tag>

   (see `bioconductor-all/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-all| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-all.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-all
   :alt:   (downloads)
.. |docker_bioconductor-all| image:: https://quay.io/repository/biocontainers/bioconductor-all/status
   :target: https://quay.io/repository/biocontainers/bioconductor-all
.. _`bioconductor-all/tags`: https://quay.io/repository/biocontainers/bioconductor-all?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-all";
        var versions = ["1.42.0","1.40.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-all/README.html