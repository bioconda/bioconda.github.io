:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-aln-interactive'
.. highlight: bash

bwa-aln-interactive
===================

.. conda:recipe:: bwa-aln-interactive
   :replaces_section_title:
   :noindex:

   Version of the BWA aln read mapper for interactive alignment.

   :homepage: https://github.com/fulcrumgenomics/bwa-aln-interactive
   :license: GPL-3.0-only
   :recipe: /`bwa-aln-interactive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-aln-interactive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-aln-interactive/meta.yaml>`_

   


.. conda:package:: bwa-aln-interactive

   |downloads_bwa-aln-interactive| |docker_bwa-aln-interactive|

   :versions:
      
      

      ``0.7.18-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install bwa-aln-interactive

   and update with::

      mamba update bwa-aln-interactive

  To create a new environment, run::

      mamba create --name myenvname bwa-aln-interactive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwa-aln-interactive:<tag>

   (see `bwa-aln-interactive/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-aln-interactive| image:: https://img.shields.io/conda/dn/bioconda/bwa-aln-interactive.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-aln-interactive
   :alt:   (downloads)
.. |docker_bwa-aln-interactive| image:: https://quay.io/repository/biocontainers/bwa-aln-interactive/status
   :target: https://quay.io/repository/biocontainers/bwa-aln-interactive
.. _`bwa-aln-interactive/tags`: https://quay.io/repository/biocontainers/bwa-aln-interactive?tab=tags


.. raw:: html

    <script>
        var package = "bwa-aln-interactive";
        var versions = ["0.7.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-aln-interactive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-aln-interactive/README.html