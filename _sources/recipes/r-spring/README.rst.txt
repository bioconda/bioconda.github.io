:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spring'
.. highlight: bash

r-spring
========

.. conda:recipe:: r-spring
   :replaces_section_title:
   :noindex:

   Semi\-Parametric Rank\-based approach for INference in Graphical model \(SPRING\)

   :homepage: https://github.com/GraceYoon/SPRING
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-spring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spring/meta.yaml>`_

   SPRING is to estimate sparse microbial association networks using rank\-based correlation with sparse graphical modeling techniques.


.. conda:package:: r-spring

   |downloads_r-spring| |docker_r-spring|

   :versions:
      
      

      ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-huge: 
   :depends r-mixedcca: 
   :depends r-mvtnorm: 
   :depends r-pulsar: 
   :depends r-rootsolve: 
   :depends r-spieceasi: 
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

      mamba install r-spring

   and update with::

      mamba update r-spring

  To create a new environment, run::

      mamba create --name myenvname r-spring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-spring:<tag>

   (see `r-spring/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spring| image:: https://img.shields.io/conda/dn/bioconda/r-spring.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spring
   :alt:   (downloads)
.. |docker_r-spring| image:: https://quay.io/repository/biocontainers/r-spring/status
   :target: https://quay.io/repository/biocontainers/r-spring
.. _`r-spring/tags`: https://quay.io/repository/biocontainers/r-spring?tab=tags


.. raw:: html

    <script>
        var package = "r-spring";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spring/README.html