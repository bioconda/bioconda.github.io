:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recmpox'
.. highlight: bash

recmpox
=======

.. conda:recipe:: recmpox
   :replaces_section_title:
   :noindex:

   RecMpox flags potential recombination events in monkeypox consensus genomes.

   :homepage: https://github.com/DaanJansen94/RecMpox
   :documentation: https://github.com/DaanJansen94/RecMpox/blob/main/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`recmpox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recmpox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recmpox/meta.yaml>`_

   RecMpox is a command\-line tool that flags potential recombination events in monkeypox viruses.
   It identifies recombination tract breakpoints within your own provided consensus genomes.
   It does not confirm recombination\; it flags genomes that may be recombinant for further investigation.
   RecMpox takes two references \(e.g. Clade Ia vs Ib\, or IIa vs IIb\)\, aligns them with Squirrel\,
   finds diagnostic SNP positions where the references differ\, then classifies each consensus genome
   at those positions. Genomes where both refs contribute at least 5\% are flagged as potential
   recombinants. Recombination tracts and breakpoints are inferred along the genome.



.. conda:package:: recmpox

   |downloads_recmpox| |docker_recmpox|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends minimap2: 
   :depends python: ``>=3.9``
   :depends samtools: 
   :depends squirrel: 
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

      mamba install recmpox

   and update with::

      mamba update recmpox

  To create a new environment, run::

      mamba create --name myenvname recmpox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recmpox:<tag>

   (see `recmpox/tags`_ for valid values for ``<tag>``)


.. |downloads_recmpox| image:: https://img.shields.io/conda/dn/bioconda/recmpox.svg?style=flat
   :target: https://anaconda.org/bioconda/recmpox
   :alt:   (downloads)
.. |docker_recmpox| image:: https://quay.io/repository/biocontainers/recmpox/status
   :target: https://quay.io/repository/biocontainers/recmpox
.. _`recmpox/tags`: https://quay.io/repository/biocontainers/recmpox?tab=tags


.. raw:: html

    <script>
        var package = "recmpox";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recmpox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recmpox/README.html