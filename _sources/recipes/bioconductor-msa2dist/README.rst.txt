:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msa2dist'
.. highlight: bash

bioconductor-msa2dist
=====================

.. conda:recipe:: bioconductor-msa2dist
   :replaces_section_title:
   :noindex:

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MSA2dist.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-msa2dist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist/meta.yaml>`_

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis. It uses scoring matrices to be used in these pairwise distance calcualtions which can be adapted to any scoring for DNA or AA characters. E.g. by using literal distances MSA2dist calcualtes pairwise IUPAC distances.


.. conda:package:: bioconductor-msa2dist

   |downloads_bioconductor-msa2dist| |docker_bioconductor-msa2dist|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-rcpp: 
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-seqinr: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msa2dist

   and update with::

      conda update bioconductor-msa2dist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msa2dist:<tag>

   (see `bioconductor-msa2dist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msa2dist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa2dist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msa2dist
   :alt:   (downloads)
.. |docker_bioconductor-msa2dist| image:: https://quay.io/repository/biocontainers/bioconductor-msa2dist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa2dist
.. _`bioconductor-msa2dist/tags`: https://quay.io/repository/biocontainers/bioconductor-msa2dist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msa2dist";
        var versions = ["1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html