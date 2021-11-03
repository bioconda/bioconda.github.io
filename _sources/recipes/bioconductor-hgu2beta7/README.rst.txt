:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu2beta7'
.. highlight: bash

bioconductor-hgu2beta7
======================

.. conda:recipe:: bioconductor-hgu2beta7
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for hgu2beta7

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/hgu2beta7.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu2beta7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu2beta7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu2beta7/meta.yaml>`_

   Annotation data file for hgu2beta7 assembled using data from public data repositories


.. conda:package:: bioconductor-hgu2beta7

   |downloads_bioconductor-hgu2beta7| |docker_bioconductor-hgu2beta7|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.29.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu2beta7

   and update with::

      conda update bioconductor-hgu2beta7

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu2beta7:<tag>

   (see `bioconductor-hgu2beta7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu2beta7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu2beta7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu2beta7
   :alt:   (downloads)
.. |docker_bioconductor-hgu2beta7| image:: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7
.. _`bioconductor-hgu2beta7/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu2beta7";
        var versions = ["1.34.0","1.32.0","1.30.0","1.30.0","1.29.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu2beta7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu2beta7/README.html