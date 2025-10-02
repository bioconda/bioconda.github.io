:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqforge'
.. highlight: bash

seqforge
========

.. conda:recipe:: seqforge
   :replaces_section_title:
   :noindex:

   SeqForge\: A genomics toolkit for FASTA processing\, BLAST orchestration\, and motif mining.

   :homepage: https://github.com/ERBringHorvath/SeqForge
   :license: MIT / MIT
   :recipe: /`seqforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqforge/meta.yaml>`_

   SeqForge provides utilities to sanitize\, split\, annotate\, and analyze FASTA files\; run BLAST\+ queries
   in parallel\; and perform motif mining with export options. Progress reporting is handled by an
   in\-house progress bar \(no tqdm dependency\).



.. conda:package:: seqforge

   |downloads_seqforge| |docker_seqforge|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.4-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends logomaker: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends seaborn: 
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

      mamba install seqforge

   and update with::

      mamba update seqforge

  To create a new environment, run::

      mamba create --name myenvname seqforge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqforge:<tag>

   (see `seqforge/tags`_ for valid values for ``<tag>``)


.. |downloads_seqforge| image:: https://img.shields.io/conda/dn/bioconda/seqforge.svg?style=flat
   :target: https://anaconda.org/bioconda/seqforge
   :alt:   (downloads)
.. |docker_seqforge| image:: https://quay.io/repository/biocontainers/seqforge/status
   :target: https://quay.io/repository/biocontainers/seqforge
.. _`seqforge/tags`: https://quay.io/repository/biocontainers/seqforge?tab=tags


.. raw:: html

    <script>
        var package = "seqforge";
        var versions = ["2.0.0","1.0.4","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqforge/README.html