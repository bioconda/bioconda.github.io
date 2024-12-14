:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transgenescan'
.. highlight: bash

transgenescan
=============

.. conda:recipe:: transgenescan
   :replaces_section_title:
   :noindex:

   Software tool for finding genes in assembled transcripts from metatranscriptomic sequences.

   :homepage: https://github.com/COL-IU/TransGeneScan
   :license: GPL-3.0-only
   :recipe: /`transgenescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transgenescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transgenescan/meta.yaml>`_
   :links: biotools: :biotools:`TransGeneScan`, doi: :doi:`10.1186/1471-2105-15-S9-S8`

   


.. conda:package:: transgenescan

   |downloads_transgenescan| |docker_transgenescan|

   :versions:
      
      

      ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install transgenescan

   and update with::

      mamba update transgenescan

  To create a new environment, run::

      mamba create --name myenvname transgenescan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transgenescan:<tag>

   (see `transgenescan/tags`_ for valid values for ``<tag>``)


.. |downloads_transgenescan| image:: https://img.shields.io/conda/dn/bioconda/transgenescan.svg?style=flat
   :target: https://anaconda.org/bioconda/transgenescan
   :alt:   (downloads)
.. |docker_transgenescan| image:: https://quay.io/repository/biocontainers/transgenescan/status
   :target: https://quay.io/repository/biocontainers/transgenescan
.. _`transgenescan/tags`: https://quay.io/repository/biocontainers/transgenescan?tab=tags


.. raw:: html

    <script>
        var package = "transgenescan";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transgenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transgenescan/README.html