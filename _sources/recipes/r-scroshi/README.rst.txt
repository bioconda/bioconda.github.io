:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scroshi'
.. highlight: bash

r-scroshi
=========

.. conda:recipe:: r-scroshi
   :replaces_section_title:
   :noindex:

   scROSHI\: robust supervised hierarchical identification of single cells

   :homepage: https://CRAN.R-project.org/package=scROSHI
   :license: MIT / MIT
   :recipe: /`r-scroshi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scroshi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scroshi/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqad058`

   


.. conda:package:: r-scroshi

   |downloads_r-scroshi| |docker_r-scroshi|

   :versions:
      
      

      ``1.0.0.0-0``

      

   
   :depends bioconductor-limma: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-uwot: 
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

      mamba install r-scroshi

   and update with::

      mamba update r-scroshi

  To create a new environment, run::

      mamba create --name myenvname r-scroshi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scroshi:<tag>

   (see `r-scroshi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scroshi| image:: https://img.shields.io/conda/dn/bioconda/r-scroshi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scroshi
   :alt:   (downloads)
.. |docker_r-scroshi| image:: https://quay.io/repository/biocontainers/r-scroshi/status
   :target: https://quay.io/repository/biocontainers/r-scroshi
.. _`r-scroshi/tags`: https://quay.io/repository/biocontainers/r-scroshi?tab=tags


.. raw:: html

    <script>
        var package = "r-scroshi";
        var versions = ["1.0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scroshi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scroshi/README.html