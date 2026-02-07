:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drivernet'
.. highlight: bash

bioconductor-drivernet
======================

.. conda:recipe:: bioconductor-drivernet
   :replaces_section_title:
   :noindex:

   Drivernet\: uncovering somatic driver mutations modulating transcriptional networks in cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DriverNet.html
   :license: GPL-3
   :recipe: /`bioconductor-drivernet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drivernet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drivernet/meta.yaml>`_
   :links: biotools: :biotools:`drivernet`, doi: :doi:`10.1186/gb-2012-13-12-r124`

   DriverNet is a package to predict functional important driver genes in cancer by integrating genome data \(mutation and copy number variation data\) and transcriptome data \(gene expression data\). The different kinds of data are combined by an influence graph\, which is a gene\-gene interaction network deduced from pathway data. A greedy algorithm is used to find the possible driver genes\, which may mutated in a larger number of patients and these mutations will push the gene expression values of the connected genes to some extreme values.


.. conda:package:: bioconductor-drivernet

   |downloads_bioconductor-drivernet| |docker_bioconductor-drivernet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
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

      mamba install bioconductor-drivernet

   and update with::

      mamba update bioconductor-drivernet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drivernet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drivernet:<tag>

   (see `bioconductor-drivernet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drivernet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drivernet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drivernet
   :alt:   (downloads)
.. |docker_bioconductor-drivernet| image:: https://quay.io/repository/biocontainers/bioconductor-drivernet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drivernet
.. _`bioconductor-drivernet/tags`: https://quay.io/repository/biocontainers/bioconductor-drivernet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drivernet";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drivernet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drivernet/README.html