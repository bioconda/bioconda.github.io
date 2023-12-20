:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifbreakr'
.. highlight: bash

bioconductor-motifbreakr
========================

.. conda:recipe:: bioconductor-motifbreakr
   :replaces_section_title:
   :noindex:

   A Package For Predicting The Disruptiveness Of Single Nucleotide Polymorphisms On Transcription Factor Binding Sites

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/motifbreakR.html
   :license: GPL-2
   :recipe: /`bioconductor-motifbreakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr/meta.yaml>`_
   :links: biotools: :biotools:`motifbreakr`

   We introduce motifbreakR\, which allows the biologist to judge in the first place whether the sequence surrounding the polymorphism is a good match\, and in the second place how much information is gained or lost in one allele of the polymorphism relative to another. MotifbreakR is both flexible and extensible over previous offerings\; giving a choice of algorithms for interrogation of genomes with motifs from public sources that users can choose from\; these are 1\) a weighted\-sum probability matrix\, 2\) log\-probabilities\, and 3\) weighted by relative entropy. MotifbreakR can predict effects for novel or previously described variants in public databases\, making it suitable for tasks beyond the scope of its original design. Lastly\, it can be used to interrogate any genome curated within Bioconductor \(currently there are 32 species\, a total of 109 versions\).


.. conda:package:: bioconductor-motifbreakr

   |downloads_bioconductor-motifbreakr| |docker_bioconductor-motifbreakr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.13.7-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.13.7-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-motifdb: ``>=1.44.0,<1.45.0``
   :depends bioconductor-motifstack: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :depends r-stringr: 
   :depends r-tfmpvalue: 
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

      mamba install bioconductor-motifbreakr

   and update with::

      mamba update bioconductor-motifbreakr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motifbreakr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifbreakr:<tag>

   (see `bioconductor-motifbreakr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifbreakr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifbreakr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifbreakr
   :alt:   (downloads)
.. |docker_bioconductor-motifbreakr| image:: https://quay.io/repository/biocontainers/bioconductor-motifbreakr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifbreakr
.. _`bioconductor-motifbreakr/tags`: https://quay.io/repository/biocontainers/bioconductor-motifbreakr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifbreakr";
        var versions = ["2.16.0","2.13.7","2.12.0","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html