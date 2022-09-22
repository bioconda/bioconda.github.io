:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fibroeset'
.. highlight: bash

bioconductor-fibroeset
======================

.. conda:recipe:: bioconductor-fibroeset
   :replaces_section_title:
   :noindex:

   exprSet for Karaman et al. \(2003\) fibroblasts data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/fibroEset.html
   :license: LGPL
   :recipe: /`bioconductor-fibroeset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fibroeset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fibroeset/meta.yaml>`_

   exprSet for Karaman et al. \(2003\) human\, bonobo and gorilla fibroblasts data


.. conda:package:: bioconductor-fibroeset

   |downloads_bioconductor-fibroeset| |docker_bioconductor-fibroeset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fibroeset

   and update with::

      conda update bioconductor-fibroeset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fibroeset:<tag>

   (see `bioconductor-fibroeset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fibroeset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fibroeset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fibroeset
   :alt:   (downloads)
.. |docker_bioconductor-fibroeset| image:: https://quay.io/repository/biocontainers/bioconductor-fibroeset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fibroeset
.. _`bioconductor-fibroeset/tags`: https://quay.io/repository/biocontainers/bioconductor-fibroeset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fibroeset";
        var versions = ["1.36.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fibroeset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fibroeset/README.html