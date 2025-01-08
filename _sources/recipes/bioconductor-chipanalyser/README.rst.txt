:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipanalyser'
.. highlight: bash

bioconductor-chipanalyser
=========================

.. conda:recipe:: bioconductor-chipanalyser
   :replaces_section_title:
   :noindex:

   ChIPanalyser\: Predicting Transcription Factor Binding Sites

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ChIPanalyser.html
   :license: GPL-3
   :recipe: /`bioconductor-chipanalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser/meta.yaml>`_

   ChIPanalyser is a package to predict and understand TF binding by utilizing a statistical thermodynamic model. The model incorporates 4 main factors thought to drive TF binding\: Chromatin State\, Binding energy\, Number of bound molecules and a scaling factor modulating TF binding affinity. Taken together\, ChIPanalyser produces ChIP\-like profiles that closely mimic the patterns seens in real ChIP\-seq data.


.. conda:package:: bioconductor-chipanalyser

   |downloads_bioconductor-chipanalyser| |docker_bioconductor-chipanalyser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-rcolorbrewer: 
   :depends r-rcpproll: 
   :depends r-rocr: 
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

      mamba install bioconductor-chipanalyser

   and update with::

      mamba update bioconductor-chipanalyser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipanalyser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipanalyser:<tag>

   (see `bioconductor-chipanalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipanalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipanalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipanalyser
   :alt:   (downloads)
.. |docker_bioconductor-chipanalyser| image:: https://quay.io/repository/biocontainers/bioconductor-chipanalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipanalyser
.. _`bioconductor-chipanalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-chipanalyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipanalyser";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html