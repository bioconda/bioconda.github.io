:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-dazzler'
.. highlight: bash

pb-dazzler
==========

.. conda:recipe:: pb-dazzler
   :replaces_section_title:
   :noindex:

   The Dresden Assembler suite \-\- Pacific Biosciences forks

   :homepage: https://github.com/PacificBiosciences
   :license: Custom
   :recipe: /`pb-dazzler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-dazzler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-dazzler/meta.yaml>`_

   


.. conda:package:: pb-dazzler

   |downloads_pb-dazzler| |docker_pb-dazzler|

   :versions:
      
      

      ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install pb-dazzler

   and update with::

      mamba update pb-dazzler

  To create a new environment, run::

      mamba create --name myenvname pb-dazzler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-dazzler:<tag>

   (see `pb-dazzler/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-dazzler| image:: https://img.shields.io/conda/dn/bioconda/pb-dazzler.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-dazzler
   :alt:   (downloads)
.. |docker_pb-dazzler| image:: https://quay.io/repository/biocontainers/pb-dazzler/status
   :target: https://quay.io/repository/biocontainers/pb-dazzler
.. _`pb-dazzler/tags`: https://quay.io/repository/biocontainers/pb-dazzler?tab=tags


.. raw:: html

    <script>
        var package = "pb-dazzler";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-dazzler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-dazzler/README.html