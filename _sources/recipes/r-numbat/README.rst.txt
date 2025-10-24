:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-numbat'
.. highlight: bash

r-numbat
========

.. conda:recipe:: r-numbat
   :replaces_section_title:
   :noindex:

   A computational method that infers copy number variations \(CNVs\) in cancer scRNA\-seq data and reconstructs the tumor phylogeny. \'numbat\' integrates signals from gene expression\, allelic ratio\, and population haplotype structures to accurately infer allele\-specific CNVs in single cells and reconstruct their lineage relationship. \'numbat\' can be used to\: 1. detect allele\-specific copy number variations from single\-cells\; 2. differentiate tumor versus normal cells in the tumor microenvironment\; 3. infer the clonal architecture and evolutionary history of profiled tumors. \'numbat\' does not require tumor\/normal\-paired DNA or genotype data\, but operates solely on the donor scRNA\-data data \(for example\, 10x Cell Ranger output\). Additional examples and documentations are available at \<https\:\/\/kharchenkolab.github.io\/numbat\/\>. For details on the method please see Gao et al. Nature Biotechnology \(2022\) \<doi\:10.1038\/s41587\-022\-01468\-y\>.

   :homepage: https://github.com/kharchenkolab/numbat/, https://kharchenkolab.github.io/numbat/
   :license: MIT / MIT
   :recipe: /`r-numbat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-numbat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-numbat/meta.yaml>`_

   


.. conda:package:: r-numbat

   |downloads_r-numbat| |docker_r-numbat|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-dplyr: ``>=1.1.1``
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glue: 
   :depends r-hahmmr: ``>=1.0.0,<1.1.0a0``
   :depends r-igraph: 
   :depends r-logger: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-paralleldist: 
   :depends r-patchwork: 
   :depends r-pryr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rhpcblasctl: 
   :depends r-roptim: 
   :depends r-scales: 
   :depends r-scistreer: ``>=1.1.0``
   :depends r-scistreer: ``>=1.2.0,<1.3.0a0``
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: ``>=1.3.0``
   :depends r-vcfr: 
   :depends r-zoo: 
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

      mamba install r-numbat

   and update with::

      mamba update r-numbat

  To create a new environment, run::

      mamba create --name myenvname r-numbat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-numbat:<tag>

   (see `r-numbat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-numbat| image:: https://img.shields.io/conda/dn/bioconda/r-numbat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-numbat
   :alt:   (downloads)
.. |docker_r-numbat| image:: https://quay.io/repository/biocontainers/r-numbat/status
   :target: https://quay.io/repository/biocontainers/r-numbat
.. _`r-numbat/tags`: https://quay.io/repository/biocontainers/r-numbat?tab=tags


.. raw:: html

    <script>
        var package = "r-numbat";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-numbat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-numbat/README.html