:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virprof'
.. highlight: bash

virprof
=======

.. conda:recipe:: virprof
   :replaces_section_title:
   :noindex:

   Virus Identification\, Quantification and Genome Recovery from RNA\-Seq NGS data

   :homepage: https://github.com/seiboldlab/virprof
   :license: GPLv3
   :recipe: /`virprof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virprof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virprof/meta.yaml>`_

   VirProf is a dual RNA\-seq analysis pipeline integrating host
   expression profile generation with virus identification\,
   quantification\, and genome recovery from host tissue RNA
   sequencing data. VirProf combines an unguided metagenomic assembly
   workflow with interleaved host read depletion followed by BLAST
   based binning\, scaffolding and classification. Application of
   VirProf to poly\-A selected RNA\-seq data from nasal swabs with
   respiratory virus qPCR data\, revealed that VirProf was able to a\)
   quantify a range of viral infections at detection limits and
   precision comparable to qPCR and b\) recover complete\, accurate
   viral genomes suitable for phylogenetic analysis.



.. conda:package:: virprof

   |downloads_virprof| |docker_virprof|

   :versions:
      
      

      ``0.9.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends graph-tool-base: ``>=2.34``
   :depends networkx: ``>=2.0``
   :depends python: ``>=3.10,<3.12``
   :depends requests: 
   :depends tqdm: 
   :depends ymp: ``>=0.3.2,<0.4``
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

      mamba install virprof

   and update with::

      mamba update virprof

  To create a new environment, run::

      mamba create --name myenvname virprof

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virprof:<tag>

   (see `virprof/tags`_ for valid values for ``<tag>``)


.. |downloads_virprof| image:: https://img.shields.io/conda/dn/bioconda/virprof.svg?style=flat
   :target: https://anaconda.org/bioconda/virprof
   :alt:   (downloads)
.. |docker_virprof| image:: https://quay.io/repository/biocontainers/virprof/status
   :target: https://quay.io/repository/biocontainers/virprof
.. _`virprof/tags`: https://quay.io/repository/biocontainers/virprof?tab=tags


.. raw:: html

    <script>
        var package = "virprof";
        var versions = ["0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virprof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virprof/README.html