:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tree-qmc'
.. highlight: bash

tree-qmc
========

.. conda:recipe:: tree-qmc
   :replaces_section_title:
   :noindex:

   TREE\-QMC is a quartet\-based method for estimating species trees from gene trees.

   :homepage: https://github.com/molloy-lab/TREE-QMC
   :license: MIT
   :recipe: /`tree-qmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tree-qmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tree-qmc/meta.yaml>`_

   


.. conda:package:: tree-qmc

   |downloads_tree-qmc| |docker_tree-qmc|

   :versions:
      
      

      ``3.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
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

      mamba install tree-qmc

   and update with::

      mamba update tree-qmc

  To create a new environment, run::

      mamba create --name myenvname tree-qmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tree-qmc:<tag>

   (see `tree-qmc/tags`_ for valid values for ``<tag>``)


.. |downloads_tree-qmc| image:: https://img.shields.io/conda/dn/bioconda/tree-qmc.svg?style=flat
   :target: https://anaconda.org/bioconda/tree-qmc
   :alt:   (downloads)
.. |docker_tree-qmc| image:: https://quay.io/repository/biocontainers/tree-qmc/status
   :target: https://quay.io/repository/biocontainers/tree-qmc
.. _`tree-qmc/tags`: https://quay.io/repository/biocontainers/tree-qmc?tab=tags


.. raw:: html

    <script>
        var package = "tree-qmc";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tree-qmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tree-qmc/README.html