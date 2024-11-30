:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fingerprintscan'
.. highlight: bash

fingerprintscan
===============

.. conda:recipe:: fingerprintscan
   :replaces_section_title:
   :noindex:

   Search against FingerPRINTScan with a protein query sequence to identify the closest matching PRINTS sequence motif fingerprints in a protein sequence.

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: GPL
   :recipe: /`fingerprintscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan/meta.yaml>`_

   


.. conda:package:: fingerprintscan

   |downloads_fingerprintscan| |docker_fingerprintscan|

   :versions:
      
      

      ``3_597-4``,  ``3_597-3``,  ``3_597-2``,  ``3_597-1``,  ``3_597-0``

      

   
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

      mamba install fingerprintscan

   and update with::

      mamba update fingerprintscan

  To create a new environment, run::

      mamba create --name myenvname fingerprintscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fingerprintscan:<tag>

   (see `fingerprintscan/tags`_ for valid values for ``<tag>``)


.. |downloads_fingerprintscan| image:: https://img.shields.io/conda/dn/bioconda/fingerprintscan.svg?style=flat
   :target: https://anaconda.org/bioconda/fingerprintscan
   :alt:   (downloads)
.. |docker_fingerprintscan| image:: https://quay.io/repository/biocontainers/fingerprintscan/status
   :target: https://quay.io/repository/biocontainers/fingerprintscan
.. _`fingerprintscan/tags`: https://quay.io/repository/biocontainers/fingerprintscan?tab=tags


.. raw:: html

    <script>
        var package = "fingerprintscan";
        var versions = ["3_597","3_597","3_597","3_597","3_597"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fingerprintscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fingerprintscan/README.html