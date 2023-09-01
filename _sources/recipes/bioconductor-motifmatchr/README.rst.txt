:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifmatchr'
.. highlight: bash

bioconductor-motifmatchr
========================

.. conda:recipe:: bioconductor-motifmatchr
   :replaces_section_title:
   :noindex:

   Fast Motif Matching in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/motifmatchr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-motifmatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr/meta.yaml>`_

   Quickly find motif matches for many motifs and many sequences. Wraps C\+\+ code from the MOODS motif calling library\, which was developed by Pasi Rastas\, Janne Korhonen\, and Petri Martinmäki.


.. conda:package:: bioconductor-motifmatchr

   |downloads_bioconductor-motifmatchr| |docker_bioconductor-motifmatchr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tfbstools: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-motifmatchr

   and update with::

      mamba update bioconductor-motifmatchr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motifmatchr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifmatchr:<tag>

   (see `bioconductor-motifmatchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifmatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifmatchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifmatchr
   :alt:   (downloads)
.. |docker_bioconductor-motifmatchr| image:: https://quay.io/repository/biocontainers/bioconductor-motifmatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifmatchr
.. _`bioconductor-motifmatchr/tags`: https://quay.io/repository/biocontainers/bioconductor-motifmatchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifmatchr";
        var versions = ["1.22.0","1.20.0","1.20.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html