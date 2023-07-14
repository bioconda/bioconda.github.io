:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medips'
.. highlight: bash

bioconductor-medips
===================

.. conda:recipe:: bioconductor-medips
   :replaces_section_title:
   :noindex:

   DNA IP\-seq data analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MEDIPS.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-medips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medips/meta.yaml>`_
   :links: biotools: :biotools:`medips`

   MEDIPS was developed for analyzing data derived from methylated DNA immunoprecipitation \(MeDIP\) experiments followed by sequencing \(MeDIP\-seq\). However\, MEDIPS provides functionalities for the analysis of any kind of quantitative sequencing data \(e.g. ChIP\-seq\, MBD\-seq\, CMS\-seq and others\) including calculation of differential coverage between groups of samples and saturation and correlation analysis.


.. conda:package:: bioconductor-medips

   |downloads_bioconductor-medips| |docker_bioconductor-medips|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-dnacopy: ``>=1.74.0,<1.75.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-medips

   and update with::

      conda update bioconductor-medips

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-medips:<tag>

   (see `bioconductor-medips/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-medips| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medips.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medips
   :alt:   (downloads)
.. |docker_bioconductor-medips| image:: https://quay.io/repository/biocontainers/bioconductor-medips/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medips
.. _`bioconductor-medips/tags`: https://quay.io/repository/biocontainers/bioconductor-medips?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-medips";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medips/README.html