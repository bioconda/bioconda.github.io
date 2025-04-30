:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bmix'
.. highlight: bash

r-bmix
======

.. conda:recipe:: r-bmix
   :replaces_section_title:
   :noindex:

   Binomial and Beta\-Binomial mixture models for counts data.

   :homepage: https://github.com/caravagnalab/BMix
   :documentation: https://caravagnalab.github.io/BMix/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-bmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bmix/meta.yaml>`_

   BMix provides univariate Binomial and Beta\-Binomial mixture models. 
   Count\-based mixtures can be used in a variety of settings\, for instance 
   to model genome sequencing data of somatic mutations in cancer. BMix fits 
   these mixtures by maximum likelihood exploiting the Expectation Maximization 
   algorithm. Model selection for the number of mixture components is by the 
   Integrated Classification Likelihood\, an extension of the Bayesian Information 
   Criterion that includes the entropy of the latent variables.



.. conda:package:: r-bmix

   |downloads_r-bmix| |docker_r-bmix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-cowplot: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-easypar: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-pio: 
   :depends r-tibble: 
   :depends r-vgam: 
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

      mamba install r-bmix

   and update with::

      mamba update r-bmix

  To create a new environment, run::

      mamba create --name myenvname r-bmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bmix:<tag>

   (see `r-bmix/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bmix| image:: https://img.shields.io/conda/dn/bioconda/r-bmix.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bmix
   :alt:   (downloads)
.. |docker_r-bmix| image:: https://quay.io/repository/biocontainers/r-bmix/status
   :target: https://quay.io/repository/biocontainers/r-bmix
.. _`r-bmix/tags`: https://quay.io/repository/biocontainers/r-bmix?tab=tags


.. raw:: html

    <script>
        var package = "r-bmix";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bmix/README.html