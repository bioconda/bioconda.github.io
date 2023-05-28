:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-alakazam'
.. highlight: bash

r-alakazam
==========

.. conda:recipe:: r-alakazam
   :replaces_section_title:
   :noindex:

   Provides methods for high\-throughput adaptive immune  receptor repertoire sequencing \(AIRR\-Seq\; Rep\-Seq\) analysis. In  particular\, immunoglobulin \(Ig\) sequence lineage reconstruction\,  lineage topology analysis\, diversity profiling\, amino acid property  analysis and gene usage. Citations\:  Gupta and Vander Heiden\, et al \(2017\) \<doi\:10.1093\/bioinformatics\/btv359\>\, Stern\, Yaari and Vander Heiden\, et al \(2014\) \<doi\:10.1126\/scitranslmed.3008879\>.

   :homepage: http://alakazam.readthedocs.org
   :license: AGPL / AGPL-3
   :recipe: /`r-alakazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-alakazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-alakazam/meta.yaml>`_

   


.. conda:package:: r-alakazam

   |downloads_r-alakazam| |docker_r-alakazam|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``0.2.10-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0``
   :depends bioconductor-genomicalignments: ``>=1.24.0``
   :depends bioconductor-iranges: ``>=2.22.2``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-airr: ``>=1.3``
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: ``>=1.0``
   :depends r-ggplot2: ``>=3.3.4``
   :depends r-igraph: ``>=1.0.0``
   :depends r-matrix: 
   :depends r-progress: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-seqinr: 
   :depends r-stringi: 
   :depends r-tibble: 
   :depends r-tidyr: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-alakazam

   and update with::

      conda update r-alakazam

   or use the docker container::

      docker pull quay.io/biocontainers/r-alakazam:<tag>

   (see `r-alakazam/tags`_ for valid values for ``<tag>``)


.. |downloads_r-alakazam| image:: https://img.shields.io/conda/dn/bioconda/r-alakazam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-alakazam
   :alt:   (downloads)
.. |docker_r-alakazam| image:: https://quay.io/repository/biocontainers/r-alakazam/status
   :target: https://quay.io/repository/biocontainers/r-alakazam
.. _`r-alakazam/tags`: https://quay.io/repository/biocontainers/r-alakazam?tab=tags


.. raw:: html

    <script>
        var package = "r-alakazam";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-alakazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-alakazam/README.html