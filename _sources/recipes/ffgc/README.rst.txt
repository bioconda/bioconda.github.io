:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffgc'
.. highlight: bash

ffgc
====

.. conda:recipe:: ffgc
   :replaces_section_title:
   :noindex:

   Family Free Genome Comparison \(FFGC\) workflow

   :homepage: https://gitlab.ub.uni-bielefeld.de/gi/FFGC
   :documentation: https://gitlab.ub.uni-bielefeld.de/gi/FFGC/blob/master/README.md
   
   :license: BSD
   :recipe: /`ffgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffgc/meta.yaml>`_

   Family Free Genome Comparison \(FFGC\) is a self\-contained workflow system that
   provides functionality for all steps of a family\-free gene order analysis
   starting from annotated genome sequences.

   Family\-free methods for gene order analyses do not require prior knowledge of
   evolutionary relationships between the genes across the studied genomes. This
   tool features a complete workflow for genome comparison\, requiring nothing
   but annotated genome sequences as input.

   Surprisingly\, the continuous development of family\-free methods recently lead
   to an integrated method for inferring gene families across several species.
   FFGC now includes a subworkflow for inferring gene families simultaneously
   based on gene similarities and family\-free genome rearrangements \(OrthoFFGCʜ
   and OrthoFFGCʜ≈ extensions\).

   FFGC is available for download at our git repository
   \(https\:\/\/gitlab.ub.uni\-bielefeld.de\/gi\/FFGC\) or as a
   Conda package at Bioconda \(https\:\/\/anaconda.org\/bioconda\/ffgc\).

   In general\, three major steps are performed\: \(1\) the computation of local
   sequence alignment scores between genes of two or more gene order sequences
   using BLAST\+ or Diamond\; \(2\) the establishment of gene relationships\; and
   \(3\) the actual family\-free gene order analysis.



.. conda:package:: ffgc

   |downloads_ffgc| |docker_ffgc|

   :versions:
      
      

      ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-0``

      

   
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.8``
   :depends diamond: ``>=2.0.15``
   :depends lxml: ``>=4.9.1``
   :depends mcl: ``>=14.137``
   :depends networkx: ``>=2.4``
   :depends python: 
   :depends ruamel.yaml: ``>=0.15``
   :depends snakemake: ``>=7.24``
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

      mamba install ffgc

   and update with::

      mamba update ffgc

  To create a new environment, run::

      mamba create --name myenvname ffgc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ffgc:<tag>

   (see `ffgc/tags`_ for valid values for ``<tag>``)


.. |downloads_ffgc| image:: https://img.shields.io/conda/dn/bioconda/ffgc.svg?style=flat
   :target: https://anaconda.org/bioconda/ffgc
   :alt:   (downloads)
.. |docker_ffgc| image:: https://quay.io/repository/biocontainers/ffgc/status
   :target: https://quay.io/repository/biocontainers/ffgc
.. _`ffgc/tags`: https://quay.io/repository/biocontainers/ffgc?tab=tags


.. raw:: html

    <script>
        var package = "ffgc";
        var versions = ["2.4.2","2.4.2","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffgc/README.html