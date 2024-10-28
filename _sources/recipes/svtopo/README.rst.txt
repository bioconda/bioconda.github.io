:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtopo'
.. highlight: bash

svtopo
======

.. conda:recipe:: svtopo
   :replaces_section_title:
   :noindex:

   Complex structural variant visualization for HiFi sequencing data\: extraction tool

   :homepage: https://github.com/PacificBiosciences/HiFi-SVTopo
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`svtopo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopo/meta.yaml>`_

   


.. conda:package:: svtopo

   |downloads_svtopo| |docker_svtopo|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends svtopovz: ``0.1.1``
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

      mamba install svtopo

   and update with::

      mamba update svtopo

  To create a new environment, run::

      mamba create --name myenvname svtopo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svtopo:<tag>

   (see `svtopo/tags`_ for valid values for ``<tag>``)


.. |downloads_svtopo| image:: https://img.shields.io/conda/dn/bioconda/svtopo.svg?style=flat
   :target: https://anaconda.org/bioconda/svtopo
   :alt:   (downloads)
.. |docker_svtopo| image:: https://quay.io/repository/biocontainers/svtopo/status
   :target: https://quay.io/repository/biocontainers/svtopo
.. _`svtopo/tags`: https://quay.io/repository/biocontainers/svtopo?tab=tags


.. raw:: html

    <script>
        var package = "svtopo";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtopo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtopo/README.html