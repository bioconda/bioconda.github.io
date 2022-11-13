:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-massarray'
.. highlight: bash

bioconductor-massarray
======================

.. conda:recipe:: bioconductor-massarray
   :replaces_section_title:
   :noindex:

   Analytical Tools for MassArray Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MassArray.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-massarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massarray/meta.yaml>`_
   :links: biotools: :biotools:`massarray`, doi: :doi:`10.1093/bioinformatics/btp382`

   This package is designed for the import\, quality control\, analysis\, and visualization of methylation data generated using Sequenom\'s MassArray platform.  The tools herein contain a highly detailed amplicon prediction for optimal assay design. Also included are quality control measures of data\, such as primer dimer and bisulfite conversion efficiency estimation. Methylation data are calculated using the same algorithms contained in the EpiTyper software package.  Additionally\, automatic SNP\-detection can be used to flag potentially confounded data from specific CG sites.  Visualization includes barplots of methylation data as well as UCSC Genome Browser\-compatible BED tracks.  Multiple assays can be positionally combined for integrated analysis.


.. conda:package:: bioconductor-massarray

   |downloads_bioconductor-massarray| |docker_bioconductor-massarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-massarray

   and update with::

      conda update bioconductor-massarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-massarray:<tag>

   (see `bioconductor-massarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-massarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-massarray
   :alt:   (downloads)
.. |docker_bioconductor-massarray| image:: https://quay.io/repository/biocontainers/bioconductor-massarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massarray
.. _`bioconductor-massarray/tags`: https://quay.io/repository/biocontainers/bioconductor-massarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-massarray";
        var versions = ["1.50.0","1.46.0","1.44.0","1.42.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massarray/README.html