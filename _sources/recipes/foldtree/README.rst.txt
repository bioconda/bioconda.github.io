:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldtree'
.. highlight: bash

foldtree
========

.. conda:recipe:: foldtree
   :replaces_section_title:
   :noindex:

   Foldtree creates phylogenetic trees from protein structures using Foldseek.

   :homepage: https://github.com/DessimozLab/fold_tree
   :license: GPL3 / MIT
   :recipe: /`foldtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldtree/meta.yaml>`_

   


.. conda:package:: foldtree

   |downloads_foldtree| |docker_foldtree|

   :versions:
      
      

      ``1.1.0rc2-0``

      

   
   :depends click: 
   :depends python: 
   :depends snakemake-minimal: 
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

      mamba install foldtree

   and update with::

      mamba update foldtree

  To create a new environment, run::

      mamba create --name myenvname foldtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/foldtree:<tag>

   (see `foldtree/tags`_ for valid values for ``<tag>``)


.. |downloads_foldtree| image:: https://img.shields.io/conda/dn/bioconda/foldtree.svg?style=flat
   :target: https://anaconda.org/bioconda/foldtree
   :alt:   (downloads)
.. |docker_foldtree| image:: https://quay.io/repository/biocontainers/foldtree/status
   :target: https://quay.io/repository/biocontainers/foldtree
.. _`foldtree/tags`: https://quay.io/repository/biocontainers/foldtree?tab=tags


.. raw:: html

    <script>
        var package = "foldtree";
        var versions = ["1.1.0rc2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldtree/README.html