:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-periodicdna'
.. highlight: bash

bioconductor-periodicdna
========================

.. conda:recipe:: bioconductor-periodicdna
   :replaces_section_title:
   :noindex:

   Set of tools to identify periodic occurrences of k\-mers in DNA sequences

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/periodicDNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-periodicdna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna/meta.yaml>`_

   This R package helps the user identify k\-mers \(e.g. di\- or tri\-nucleotides\) present periodically in a set of genomic loci \(typically regulatory elements\). The functions of this package provide a straightforward approach to find periodic occurrences of k\-mers in DNA sequences\, such as regulatory elements. It is not aimed at identifying motifs separated by a conserved distance\; for this type of analysis\, please visit MEME website.


.. conda:package:: bioconductor-periodicdna

   |downloads_bioconductor-periodicdna| |docker_bioconductor-periodicdna|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-periodicdna

   and update with::

      conda update bioconductor-periodicdna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-periodicdna:<tag>

   (see `bioconductor-periodicdna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-periodicdna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-periodicdna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-periodicdna
   :alt:   (downloads)
.. |docker_bioconductor-periodicdna| image:: https://quay.io/repository/biocontainers/bioconductor-periodicdna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-periodicdna
.. _`bioconductor-periodicdna/tags`: https://quay.io/repository/biocontainers/bioconductor-periodicdna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-periodicdna";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html