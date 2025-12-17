:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falcon-phase'
.. highlight: bash

pb-falcon-phase
===============

.. conda:recipe:: pb-falcon-phase
   :replaces_section_title:
   :noindex:

   Non\-python parts of falcon\-phase \(Pacific Biosciences\)

   :homepage: https://github.com/PacificBiosciences/pb-falcon-phase
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falcon-phase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon-phase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon-phase/meta.yaml>`_

   


.. conda:package:: pb-falcon-phase

   |downloads_pb-falcon-phase| |docker_pb-falcon-phase|

   :versions:
      
      

      ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends htslib: ``>=1.14,<1.24.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install pb-falcon-phase

   and update with::

      mamba update pb-falcon-phase

  To create a new environment, run::

      mamba create --name myenvname pb-falcon-phase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-falcon-phase:<tag>

   (see `pb-falcon-phase/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-falcon-phase| image:: https://img.shields.io/conda/dn/bioconda/pb-falcon-phase.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falcon-phase
   :alt:   (downloads)
.. |docker_pb-falcon-phase| image:: https://quay.io/repository/biocontainers/pb-falcon-phase/status
   :target: https://quay.io/repository/biocontainers/pb-falcon-phase
.. _`pb-falcon-phase/tags`: https://quay.io/repository/biocontainers/pb-falcon-phase?tab=tags


.. raw:: html

    <script>
        var package = "pb-falcon-phase";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falcon-phase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falcon-phase/README.html