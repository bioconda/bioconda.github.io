:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bindashtree'
.. highlight: bash

bindashtree
===========

.. conda:recipe:: bindashtree
   :replaces_section_title:
   :noindex:

   bindashtree is a ultra\-fast tool to build genome phylogenetic tree via Binwise Densified MinHash and Rapid Neighbor\-joining

   :homepage: https://github.com/jianshu93/bindashtree
   :license: MIT
   :recipe: /`bindashtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindashtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindashtree/meta.yaml>`_

   


.. conda:package:: bindashtree

   |downloads_bindashtree| |docker_bindashtree|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install bindashtree

   and update with::

      mamba update bindashtree

  To create a new environment, run::

      mamba create --name myenvname bindashtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bindashtree:<tag>

   (see `bindashtree/tags`_ for valid values for ``<tag>``)


.. |downloads_bindashtree| image:: https://img.shields.io/conda/dn/bioconda/bindashtree.svg?style=flat
   :target: https://anaconda.org/bioconda/bindashtree
   :alt:   (downloads)
.. |docker_bindashtree| image:: https://quay.io/repository/biocontainers/bindashtree/status
   :target: https://quay.io/repository/biocontainers/bindashtree
.. _`bindashtree/tags`: https://quay.io/repository/biocontainers/bindashtree?tab=tags


.. raw:: html

    <script>
        var package = "bindashtree";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bindashtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bindashtree/README.html