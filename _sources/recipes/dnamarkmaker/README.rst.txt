:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnamarkmaker'
.. highlight: bash

dnamarkmaker
============

.. conda:recipe:: dnamarkmaker
   :replaces_section_title:
   :noindex:

   DNAMarkMaker\: pipeline to development ARMS and CAPS marker

   :homepage: https://github.com/SegawaTenta/DNAMarkMaker-CUI
   :license: GPL / GPL-3.0-or-later
   :recipe: /`dnamarkmaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnamarkmaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnamarkmaker/meta.yaml>`_
   :links: biotools: :biotools:`dnamarkmaker`

   


.. conda:package:: dnamarkmaker

   |downloads_dnamarkmaker| |docker_dnamarkmaker|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends primer3-py: ``>=1.1.0``
   :depends python: ``>=3.9.13``
   :depends samtools: ``>=1.16``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dnamarkmaker

   and update with::

      mamba update dnamarkmaker

  To create a new environment, run::

      mamba create --name myenvname dnamarkmaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnamarkmaker:<tag>

   (see `dnamarkmaker/tags`_ for valid values for ``<tag>``)


.. |downloads_dnamarkmaker| image:: https://img.shields.io/conda/dn/bioconda/dnamarkmaker.svg?style=flat
   :target: https://anaconda.org/bioconda/dnamarkmaker
   :alt:   (downloads)
.. |docker_dnamarkmaker| image:: https://quay.io/repository/biocontainers/dnamarkmaker/status
   :target: https://quay.io/repository/biocontainers/dnamarkmaker
.. _`dnamarkmaker/tags`: https://quay.io/repository/biocontainers/dnamarkmaker?tab=tags


.. raw:: html

    <script>
        var package = "dnamarkmaker";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnamarkmaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnamarkmaker/README.html