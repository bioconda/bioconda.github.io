:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-viber'
.. highlight: bash

r-viber
=======

.. conda:recipe:: r-viber
   :replaces_section_title:
   :noindex:

   Variational Binomial Mixtures.

   :homepage: https://github.com/caravagnalab/VIBER
   :documentation: https://caravagnalab.github.io/VIBER/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-viber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viber/meta.yaml>`_

   VIBER is a package that implements a variational Bayesian model to
   fit multi\-variate Binomial mixtures. The statistical model is
   semi\-parametric and fit by a variational mean\-field approximation to
   the model posterior. The components are Binomial distributions which
   can model count data\; these can be used to model sequencing counts in
   the context of cancer\, for instance. The package implements methods to
   fit and visualize clustering results.



.. conda:package:: r-viber

   |downloads_r-viber| |docker_r-viber|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-ctree: 
   :depends r-dplyr: 
   :depends r-easypar: 
   :depends r-ggplot2: 
   :depends r-pio: 
   :depends r-reshape2: 
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

      mamba install r-viber

   and update with::

      mamba update r-viber

  To create a new environment, run::

      mamba create --name myenvname r-viber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-viber:<tag>

   (see `r-viber/tags`_ for valid values for ``<tag>``)


.. |downloads_r-viber| image:: https://img.shields.io/conda/dn/bioconda/r-viber.svg?style=flat
   :target: https://anaconda.org/bioconda/r-viber
   :alt:   (downloads)
.. |docker_r-viber| image:: https://quay.io/repository/biocontainers/r-viber/status
   :target: https://quay.io/repository/biocontainers/r-viber
.. _`r-viber/tags`: https://quay.io/repository/biocontainers/r-viber?tab=tags


.. raw:: html

    <script>
        var package = "r-viber";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-viber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-viber/README.html