:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastreer'
.. highlight: bash

fastreer
========

.. conda:recipe:: fastreer
   :replaces_section_title:
   :noindex:

   Phylogenetic\, distance\, and tree\-building utilities for VCF and FASTA files.

   :homepage: https://github.com/gkanogiannis/fastreeR
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fastreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastreer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-016-1186-3`

   fastreeR is a Python\+Java CLI tool for calculating distance matrices from VCF or FASTA files
   and constructing Newick trees using a Java backend and Python frontend.



.. conda:package:: fastreer

   |downloads_fastreer| |docker_fastreer|

   :versions:
      
      

      ``2.0.0-0``,  ``1.13.30-0``,  ``1.13.26-0``,  ``1.13.23-0``

      

   
   :depends openjdk: ``>=8.0.144``
   :depends python: ``>=3.9``
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

      mamba install fastreer

   and update with::

      mamba update fastreer

  To create a new environment, run::

      mamba create --name myenvname fastreer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastreer:<tag>

   (see `fastreer/tags`_ for valid values for ``<tag>``)


.. |downloads_fastreer| image:: https://img.shields.io/conda/dn/bioconda/fastreer.svg?style=flat
   :target: https://anaconda.org/bioconda/fastreer
   :alt:   (downloads)
.. |docker_fastreer| image:: https://quay.io/repository/biocontainers/fastreer/status
   :target: https://quay.io/repository/biocontainers/fastreer
.. _`fastreer/tags`: https://quay.io/repository/biocontainers/fastreer?tab=tags


.. raw:: html

    <script>
        var package = "fastreer";
        var versions = ["2.0.0","1.13.30","1.13.26","1.13.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastreer/README.html