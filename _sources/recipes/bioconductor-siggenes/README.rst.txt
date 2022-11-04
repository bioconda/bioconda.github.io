:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-siggenes'
.. highlight: bash

bioconductor-siggenes
=====================

.. conda:recipe:: bioconductor-siggenes
   :replaces_section_title:
   :noindex:

   Multiple Testing using SAM and Efron\'s Empirical Bayes Approaches

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/siggenes.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-siggenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siggenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siggenes/meta.yaml>`_
   :links: biotools: :biotools:`siggenes`, doi: :doi:`10.1186/1471-2105-9-144`

   Identification of differentially expressed genes and estimation of the False Discovery Rate \(FDR\) using both the Significance Analysis of Microarrays \(SAM\) and the Empirical Bayes Analyses of Microarrays \(EBAM\).


.. conda:package:: bioconductor-siggenes

   |downloads_bioconductor-siggenes| |docker_bioconductor-siggenes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-multtest: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-scrime: ``>=1.2.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-siggenes

   and update with::

      conda update bioconductor-siggenes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-siggenes:<tag>

   (see `bioconductor-siggenes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-siggenes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-siggenes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-siggenes
   :alt:   (downloads)
.. |docker_bioconductor-siggenes| image:: https://quay.io/repository/biocontainers/bioconductor-siggenes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-siggenes
.. _`bioconductor-siggenes/tags`: https://quay.io/repository/biocontainers/bioconductor-siggenes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-siggenes";
        var versions = ["1.72.0","1.68.0","1.66.0","1.64.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-siggenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-siggenes/README.html