:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phosphonormalizer'
.. highlight: bash

bioconductor-phosphonormalizer
==============================

.. conda:recipe:: bioconductor-phosphonormalizer
   :replaces_section_title:
   :noindex:

   Compensates for the bias introduced by median normalization in

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/phosphonormalizer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-phosphonormalizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosphonormalizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosphonormalizer/meta.yaml>`_

   It uses the overlap between enriched and non\-enriched datasets to compensate for the bias introduced in global phosphorylation after applying median normalization.


.. conda:package:: bioconductor-phosphonormalizer

   |downloads_bioconductor-phosphonormalizer| |docker_bioconductor-phosphonormalizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrixstats: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phosphonormalizer

   and update with::

      conda update bioconductor-phosphonormalizer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phosphonormalizer:<tag>

   (see `bioconductor-phosphonormalizer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phosphonormalizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phosphonormalizer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phosphonormalizer
   :alt:   (downloads)
.. |docker_bioconductor-phosphonormalizer| image:: https://quay.io/repository/biocontainers/bioconductor-phosphonormalizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phosphonormalizer
.. _`bioconductor-phosphonormalizer/tags`: https://quay.io/repository/biocontainers/bioconductor-phosphonormalizer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phosphonormalizer";
        var versions = ["1.22.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phosphonormalizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phosphonormalizer/README.html