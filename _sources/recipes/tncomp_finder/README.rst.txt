:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tncomp_finder'
.. highlight: bash

tncomp_finder
=============

.. conda:recipe:: tncomp_finder
   :replaces_section_title:
   :noindex:

   Composite transposon finder for bacterial and archaeal genomes

   :homepage: https://github.com/danillo-alvarenga/tncomp_finder
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`tncomp_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tncomp_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tncomp_finder/meta.yaml>`_

   TnComp\_finder is a program for the prediction of putative composite
   transposons in bacterial and archaeal genomes based on insertion sequence
   replicas in a relatively short span. It works by comparing nucleotide
   sequences from bacterial and archaeal genomes to a custom transposon
   database.



.. conda:package:: tncomp_finder

   |downloads_tncomp_finder| |docker_tncomp_finder|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.66,<1.78``
   :depends blast: ``>=2.2.28``
   :depends prodigal: ``>=2.6.1``
   :depends python: ``>=3.6``
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

      mamba install tncomp_finder

   and update with::

      mamba update tncomp_finder

  To create a new environment, run::

      mamba create --name myenvname tncomp_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tncomp_finder:<tag>

   (see `tncomp_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_tncomp_finder| image:: https://img.shields.io/conda/dn/bioconda/tncomp_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/tncomp_finder
   :alt:   (downloads)
.. |docker_tncomp_finder| image:: https://quay.io/repository/biocontainers/tncomp_finder/status
   :target: https://quay.io/repository/biocontainers/tncomp_finder
.. _`tncomp_finder/tags`: https://quay.io/repository/biocontainers/tncomp_finder?tab=tags


.. raw:: html

    <script>
        var package = "tncomp_finder";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tncomp_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tncomp_finder/README.html