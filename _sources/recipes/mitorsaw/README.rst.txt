:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitorsaw'
.. highlight: bash

mitorsaw
========

.. conda:recipe:: mitorsaw
   :replaces_section_title:
   :noindex:

   A tool for mitochondrial analysis for HiFi sequencing data

   :homepage: https://github.com/PacificBiosciences/mitorsaw
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`mitorsaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitorsaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitorsaw/meta.yaml>`_

   


.. conda:package:: mitorsaw

   |downloads_mitorsaw| |docker_mitorsaw|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
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

      mamba install mitorsaw

   and update with::

      mamba update mitorsaw

  To create a new environment, run::

      mamba create --name myenvname mitorsaw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitorsaw:<tag>

   (see `mitorsaw/tags`_ for valid values for ``<tag>``)


.. |downloads_mitorsaw| image:: https://img.shields.io/conda/dn/bioconda/mitorsaw.svg?style=flat
   :target: https://anaconda.org/bioconda/mitorsaw
   :alt:   (downloads)
.. |docker_mitorsaw| image:: https://quay.io/repository/biocontainers/mitorsaw/status
   :target: https://quay.io/repository/biocontainers/mitorsaw
.. _`mitorsaw/tags`: https://quay.io/repository/biocontainers/mitorsaw?tab=tags


.. raw:: html

    <script>
        var package = "mitorsaw";
        var versions = ["0.2.1","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitorsaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitorsaw/README.html