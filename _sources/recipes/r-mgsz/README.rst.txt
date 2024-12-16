:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mgsz'
.. highlight: bash

r-mgsz
======

.. conda:recipe:: r-mgsz
   :replaces_section_title:
   :noindex:

   Performs gene set analysis based on GSZ scoring function and asymptotic p\-value. It is different from GSZ in that it implements asymptotic p\-values instead of empirical p\-values. Asymptotic p\-values are calculated by fitting suitable distribution model to the null distribution. Unlike empirical p\-values\, resolution of asymptotic p\-values are independent of the number of permutations and hence requires considerably fewer permutations. In addition\, this package allows gene set analysis with seven other popular gene set analysis methods.

   :homepage: https://CRAN.R-project.org/package=mGSZ
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-mgsz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz/meta.yaml>`_

   


.. conda:package:: r-mgsz

   |downloads_r-mgsz| |docker_r-mgsz|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gsa: 
   :depends r-ismev: 
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

      mamba install r-mgsz

   and update with::

      mamba update r-mgsz

  To create a new environment, run::

      mamba create --name myenvname r-mgsz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mgsz:<tag>

   (see `r-mgsz/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mgsz| image:: https://img.shields.io/conda/dn/bioconda/r-mgsz.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mgsz
   :alt:   (downloads)
.. |docker_r-mgsz| image:: https://quay.io/repository/biocontainers/r-mgsz/status
   :target: https://quay.io/repository/biocontainers/r-mgsz
.. _`r-mgsz/tags`: https://quay.io/repository/biocontainers/r-mgsz?tab=tags


.. raw:: html

    <script>
        var package = "r-mgsz";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mgsz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mgsz/README.html