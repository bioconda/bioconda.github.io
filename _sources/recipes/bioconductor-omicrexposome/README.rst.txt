:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicrexposome'
.. highlight: bash

bioconductor-omicrexposome
==========================

.. conda:recipe:: bioconductor-omicrexposome
   :replaces_section_title:
   :noindex:

   Exposome and omic data associatin and integration analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/omicRexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicrexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome/meta.yaml>`_

   omicRexposome systematizes the association evaluation between exposures and omic data\, taking advantage of MultiDataSet for coordinated data management\, rexposome for exposome data definition and limma for association testing. Also to perform data integration mixing exposome and omic data using multi co\-inherent analysis \(omicade4\) and multi\-canonical correlation analysis \(PMA\).


.. conda:package:: bioconductor-omicrexposome

   |downloads_bioconductor-omicrexposome| |docker_bioconductor-omicrexposome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-multidataset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-omicade4: ``>=1.40.0,<1.41.0``
   :depends bioconductor-rexposome: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-isva: 
   :depends r-pma: 
   :depends r-smartsva: 
   :depends r-stringr: 
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

      mamba install bioconductor-omicrexposome

   and update with::

      mamba update bioconductor-omicrexposome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicrexposome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicrexposome:<tag>

   (see `bioconductor-omicrexposome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicrexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicrexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicrexposome
   :alt:   (downloads)
.. |docker_bioconductor-omicrexposome| image:: https://quay.io/repository/biocontainers/bioconductor-omicrexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicrexposome
.. _`bioconductor-omicrexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-omicrexposome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicrexposome";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html