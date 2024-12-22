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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-4</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>0.2.10-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``0.2.10-0``,  ``0.2.8-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.56.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomicalignments: ``>=1.24.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-iranges: ``>=2.22.2``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends libcxx: ``>=18``
   :depends r-airr: ``>=1.3``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-alakazam

   and update with::

      mamba update r-alakazam

  To create a new environment, run::

      mamba create --name myenvname r-alakazam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
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