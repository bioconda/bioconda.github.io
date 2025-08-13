:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'distree'
.. highlight: bash

distree
=======

.. conda:recipe:: distree
   :replaces_section_title:
   :noindex:

   A tool to calculate distances between phylogenetic trees.

   :homepage: https://github.com/PathoGenOmics-Lab/distree
   :license: GPL3 / GPL-3.0-only
   :recipe: /`distree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/distree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/distree/meta.yaml>`_

   


.. conda:package:: distree

   |downloads_distree| |docker_distree|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install distree

   and update with::

      mamba update distree

  To create a new environment, run::

      mamba create --name myenvname distree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/distree:<tag>

   (see `distree/tags`_ for valid values for ``<tag>``)


.. |downloads_distree| image:: https://img.shields.io/conda/dn/bioconda/distree.svg?style=flat
   :target: https://anaconda.org/bioconda/distree
   :alt:   (downloads)
.. |docker_distree| image:: https://quay.io/repository/biocontainers/distree/status
   :target: https://quay.io/repository/biocontainers/distree
.. _`distree/tags`: https://quay.io/repository/biocontainers/distree?tab=tags


.. raw:: html

    <script>
        var package = "distree";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/distree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/distree/README.html