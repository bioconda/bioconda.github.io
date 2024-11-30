:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplex'
.. highlight: bash

demultiplex
===========

.. conda:recipe:: demultiplex
   :replaces_section_title:
   :noindex:

   Demultiplex any number of FASTA or a FASTQ files based on a list of barcodes

   :homepage: https://github.com/jfjlaros/demultiplex
   :documentation: https://demultiplex.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`demultiplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex/meta.yaml>`_

   


.. conda:package:: demultiplex

   |downloads_demultiplex| |docker_demultiplex|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends biopython: ``>=1.72``
   :depends dict-trie: ``>=1.0.1``
   :depends fastools: ``>=1.1.0``
   :depends jit-open: ``>=1.0.1``
   :depends python: ``>=3.6``
   :depends tssv: ``>=1.1.0``
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

      mamba install demultiplex

   and update with::

      mamba update demultiplex

  To create a new environment, run::

      mamba create --name myenvname demultiplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/demultiplex:<tag>

   (see `demultiplex/tags`_ for valid values for ``<tag>``)


.. |downloads_demultiplex| image:: https://img.shields.io/conda/dn/bioconda/demultiplex.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplex
   :alt:   (downloads)
.. |docker_demultiplex| image:: https://quay.io/repository/biocontainers/demultiplex/status
   :target: https://quay.io/repository/biocontainers/demultiplex
.. _`demultiplex/tags`: https://quay.io/repository/biocontainers/demultiplex?tab=tags


.. raw:: html

    <script>
        var package = "demultiplex";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplex/README.html