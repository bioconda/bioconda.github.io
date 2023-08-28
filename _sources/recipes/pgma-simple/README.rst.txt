:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgma-simple'
.. highlight: bash

pgma-simple
===========

.. conda:recipe:: pgma-simple
   :replaces_section_title:
   :noindex:

   Pgma is a simple program for building WPGMA trees.

   :homepage: https://github.com/BackofenLab/GraphClust
   :license: GNUv3
   :recipe: /`pgma-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgma-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgma-simple/meta.yaml>`_

   


.. conda:package:: pgma-simple

   |downloads_pgma-simple| |docker_pgma-simple|

   :versions:
      
      

      ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pgma-simple

   and update with::

      mamba update pgma-simple

  To create a new environment, run::

      mamba create --name myenvname pgma-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgma-simple:<tag>

   (see `pgma-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_pgma-simple| image:: https://img.shields.io/conda/dn/bioconda/pgma-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/pgma-simple
   :alt:   (downloads)
.. |docker_pgma-simple| image:: https://quay.io/repository/biocontainers/pgma-simple/status
   :target: https://quay.io/repository/biocontainers/pgma-simple
.. _`pgma-simple/tags`: https://quay.io/repository/biocontainers/pgma-simple?tab=tags


.. raw:: html

    <script>
        var package = "pgma-simple";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgma-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgma-simple/README.html