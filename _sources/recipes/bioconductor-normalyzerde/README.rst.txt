:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normalyzerde'
.. highlight: bash

bioconductor-normalyzerde
=========================

.. conda:recipe:: bioconductor-normalyzerde
   :replaces_section_title:
   :noindex:

   Evaluation of normalization methods and calculation of differential expression analysis statistics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NormalyzerDE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-normalyzerde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde/meta.yaml>`_

   NormalyzerDE provides screening of normalization methods for LC\-MS based expression data. It calculates a range of normalized matrices using both existing approaches and a novel time\-segmented approach\, calculates performance measures and generates an evaluation report. Furthermore\, it provides an easy utility for Limma\- or ANOVA\- based differential expression analysis.


.. conda:package:: bioconductor-normalyzerde

   |downloads_bioconductor-normalyzerde| |docker_bioconductor-normalyzerde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-vsn: ``>=3.74.0,<3.75.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-car: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-normalyzerde

   and update with::

      mamba update bioconductor-normalyzerde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-normalyzerde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normalyzerde:<tag>

   (see `bioconductor-normalyzerde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normalyzerde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normalyzerde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normalyzerde
   :alt:   (downloads)
.. |docker_bioconductor-normalyzerde| image:: https://quay.io/repository/biocontainers/bioconductor-normalyzerde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normalyzerde
.. _`bioconductor-normalyzerde/tags`: https://quay.io/repository/biocontainers/bioconductor-normalyzerde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-normalyzerde";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html