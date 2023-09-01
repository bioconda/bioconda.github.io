:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tablet'
.. highlight: bash

tablet
======

.. conda:recipe:: tablet
   :replaces_section_title:
   :noindex:

   Tablet is a lightweight\, high\-performance graphical viewer for next generation sequence assemblies and alignments.

   :homepage: https://ics.hutton.ac.uk/tablet
   :license: BSD-2-Clause
   :recipe: /`tablet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet/meta.yaml>`_

   


.. conda:package:: tablet

   |downloads_tablet| |docker_tablet|

   :versions:
      
      

      ``1.17.08.17-1``,  ``1.17.08.17-0``

      

   
   :depends openjdk: ``>=8,<9``
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

      mamba install tablet

   and update with::

      mamba update tablet

  To create a new environment, run::

      mamba create --name myenvname tablet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tablet:<tag>

   (see `tablet/tags`_ for valid values for ``<tag>``)


.. |downloads_tablet| image:: https://img.shields.io/conda/dn/bioconda/tablet.svg?style=flat
   :target: https://anaconda.org/bioconda/tablet
   :alt:   (downloads)
.. |docker_tablet| image:: https://quay.io/repository/biocontainers/tablet/status
   :target: https://quay.io/repository/biocontainers/tablet
.. _`tablet/tags`: https://quay.io/repository/biocontainers/tablet?tab=tags


.. raw:: html

    <script>
        var package = "tablet";
        var versions = ["1.17.08.17","1.17.08.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tablet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tablet/README.html