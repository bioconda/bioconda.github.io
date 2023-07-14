:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfea.chip'
.. highlight: bash

bioconductor-tfea.chip
======================

.. conda:recipe:: bioconductor-tfea.chip
   :replaces_section_title:
   :noindex:

   Analyze Transcription Factor Enrichment

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TFEA.ChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfea.chip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip/meta.yaml>`_

   Package to analize transcription factor enrichment in a gene set using data from ChIP\-Seq experiments.


.. conda:package:: bioconductor-tfea.chip

   |downloads_bioconductor-tfea.chip| |docker_bioconductor-tfea.chip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.2-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-r.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfea.chip

   and update with::

      conda update bioconductor-tfea.chip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfea.chip:<tag>

   (see `bioconductor-tfea.chip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfea.chip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfea.chip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfea.chip
   :alt:   (downloads)
.. |docker_bioconductor-tfea.chip| image:: https://quay.io/repository/biocontainers/bioconductor-tfea.chip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfea.chip
.. _`bioconductor-tfea.chip/tags`: https://quay.io/repository/biocontainers/bioconductor-tfea.chip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfea.chip";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html