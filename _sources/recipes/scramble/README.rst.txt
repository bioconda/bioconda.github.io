:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scramble'
.. highlight: bash

scramble
========

.. conda:recipe:: scramble
   :replaces_section_title:
   :noindex:

   Soft Clipped Read Alignment Mapper

   :homepage: https://github.com/GeneDx/scramble
   :license: CC
   :recipe: /`scramble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scramble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scramble/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41436-020-0749-x`

   SCRAMble identifies clusters of soft clipped reads in a BAM file\, builds consensus sequences\,
   aligns to representative L1Ta\, AluYa5\, and SVA\-E sequences\, and outputs MEI calls



.. conda:package:: scramble

   |downloads_scramble| |docker_scramble|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-rsamtools: ``>=2.4.0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.0.3``
   :depends r-optparse: ``>=1.6.6``
   :depends r-rblast: ``>=0.99.1``
   :depends r-stringr: ``>=1.4.0``
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

      mamba install scramble

   and update with::

      mamba update scramble

  To create a new environment, run::

      mamba create --name myenvname scramble

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scramble:<tag>

   (see `scramble/tags`_ for valid values for ``<tag>``)


.. |downloads_scramble| image:: https://img.shields.io/conda/dn/bioconda/scramble.svg?style=flat
   :target: https://anaconda.org/bioconda/scramble
   :alt:   (downloads)
.. |docker_scramble| image:: https://quay.io/repository/biocontainers/scramble/status
   :target: https://quay.io/repository/biocontainers/scramble
.. _`scramble/tags`: https://quay.io/repository/biocontainers/scramble?tab=tags


.. raw:: html

    <script>
        var package = "scramble";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1","1.0.1"];
    </script>





Notes
-----
SCRAMble runs as a two\-step process. First cluster\_identifier is used to generate soft\-clipped
read cluster consensus sequences. Second\, SCRAMble.R analyzes the cluster file for likely MEIs.
Custom wrapper script scramble.sh is provided to help setting location of SCRAMble.R script\,
and values for \-\-install\-dir and \-\-mei\-refs params.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scramble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scramble/README.html