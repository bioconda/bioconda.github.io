:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hahmmr'
.. highlight: bash

r-hahmmr
========

.. conda:recipe:: r-hahmmr
   :replaces_section_title:
   :noindex:

   Haplotype\-aware Hidden Markov Model for RNA \(HaHMMR\) is a method for detecting copy number variations \(CNVs\) from bulk RNA\-seq data. Additional examples\, documentations\, and details on the method are available at \<https\:\/\/github.com\/kharchenkolab\/hahmmr\/\>.

   :homepage: https://CRAN.R-project.org/package=hahmmr
   :license: MIT / MIT
   :recipe: /`r-hahmmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hahmmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hahmmr/meta.yaml>`_

   


.. conda:package:: r-hahmmr

   |downloads_r-hahmmr| |docker_r-hahmmr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-patchwork: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-roptim: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install r-hahmmr

   and update with::

      mamba update r-hahmmr

  To create a new environment, run::

      mamba create --name myenvname r-hahmmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-hahmmr:<tag>

   (see `r-hahmmr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hahmmr| image:: https://img.shields.io/conda/dn/bioconda/r-hahmmr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hahmmr
   :alt:   (downloads)
.. |docker_r-hahmmr| image:: https://quay.io/repository/biocontainers/r-hahmmr/status
   :target: https://quay.io/repository/biocontainers/r-hahmmr
.. _`r-hahmmr/tags`: https://quay.io/repository/biocontainers/r-hahmmr?tab=tags


.. raw:: html

    <script>
        var package = "r-hahmmr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hahmmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hahmmr/README.html