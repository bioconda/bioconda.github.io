:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multidataset'
.. highlight: bash

bioconductor-multidataset
=========================

.. conda:recipe:: bioconductor-multidataset
   :replaces_section_title:
   :noindex:

   Implementation of MultiDataSet and ResultSet

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MultiDataSet.html
   :license: file LICENSE
   :recipe: /`bioconductor-multidataset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multidataset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multidataset/meta.yaml>`_
   :links: biotools: :biotools:`multidataset`

   Implementation of the BRGE\'s \(Bioinformatic Research Group in Epidemiology from Center for Research in Environmental Epidemiology\) MultiDataSet and ResultSet. MultiDataSet is designed for integrating multi omics data sets and ResultSet is a container for omics results. This package contains base classes for MEAL and rexposome packages.


.. conda:package:: bioconductor-multidataset

   |downloads_bioconductor-multidataset| |docker_bioconductor-multidataset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-qqman: 
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

      mamba install bioconductor-multidataset

   and update with::

      mamba update bioconductor-multidataset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multidataset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multidataset:<tag>

   (see `bioconductor-multidataset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multidataset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multidataset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multidataset
   :alt:   (downloads)
.. |docker_bioconductor-multidataset| image:: https://quay.io/repository/biocontainers/bioconductor-multidataset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multidataset
.. _`bioconductor-multidataset/tags`: https://quay.io/repository/biocontainers/bioconductor-multidataset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multidataset";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multidataset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multidataset/README.html