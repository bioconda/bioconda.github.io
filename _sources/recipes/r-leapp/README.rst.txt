:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-leapp'
.. highlight: bash

r-leapp
=======

.. conda:recipe:: r-leapp
   :replaces_section_title:
   :noindex:

   These functions take a gene expression value matrix\, a primary covariate vector\, an additional known covariates matrix.  A two stage analysis is applied to counter the effects of latent variables on the rankings of hypotheses.  The estimation and adjustment of latent effects are proposed by Sun\, Zhang and Owen \(2011\).  \"leapp\" is developed in the context of microarray experiments\, but may be used as a general tool for high throughput data sets where dependence may be involved.

   :homepage: https://CRAN.R-project.org/package=leapp
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-leapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leapp/meta.yaml>`_

   


.. conda:package:: r-leapp

   |downloads_r-leapp| |docker_r-leapp|

   :versions:
      
      

      ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-sva: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-corpcor: 
   :depends r-mass: 
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

      mamba install r-leapp

   and update with::

      mamba update r-leapp

  To create a new environment, run::

      mamba create --name myenvname r-leapp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-leapp:<tag>

   (see `r-leapp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-leapp| image:: https://img.shields.io/conda/dn/bioconda/r-leapp.svg?style=flat
   :target: https://anaconda.org/bioconda/r-leapp
   :alt:   (downloads)
.. |docker_r-leapp| image:: https://quay.io/repository/biocontainers/r-leapp/status
   :target: https://quay.io/repository/biocontainers/r-leapp
.. _`r-leapp/tags`: https://quay.io/repository/biocontainers/r-leapp?tab=tags


.. raw:: html

    <script>
        var package = "r-leapp";
        var versions = ["1.3","1.3","1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-leapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-leapp/README.html