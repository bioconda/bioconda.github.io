:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refseq-plasmid-dl'
.. highlight: bash

refseq-plasmid-dl
=================

.. conda:recipe:: refseq-plasmid-dl
   :replaces_section_title:
   :noindex:

   A command\-line tool to download and curate RefSeq plasmid sequences from NCBI.

   :homepage: https://github.com/erinyoung/refseq-plasmid-dl
   :license: GPL-3.0-only
   :recipe: /`refseq-plasmid-dl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq-plasmid-dl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq-plasmid-dl/meta.yaml>`_

   


.. conda:package:: refseq-plasmid-dl

   |downloads_refseq-plasmid-dl| |docker_refseq-plasmid-dl|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends tqdm: 
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

      mamba install refseq-plasmid-dl

   and update with::

      mamba update refseq-plasmid-dl

  To create a new environment, run::

      mamba create --name myenvname refseq-plasmid-dl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/refseq-plasmid-dl:<tag>

   (see `refseq-plasmid-dl/tags`_ for valid values for ``<tag>``)


.. |downloads_refseq-plasmid-dl| image:: https://img.shields.io/conda/dn/bioconda/refseq-plasmid-dl.svg?style=flat
   :target: https://anaconda.org/bioconda/refseq-plasmid-dl
   :alt:   (downloads)
.. |docker_refseq-plasmid-dl| image:: https://quay.io/repository/biocontainers/refseq-plasmid-dl/status
   :target: https://quay.io/repository/biocontainers/refseq-plasmid-dl
.. _`refseq-plasmid-dl/tags`: https://quay.io/repository/biocontainers/refseq-plasmid-dl?tab=tags


.. raw:: html

    <script>
        var package = "refseq-plasmid-dl";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refseq-plasmid-dl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refseq-plasmid-dl/README.html