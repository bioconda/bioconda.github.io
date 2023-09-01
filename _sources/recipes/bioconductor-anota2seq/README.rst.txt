:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anota2seq'
.. highlight: bash

bioconductor-anota2seq
======================

.. conda:recipe:: bioconductor-anota2seq
   :replaces_section_title:
   :noindex:

   Generally applicable transcriptome\-wide analysis of translational efficiency using anota2seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/anota2seq.html
   :license: GPL-3
   :recipe: /`bioconductor-anota2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq/meta.yaml>`_

   anota2seq provides analysis of translational efficiency and differential expression analysis for polysome\-profiling and ribosome\-profiling studies \(two or more sample classes\) quantified by RNA sequencing or DNA\-microarray. Polysome\-profiling and ribosome\-profiling typically generate data for two RNA sources\; translated mRNA and total mRNA. Analysis of differential expression is used to estimate changes within each RNA source \(i.e. translated mRNA or total mRNA\). Analysis of translational efficiency aims to identify changes in translation efficiency leading to altered protein levels that are independent of total mRNA levels \(i.e. changes in translated mRNA that are independent of levels of total mRNA\) or buffering\, a mechanism regulating translational efficiency so that protein levels remain constant despite fluctuating total mRNA levels \(i.e. changes in total mRNA that are independent of levels of translated mRNA\). anota2seq applies analysis of partial variance and the random variance model to fulfill these tasks.


.. conda:package:: bioconductor-anota2seq

   |downloads_bioconductor-anota2seq| |docker_bioconductor-anota2seq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-anota2seq

   and update with::

      mamba update bioconductor-anota2seq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anota2seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anota2seq:<tag>

   (see `bioconductor-anota2seq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anota2seq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anota2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anota2seq
   :alt:   (downloads)
.. |docker_bioconductor-anota2seq| image:: https://quay.io/repository/biocontainers/bioconductor-anota2seq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anota2seq
.. _`bioconductor-anota2seq/tags`: https://quay.io/repository/biocontainers/bioconductor-anota2seq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anota2seq";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html