:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxit'
.. highlight: bash

maxit
=====

.. conda:recipe:: maxit
   :replaces_section_title:
   :noindex:

   MAXIT assists in the processing and curation of macromolecular structure data.

   :homepage: https://sw-tools.rcsb.org/apps/MAXIT
   :documentation: https://sw-tools.rcsb.org/apps/MAXIT/README-source
   
   :license: OTHER / RCSB PDB Software License
   :recipe: /`maxit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxit/meta.yaml>`_

   MAXIT assists in the processing and curation of macromolecular structure data. MAXIT can\:
   \- Read and write PDB and mmCIF format files\, and translate between file formats.
   \- Perform consistency checks on coordinates\, sequence\, and crystal data.
   \- Automatically construct\, transform\, and merge information between formats
   \- Align residue numbering in the coordinates with the sequence
   \- Reorder and rename atoms in standard and nonstandard residues and ligands according to the Chemical Component Dictionary
   \- Assign ligands the same chain IDs as the adjacent polymers
   \- Detect missing or additional atoms



.. conda:package:: maxit

   |downloads_maxit| |docker_maxit|

   :versions:
      
      

      ``11.200-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install maxit

   and update with::

      mamba update maxit

  To create a new environment, run::

      mamba create --name myenvname maxit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxit:<tag>

   (see `maxit/tags`_ for valid values for ``<tag>``)


.. |downloads_maxit| image:: https://img.shields.io/conda/dn/bioconda/maxit.svg?style=flat
   :target: https://anaconda.org/bioconda/maxit
   :alt:   (downloads)
.. |docker_maxit| image:: https://quay.io/repository/biocontainers/maxit/status
   :target: https://quay.io/repository/biocontainers/maxit
.. _`maxit/tags`: https://quay.io/repository/biocontainers/maxit?tab=tags


.. raw:: html

    <script>
        var package = "maxit";
        var versions = ["11.200"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxit/README.html