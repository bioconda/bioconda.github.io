:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decomptumor2sig'
.. highlight: bash

bioconductor-decomptumor2sig
============================

.. conda:recipe:: bioconductor-decomptumor2sig
   :replaces_section_title:
   :noindex:

   Decomposition of individual tumors into mutational signatures by signature refitting

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/decompTumor2Sig.html
   :license: GPL-2
   :recipe: /`bioconductor-decomptumor2sig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomptumor2sig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomptumor2sig/meta.yaml>`_

   Uses quadratic programming for signature refitting\, i.e.\, to decompose the mutation catalog from an individual tumor sample into a set of given mutational signatures \(either Alexandrov\-model signatures or Shiraishi\-model signatures\)\, computing weights that reflect the contributions of the signatures to the mutation load of the tumor.


.. conda:package:: bioconductor-decomptumor2sig

   |downloads_bioconductor-decomptumor2sig| |docker_bioconductor-decomptumor2sig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-quadprog: ``>=1.5-5``
   :depends r-readxl: 
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

      mamba install bioconductor-decomptumor2sig

   and update with::

      mamba update bioconductor-decomptumor2sig

  To create a new environment, run::

      mamba create --name myenvname bioconductor-decomptumor2sig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decomptumor2sig:<tag>

   (see `bioconductor-decomptumor2sig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decomptumor2sig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decomptumor2sig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decomptumor2sig
   :alt:   (downloads)
.. |docker_bioconductor-decomptumor2sig| image:: https://quay.io/repository/biocontainers/bioconductor-decomptumor2sig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decomptumor2sig
.. _`bioconductor-decomptumor2sig/tags`: https://quay.io/repository/biocontainers/bioconductor-decomptumor2sig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decomptumor2sig";
        var versions = ["2.18.0","2.16.0","2.14.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decomptumor2sig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decomptumor2sig/README.html