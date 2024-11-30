:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enmix'
.. highlight: bash

bioconductor-enmix
==================

.. conda:recipe:: bioconductor-enmix
   :replaces_section_title:
   :noindex:

   Quality control and analysis tools for Illumina DNA methylation BeadChip

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ENmix.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix/meta.yaml>`_

   Tools for quanlity control\, analysis and visulization of Illumina DNA methylation array data.


.. conda:package:: bioconductor-enmix

   |downloads_bioconductor-enmix| |docker_bioconductor-enmix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.01-0</code>,  <code>1.36.01-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.2-0</code>,  <code>1.26.8-0</code>,  <code>1.26.0-0</code>,  <code>1.25.1-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.01-0``,  ``1.36.01-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.2-0``,  ``1.26.8-0``,  ``1.26.0-0``,  ``1.25.1-0``,  ``1.22.0-0``,  ``1.20.3-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-geneplotter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-illuminaio: ``>=0.44.0,<0.45.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dynamictreecut: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-irlba: 
   :depends r-matrixstats: 
   :depends r-quadprog: 
   :depends r-rpmm: 
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

      mamba install bioconductor-enmix

   and update with::

      mamba update bioconductor-enmix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enmix:<tag>

   (see `bioconductor-enmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enmix
   :alt:   (downloads)
.. |docker_bioconductor-enmix| image:: https://quay.io/repository/biocontainers/bioconductor-enmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmix
.. _`bioconductor-enmix/tags`: https://quay.io/repository/biocontainers/bioconductor-enmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enmix";
        var versions = ["1.38.01","1.36.01","1.34.0","1.30.0","1.28.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmix/README.html