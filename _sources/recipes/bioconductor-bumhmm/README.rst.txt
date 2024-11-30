:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumhmm'
.. highlight: bash

bioconductor-bumhmm
===================

.. conda:recipe:: bioconductor-bumhmm
   :replaces_section_title:
   :noindex:

   Computational pipeline for computing probability of modification from structure probing experiment data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BUMHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-bumhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumhmm/meta.yaml>`_

   This is a probabilistic modelling pipeline for computing per\- nucleotide posterior probabilities of modification from the data collected in structure probing experiments. The model supports multiple experimental replicates and empirically corrects coverage\- and sequence\-dependent biases. The model utilises the measure of a \"drop\-off rate\" for each nucleotide\, which is compared between replicates through a log\-ratio \(LDR\). The LDRs between control replicates define a null distribution of variability in drop\-off rate observed by chance and LDRs between treatment and control replicates gets compared to this distribution. Resulting empirical p\-values \(probability of being \"drawn\" from the null distribution\) are used as observations in a Hidden Markov Model with a Beta\-Uniform Mixture model used as an emission model. The resulting posterior probabilities indicate the probability of a nucleotide of having being modified in a structure probing experiment.


.. conda:package:: bioconductor-bumhmm

   |downloads_bioconductor-bumhmm| |docker_bioconductor-bumhmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-gtools: 
   :depends r-stringi: 
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

      mamba install bioconductor-bumhmm

   and update with::

      mamba update bioconductor-bumhmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bumhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bumhmm:<tag>

   (see `bioconductor-bumhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bumhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumhmm
   :alt:   (downloads)
.. |docker_bioconductor-bumhmm| image:: https://quay.io/repository/biocontainers/bioconductor-bumhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumhmm
.. _`bioconductor-bumhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-bumhmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bumhmm";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html