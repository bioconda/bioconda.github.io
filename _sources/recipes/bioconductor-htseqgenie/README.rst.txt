:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htseqgenie'
.. highlight: bash

bioconductor-htseqgenie
=======================

.. conda:recipe:: bioconductor-htseqgenie
   :replaces_section_title:
   :noindex:

   A NGS analysis pipeline.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HTSeqGenie.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htseqgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie/meta.yaml>`_

   Libraries to perform NGS analysis.


.. conda:package:: bioconductor-htseqgenie

   |downloads_bioconductor-htseqgenie| |docker_bioconductor-htseqgenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.32.0-0</code>,  <code>4.30.0-0</code>,  <code>4.27.0-0</code>,  <code>4.24.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-1</code>,  <code>4.20.0-0</code>,  <code>4.18.0-0</code>,  <code>4.16.0-0</code>,  </span></summary>
      

      ``4.32.0-0``,  ``4.30.0-0``,  ``4.27.0-0``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-1``,  ``4.20.0-0``,  ``4.18.0-0``,  ``4.16.0-0``,  ``4.14.0-1``,  ``4.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-chipseq: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gmapr: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends bioconductor-varianttools: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cairo: ``>=1.5.5``
   :depends r-hwriter: ``>=1.3.0``
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

      mamba install bioconductor-htseqgenie

   and update with::

      mamba update bioconductor-htseqgenie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-htseqgenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htseqgenie:<tag>

   (see `bioconductor-htseqgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htseqgenie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htseqgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htseqgenie
   :alt:   (downloads)
.. |docker_bioconductor-htseqgenie| image:: https://quay.io/repository/biocontainers/bioconductor-htseqgenie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htseqgenie
.. _`bioconductor-htseqgenie/tags`: https://quay.io/repository/biocontainers/bioconductor-htseqgenie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htseqgenie";
        var versions = ["4.32.0","4.30.0","4.27.0","4.24.0","4.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html