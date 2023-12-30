:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsesignatures'
.. highlight: bash

bioconductor-sparsesignatures
=============================

.. conda:recipe:: bioconductor-sparsesignatures
   :replaces_section_title:
   :noindex:

   SparseSignatures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SparseSignatures.html
   :license: file LICENSE
   :recipe: /`bioconductor-sparsesignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures/meta.yaml>`_

   Point mutations occurring in a genome can be divided into 96 categories based on the base being mutated\, the base it is mutated into and its two flanking bases. Therefore\, for any patient\, it is possible to represent all the point mutations occurring in that patient\'s tumor as a vector of length 96\, where each element represents the count of mutations for a given category in the patient. A mutational signature represents the pattern of mutations produced by a mutagen or mutagenic process inside the cell. Each signature can also be represented by a vector of length 96\, where each element represents the probability that this particular mutagenic process generates a mutation of the 96 above mentioned categories. In this R package\, we provide a set of functions to extract and visualize the mutational signatures that best explain the mutation counts of a large number of patients.


.. conda:package:: bioconductor-sparsesignatures

   |downloads_bioconductor-sparsesignatures| |docker_bioconductor-sparsesignatures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-nmf: 
   :depends r-nnlasso: 
   :depends r-nnls: 
   :depends r-reshape2: 
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

      mamba install bioconductor-sparsesignatures

   and update with::

      mamba update bioconductor-sparsesignatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sparsesignatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsesignatures:<tag>

   (see `bioconductor-sparsesignatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsesignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsesignatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsesignatures
   :alt:   (downloads)
.. |docker_bioconductor-sparsesignatures| image:: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures
.. _`bioconductor-sparsesignatures/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsesignatures";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html