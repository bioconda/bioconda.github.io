:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncomix'
.. highlight: bash

bioconductor-oncomix
====================

.. conda:recipe:: bioconductor-oncomix
   :replaces_section_title:
   :noindex:

   Identifying Genes Overexpressed in Subsets of Tumors from Tumor\-Normal mRNA Expression Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/oncomix.html
   :license: GPL-3
   :recipe: /`bioconductor-oncomix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix/meta.yaml>`_

   This package helps identify mRNAs that are overexpressed in subsets of tumors relative to normal tissue. Ideal inputs would be paired tumor\-normal data from the same tissue from many patients \(\>15 pairs\). This unsupervised approach relies on the observation that oncogenes are characteristically overexpressed in only a subset of tumors in the population\, and may help identify oncogene candidates purely based on differences in mRNA expression between previously unknown subtypes.


.. conda:package:: bioconductor-oncomix

   |downloads_bioconductor-oncomix| |docker_bioconductor-oncomix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-mclust: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-oncomix

   and update with::

      mamba update bioconductor-oncomix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oncomix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oncomix:<tag>

   (see `bioconductor-oncomix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oncomix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncomix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncomix
   :alt:   (downloads)
.. |docker_bioconductor-oncomix| image:: https://quay.io/repository/biocontainers/bioconductor-oncomix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncomix
.. _`bioconductor-oncomix/tags`: https://quay.io/repository/biocontainers/bioconductor-oncomix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncomix";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncomix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncomix/README.html