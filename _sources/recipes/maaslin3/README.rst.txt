:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maaslin3'
.. highlight: bash

maaslin3
========

.. conda:recipe:: maaslin3
   :replaces_section_title:
   :noindex:

   \"Refining and extending generalized multivariate linear models for meta\-omic association discovery\"

   :homepage: https://github.com/biobakery/maaslin3
   :license: Custom
   :recipe: /`maaslin3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin3/meta.yaml>`_

   MaAsLin 3 refines and extends generalized multivariate linear models for meta\-omicron association discovery. It finds abundance and prevalence associations between microbiome meta\-omics features and complex metadata in population\-scale epidemiological studies. The software includes multiple analysis methods \(including support for multiple covariates\, repeated measures\, and ordered predictors\)\, filtering\, normalization\, and transform options to customize analysis for your specific study.


.. conda:package:: maaslin3

   |downloads_maaslin3| |docker_maaslin3|

   :versions:
      
      

      ``0.99.16-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-logging: 
   :depends r-multcomp: 
   :depends r-optparse: 
   :depends r-patchwork: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-survival: 
   :depends r-tibble: 
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

      mamba install maaslin3

   and update with::

      mamba update maaslin3

  To create a new environment, run::

      mamba create --name myenvname maaslin3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maaslin3:<tag>

   (see `maaslin3/tags`_ for valid values for ``<tag>``)


.. |downloads_maaslin3| image:: https://img.shields.io/conda/dn/bioconda/maaslin3.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin3
   :alt:   (downloads)
.. |docker_maaslin3| image:: https://quay.io/repository/biocontainers/maaslin3/status
   :target: https://quay.io/repository/biocontainers/maaslin3
.. _`maaslin3/tags`: https://quay.io/repository/biocontainers/maaslin3?tab=tags


.. raw:: html

    <script>
        var package = "maaslin3";
        var versions = ["0.99.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin3/README.html