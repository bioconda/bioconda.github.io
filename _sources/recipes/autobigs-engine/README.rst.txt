:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autobigs-engine'
.. highlight: bash

autobigs-engine
===============

.. conda:recipe:: autobigs-engine
   :replaces_section_title:
   :noindex:

   A library to rapidly fetch fetch MLST profiles given sequences for various diseases.

   :homepage: https://github.com/Syph-and-VPD-Lab/autoBIGS.engine
   :license: GPL-3.0-or-later
   :recipe: /`autobigs-engine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobigs-engine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobigs-engine/meta.yaml>`_

   


.. conda:package:: autobigs-engine

   |downloads_autobigs-engine| |docker_autobigs-engine|

   :versions:
      
      

      ``0.14.2-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.8.0-0``,  ``0.7.2-0``

      

   
   :depends aiohttp: ``3.11.*``
   :depends biopython: ``1.85``
   :depends python: ``>=3.12``
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

      mamba install autobigs-engine

   and update with::

      mamba update autobigs-engine

  To create a new environment, run::

      mamba create --name myenvname autobigs-engine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autobigs-engine:<tag>

   (see `autobigs-engine/tags`_ for valid values for ``<tag>``)


.. |downloads_autobigs-engine| image:: https://img.shields.io/conda/dn/bioconda/autobigs-engine.svg?style=flat
   :target: https://anaconda.org/bioconda/autobigs-engine
   :alt:   (downloads)
.. |docker_autobigs-engine| image:: https://quay.io/repository/biocontainers/autobigs-engine/status
   :target: https://quay.io/repository/biocontainers/autobigs-engine
.. _`autobigs-engine/tags`: https://quay.io/repository/biocontainers/autobigs-engine?tab=tags


.. raw:: html

    <script>
        var package = "autobigs-engine";
        var versions = ["0.14.2","0.13.0","0.12.0","0.11.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autobigs-engine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autobigs-engine/README.html