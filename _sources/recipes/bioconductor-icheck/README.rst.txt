:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icheck'
.. highlight: bash

bioconductor-icheck
===================

.. conda:recipe:: bioconductor-icheck
   :replaces_section_title:
   :noindex:

   QC Pipeline and Data Analysis Tools for High\-Dimensional Illumina mRNA Expression Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/iCheck.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-icheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icheck/meta.yaml>`_

   QC pipeline and data analysis tools for high\-dimensional Illumina mRNA expression data.


.. conda:package:: bioconductor-icheck

   |downloads_bioconductor-icheck| |docker_bioconductor-icheck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-geneselectmmd: ``>=2.44.0,<2.45.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-lumi: ``>=2.52.0,<2.53.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-lmtest: 
   :depends r-mass: 
   :depends r-randomforest: 
   :depends r-rgl: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-icheck

   and update with::

      mamba update bioconductor-icheck

  To create a new environment, run::

      mamba create --name myenvname bioconductor-icheck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icheck:<tag>

   (see `bioconductor-icheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icheck
   :alt:   (downloads)
.. |docker_bioconductor-icheck| image:: https://quay.io/repository/biocontainers/bioconductor-icheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icheck
.. _`bioconductor-icheck/tags`: https://quay.io/repository/biocontainers/bioconductor-icheck?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icheck";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icheck/README.html