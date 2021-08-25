:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-segmentseq'
.. highlight: bash

bioconductor-segmentseq
=======================

.. conda:recipe:: bioconductor-segmentseq
   :replaces_section_title:
   :noindex:

   Methods for identifying small RNA loci from high\-throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/segmentSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-segmentseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmentseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmentseq/meta.yaml>`_
   :links: biotools: :biotools:`segmentseq`, doi: :doi:`10.1093/bioinformatics/btr687`

   High\-throughput sequencing technologies allow the production of large volumes of short sequences\, which can be aligned to the genome to create a set of matches to the genome. By looking for regions of the genome which to which there are high densities of matches\, we can infer a segmentation of the genome into regions of biological significance. The methods in this package allow the simultaneous segmentation of data from multiple samples\, taking into account replicate data\, in order to create a consensus segmentation. This has obvious applications in a number of classes of sequencing experiments\, particularly in the discovery of small RNA loci and novel mRNA transcriptome discovery.


.. conda:package:: bioconductor-segmentseq

   |downloads_bioconductor-segmentseq| |docker_bioconductor-segmentseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.26.0,<2.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-shortread: ``>=1.50.0,<1.51.0``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-segmentseq

   and update with::

      conda update bioconductor-segmentseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-segmentseq:<tag>

   (see `bioconductor-segmentseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-segmentseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-segmentseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-segmentseq
   :alt:   (downloads)
.. |docker_bioconductor-segmentseq| image:: https://quay.io/repository/biocontainers/bioconductor-segmentseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-segmentseq
.. _`bioconductor-segmentseq/tags`: https://quay.io/repository/biocontainers/bioconductor-segmentseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-segmentseq";
        var versions = ["2.26.0","2.24.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-segmentseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-segmentseq/README.html