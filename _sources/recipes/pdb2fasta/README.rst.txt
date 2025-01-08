:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdb2fasta'
.. highlight: bash

pdb2fasta
=========

.. conda:recipe:: pdb2fasta
   :replaces_section_title:
   :noindex:

   Convert PDB structures to FASTA sequences.

   :homepage: https://github.com/kad-ecoli/pdb2fasta
   :license: GPL2 / GPL-2-only
   :recipe: /`pdb2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdb2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdb2fasta/meta.yaml>`_

   


.. conda:package:: pdb2fasta

   |downloads_pdb2fasta| |docker_pdb2fasta|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pdb2fasta

   and update with::

      mamba update pdb2fasta

  To create a new environment, run::

      mamba create --name myenvname pdb2fasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pdb2fasta:<tag>

   (see `pdb2fasta/tags`_ for valid values for ``<tag>``)


.. |downloads_pdb2fasta| image:: https://img.shields.io/conda/dn/bioconda/pdb2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/pdb2fasta
   :alt:   (downloads)
.. |docker_pdb2fasta| image:: https://quay.io/repository/biocontainers/pdb2fasta/status
   :target: https://quay.io/repository/biocontainers/pdb2fasta
.. _`pdb2fasta/tags`: https://quay.io/repository/biocontainers/pdb2fasta?tab=tags


.. raw:: html

    <script>
        var package = "pdb2fasta";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdb2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdb2fasta/README.html