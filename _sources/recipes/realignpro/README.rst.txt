:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'realignpro'
.. highlight: bash

realignpro
==========

.. conda:recipe:: realignpro
   :replaces_section_title:
   :noindex:

   ReAlignPro\: FASTA\-to\-MAF\, MAF\-to\-BED\, and TSV\-to\-figures utilities for comparative genomics.

   :homepage: https://github.com/chulbioinfo/ReAlignPro
   :license: GPL-3.0-only
   :recipe: /`realignpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realignpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realignpro/meta.yaml>`_

   


.. conda:package:: realignpro

   |downloads_realignpro| |docker_realignpro|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends lastz: 
   :depends matplotlib-base: ``>=3.5``
   :depends muscle: ``>=3.8.1551``
   :depends python: 
   :depends samtools: 
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

      mamba install realignpro

   and update with::

      mamba update realignpro

  To create a new environment, run::

      mamba create --name myenvname realignpro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/realignpro:<tag>

   (see `realignpro/tags`_ for valid values for ``<tag>``)


.. |downloads_realignpro| image:: https://img.shields.io/conda/dn/bioconda/realignpro.svg?style=flat
   :target: https://anaconda.org/bioconda/realignpro
   :alt:   (downloads)
.. |docker_realignpro| image:: https://quay.io/repository/biocontainers/realignpro/status
   :target: https://quay.io/repository/biocontainers/realignpro
.. _`realignpro/tags`: https://quay.io/repository/biocontainers/realignpro?tab=tags


.. raw:: html

    <script>
        var package = "realignpro";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/realignpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/realignpro/README.html