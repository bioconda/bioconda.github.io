:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'k-slam'
.. highlight: bash

k-slam
======

.. conda:recipe:: k-slam
   :replaces_section_title:
   :noindex:

   k\-SLAM is a program for alignment based metagenomic analysis of large sets of high\-throughput sequence data.

   :homepage: https://github.com/aindj/k-SLAM
   :license: GPL-3.0
   :recipe: /`k-slam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k-slam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k-slam/meta.yaml>`_

   


.. conda:package:: k-slam

   |downloads_k-slam| |docker_k-slam|

   :versions:
      
      

      ``1.0-1``

      

   
   :depends boost: ``1.64*``
   :depends libgcc: 
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

      mamba install k-slam

   and update with::

      mamba update k-slam

  To create a new environment, run::

      mamba create --name myenvname k-slam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/k-slam:<tag>

   (see `k-slam/tags`_ for valid values for ``<tag>``)


.. |downloads_k-slam| image:: https://img.shields.io/conda/dn/bioconda/k-slam.svg?style=flat
   :target: https://anaconda.org/bioconda/k-slam
   :alt:   (downloads)
.. |docker_k-slam| image:: https://quay.io/repository/biocontainers/k-slam/status
   :target: https://quay.io/repository/biocontainers/k-slam
.. _`k-slam/tags`: https://quay.io/repository/biocontainers/k-slam?tab=tags


.. raw:: html

    <script>
        var package = "k-slam";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/k-slam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/k-slam/README.html