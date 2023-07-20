:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tapseq'
.. highlight: bash

bioconductor-tapseq
===================

.. conda:recipe:: bioconductor-tapseq
   :replaces_section_title:
   :noindex:

   Targeted scRNA\-seq primer design for TAP\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TAPseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tapseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tapseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tapseq/meta.yaml>`_

   Design primers for targeted single\-cell RNA\-seq used by TAP\-seq. Create sequence templates for target gene panels and design gene\-specific primers using Primer3. Potential off\-targets can be estimated with BLAST. Requires working installations of Primer3 and BLASTn.


.. conda:package:: bioconductor-tapseq

   |downloads_bioconductor-tapseq| |docker_bioconductor-tapseq|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tapseq

   and update with::

      conda update bioconductor-tapseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tapseq:<tag>

   (see `bioconductor-tapseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tapseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tapseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tapseq
   :alt:   (downloads)
.. |docker_bioconductor-tapseq| image:: https://quay.io/repository/biocontainers/bioconductor-tapseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tapseq
.. _`bioconductor-tapseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tapseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tapseq";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tapseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tapseq/README.html