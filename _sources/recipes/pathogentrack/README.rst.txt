:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogentrack'
.. highlight: bash

pathogentrack
=============

.. conda:recipe:: pathogentrack
   :replaces_section_title:
   :noindex:

   A pipeline to identify pathogenic microorganisms from scRNA\-seq raw data

   :homepage: https://github.com/ncrna/PathogenTrack
   :license: MIT / MIT
   :recipe: /`pathogentrack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogentrack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogentrack/meta.yaml>`_

   


.. conda:package:: pathogentrack

   |downloads_pathogentrack| |docker_pathogentrack|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends biopython: ``>=1.78``
   :depends python: 
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

      mamba install pathogentrack

   and update with::

      mamba update pathogentrack

  To create a new environment, run::

      mamba create --name myenvname pathogentrack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathogentrack:<tag>

   (see `pathogentrack/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogentrack| image:: https://img.shields.io/conda/dn/bioconda/pathogentrack.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogentrack
   :alt:   (downloads)
.. |docker_pathogentrack| image:: https://quay.io/repository/biocontainers/pathogentrack/status
   :target: https://quay.io/repository/biocontainers/pathogentrack
.. _`pathogentrack/tags`: https://quay.io/repository/biocontainers/pathogentrack?tab=tags


.. raw:: html

    <script>
        var package = "pathogentrack";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogentrack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogentrack/README.html