:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cleanupdtseq'
.. highlight: bash

bioconductor-cleanupdtseq
=========================

.. conda:recipe:: bioconductor-cleanupdtseq
   :replaces_section_title:
   :noindex:

   cleanUpdTSeq cleans up artifacts from polyadenylation sites from oligo\(dT\)\-mediated 3\' end RNA sequending data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cleanUpdTSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-cleanupdtseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleanupdtseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleanupdtseq/meta.yaml>`_
   :links: biotools: :biotools:`cleanupdtseq`

   This package implements a Naive Bayes classifier for accurately differentiating true polyadenylation sites \(pA sites\) from oligo\(dT\)\-mediated 3\' end sequencing such as PAS\-Seq\, PolyA\-Seq and RNA\-Seq by filtering out false polyadenylation sites\, mainly due to oligo\(dT\)\-mediated internal priming during reverse transcription. The classifer is highly accurate and outperforms other heuristic methods.


.. conda:package:: bioconductor-cleanupdtseq

   |downloads_bioconductor-cleanupdtseq| |docker_bioconductor-cleanupdtseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome.drerio.ucsc.danrer7: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-seqinr: 
   :depends r-stringr: 
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

      mamba install bioconductor-cleanupdtseq

   and update with::

      mamba update bioconductor-cleanupdtseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cleanupdtseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cleanupdtseq:<tag>

   (see `bioconductor-cleanupdtseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cleanupdtseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cleanupdtseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cleanupdtseq
   :alt:   (downloads)
.. |docker_bioconductor-cleanupdtseq| image:: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq
.. _`bioconductor-cleanupdtseq/tags`: https://quay.io/repository/biocontainers/bioconductor-cleanupdtseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cleanupdtseq";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cleanupdtseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cleanupdtseq/README.html