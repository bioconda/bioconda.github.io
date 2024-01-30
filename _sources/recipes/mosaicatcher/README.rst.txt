:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosaicatcher'
.. highlight: bash

mosaicatcher
============

.. conda:recipe:: mosaicatcher
   :replaces_section_title:
   :noindex:

   mosaicatcher\: counts Strand\-seq reads and classifies strand states of each chromosome in each cell using a Hidden Markov Model.

   :homepage: https://github.com/friendsofstrandseq/mosaicatcher/
   :license: MIT / MIT License
   :recipe: /`mosaicatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaicatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaicatcher/meta.yaml>`_

   


.. conda:package:: mosaicatcher

   |downloads_mosaicatcher| |docker_mosaicatcher|

   :versions:
      
      

      ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.17,<1.20.0a0``
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

      mamba install mosaicatcher

   and update with::

      mamba update mosaicatcher

  To create a new environment, run::

      mamba create --name myenvname mosaicatcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mosaicatcher:<tag>

   (see `mosaicatcher/tags`_ for valid values for ``<tag>``)


.. |downloads_mosaicatcher| image:: https://img.shields.io/conda/dn/bioconda/mosaicatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/mosaicatcher
   :alt:   (downloads)
.. |docker_mosaicatcher| image:: https://quay.io/repository/biocontainers/mosaicatcher/status
   :target: https://quay.io/repository/biocontainers/mosaicatcher
.. _`mosaicatcher/tags`: https://quay.io/repository/biocontainers/mosaicatcher?tab=tags


.. raw:: html

    <script>
        var package = "mosaicatcher";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosaicatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosaicatcher/README.html