:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drimseq'
.. highlight: bash

bioconductor-drimseq
====================

.. conda:recipe:: bioconductor-drimseq
   :replaces_section_title:
   :noindex:

   Differential transcript usage and tuQTL analyses with Dirichlet\-multinomial model in RNA\-seq

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DRIMSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-drimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drimseq/meta.yaml>`_
   :links: biotools: :biotools:`drimseq`

   The package provides two frameworks. One for the differential transcript usage analysis between different conditions and one for the tuQTL analysis. Both are based on modeling the counts of genomic features \(i.e.\, transcripts\) with the Dirichlet\-multinomial distribution. The package also makes available functions for visualization and exploration of the data and results.


.. conda:package:: bioconductor-drimseq

   |downloads_bioconductor-drimseq| |docker_bioconductor-drimseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drimseq

   and update with::

      conda update bioconductor-drimseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drimseq:<tag>

   (see `bioconductor-drimseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drimseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drimseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drimseq
   :alt:   (downloads)
.. |docker_bioconductor-drimseq| image:: https://quay.io/repository/biocontainers/bioconductor-drimseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drimseq
.. _`bioconductor-drimseq/tags`: https://quay.io/repository/biocontainers/bioconductor-drimseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drimseq";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drimseq/README.html