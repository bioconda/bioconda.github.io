:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decenttree'
.. highlight: bash

decenttree
==========

.. conda:recipe:: decenttree
   :replaces_section_title:
   :noindex:

   Scalable Neighbour\-Joining and related algorithms for phylogenetic inference

   :homepage: https://github.com/iqtree/decenttree
   :license: GPL / GPL-2.0-only
   :recipe: /`decenttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decenttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decenttree/meta.yaml>`_

   DecentTree is a fast and memory\-efficient implementation of distance\-based
   phylogenetic tree construction methods\, including Neighbour\-Joining and its variants.



.. conda:package:: decenttree

   |downloads_decenttree| |docker_decenttree|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install decenttree

   and update with::

      mamba update decenttree

  To create a new environment, run::

      mamba create --name myenvname decenttree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/decenttree:<tag>

   (see `decenttree/tags`_ for valid values for ``<tag>``)


.. |downloads_decenttree| image:: https://img.shields.io/conda/dn/bioconda/decenttree.svg?style=flat
   :target: https://anaconda.org/bioconda/decenttree
   :alt:   (downloads)
.. |docker_decenttree| image:: https://quay.io/repository/biocontainers/decenttree/status
   :target: https://quay.io/repository/biocontainers/decenttree
.. _`decenttree/tags`: https://quay.io/repository/biocontainers/decenttree?tab=tags


.. raw:: html

    <script>
        var package = "decenttree";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decenttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decenttree/README.html