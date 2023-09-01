:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '2pg_cartesian'
.. highlight: bash

2pg_cartesian
=============

.. conda:recipe:: 2pg_cartesian
   :replaces_section_title:
   :noindex:

   2pg cartesian is a framework of optimization algorithms for protein structure prediction.

   :homepage: https://github.com/rodrigofaccioli/2pg_cartesian
   :license: Apache License, Version 2.0
   :recipe: /`2pg_cartesian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian/meta.yaml>`_

   


.. conda:package:: 2pg_cartesian

   |downloads_2pg_cartesian| |docker_2pg_cartesian|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends gromacs: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install 2pg_cartesian

   and update with::

      mamba update 2pg_cartesian

  To create a new environment, run::

      mamba create --name myenvname 2pg_cartesian

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/2pg_cartesian:<tag>

   (see `2pg_cartesian/tags`_ for valid values for ``<tag>``)


.. |downloads_2pg_cartesian| image:: https://img.shields.io/conda/dn/bioconda/2pg_cartesian.svg?style=flat
   :target: https://anaconda.org/bioconda/2pg_cartesian
   :alt:   (downloads)
.. |docker_2pg_cartesian| image:: https://quay.io/repository/biocontainers/2pg_cartesian/status
   :target: https://quay.io/repository/biocontainers/2pg_cartesian
.. _`2pg_cartesian/tags`: https://quay.io/repository/biocontainers/2pg_cartesian?tab=tags


.. raw:: html

    <script>
        var package = "2pg_cartesian";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/2pg_cartesian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/2pg_cartesian/README.html