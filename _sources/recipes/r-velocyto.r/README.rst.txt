:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-velocyto.r'
.. highlight: bash

r-velocyto.r
============

.. conda:recipe:: r-velocyto.r
   :replaces_section_title:
   :noindex:

   RNA velocity estimation in R

   :homepage: https://github.com/velocyto-team/velocyto.R
   :license: GPL3 / GPL-3
   :recipe: /`r-velocyto.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r/meta.yaml>`_

   


.. conda:package:: r-velocyto.r

   |downloads_r-velocyto.r| |docker_r-velocyto.r|

   :versions:
      
      

      ``0.6-8``,  ``0.6-7``,  ``0.6-6``,  ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-hdf5r: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-rcpp: ``>=0.12.13``
   :depends r-rcpparmadillo: 
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

      mamba install r-velocyto.r

   and update with::

      mamba update r-velocyto.r

  To create a new environment, run::

      mamba create --name myenvname r-velocyto.r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-velocyto.r:<tag>

   (see `r-velocyto.r/tags`_ for valid values for ``<tag>``)


.. |downloads_r-velocyto.r| image:: https://img.shields.io/conda/dn/bioconda/r-velocyto.r.svg?style=flat
   :target: https://anaconda.org/bioconda/r-velocyto.r
   :alt:   (downloads)
.. |docker_r-velocyto.r| image:: https://quay.io/repository/biocontainers/r-velocyto.r/status
   :target: https://quay.io/repository/biocontainers/r-velocyto.r
.. _`r-velocyto.r/tags`: https://quay.io/repository/biocontainers/r-velocyto.r?tab=tags


.. raw:: html

    <script>
        var package = "r-velocyto.r";
        var versions = ["0.6","0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-velocyto.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-velocyto.r/README.html