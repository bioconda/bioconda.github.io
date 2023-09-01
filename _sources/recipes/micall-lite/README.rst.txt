:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micall-lite'
.. highlight: bash

micall-lite
===========

.. conda:recipe:: micall-lite
   :replaces_section_title:
   :noindex:

   A bioinformatic pipeline for mapping of FASTQ data to a set of reference
   sequences to generate consensus sequences\, variant calls and coverage maps.

   :homepage: https://github.com/PoonLab/MiCall-Lite
   :license: GNU Affero General Public License v3.0
   :recipe: /`micall-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite/meta.yaml>`_

   


.. conda:package:: micall-lite

   |downloads_micall-lite| |docker_micall-lite|

   :versions:
      
      

      ``0.1rc5-4``,  ``0.1rc5-3``,  ``0.1rc5-2``,  ``0.1rc5-1``,  ``0.1rc5-0``,  ``0.1rc4-0``,  ``0.1rc3-0``,  ``0.1rc2-0``,  ``0.1rc-0``

      

   
   :depends bowtie2: 
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-levenshtein: 
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install micall-lite

   and update with::

      mamba update micall-lite

  To create a new environment, run::

      mamba create --name myenvname micall-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/micall-lite:<tag>

   (see `micall-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_micall-lite| image:: https://img.shields.io/conda/dn/bioconda/micall-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/micall-lite
   :alt:   (downloads)
.. |docker_micall-lite| image:: https://quay.io/repository/biocontainers/micall-lite/status
   :target: https://quay.io/repository/biocontainers/micall-lite
.. _`micall-lite/tags`: https://quay.io/repository/biocontainers/micall-lite?tab=tags


.. raw:: html

    <script>
        var package = "micall-lite";
        var versions = ["0.1rc5","0.1rc5","0.1rc5","0.1rc5","0.1rc5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micall-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micall-lite/README.html