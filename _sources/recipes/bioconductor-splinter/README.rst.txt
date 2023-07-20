:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinter'
.. highlight: bash

bioconductor-splinter
=====================

.. conda:recipe:: bioconductor-splinter
   :replaces_section_title:
   :noindex:

   Splice Interpreter of Transcripts

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SPLINTER.html
   :license: GPL-2
   :recipe: /`bioconductor-splinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter/meta.yaml>`_
   :links: biotools: :biotools:`splinter`, doi: :doi:`10.1038/nmeth.3252`

   Provides tools to analyze alternative splicing sites\, interpret outcomes based on sequence information\, select and design primers for site validiation and give visual representation of the event to guide downstream experiments.


.. conda:package:: bioconductor-splinter

   |downloads_bioconductor-splinter| |docker_bioconductor-splinter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-seqlogo: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-googlevis: 
   :depends r-plyr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splinter

   and update with::

      conda update bioconductor-splinter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splinter:<tag>

   (see `bioconductor-splinter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splinter
   :alt:   (downloads)
.. |docker_bioconductor-splinter| image:: https://quay.io/repository/biocontainers/bioconductor-splinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinter
.. _`bioconductor-splinter/tags`: https://quay.io/repository/biocontainers/bioconductor-splinter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splinter";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinter/README.html