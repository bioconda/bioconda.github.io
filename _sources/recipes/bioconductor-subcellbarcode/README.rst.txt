:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-subcellbarcode'
.. highlight: bash

bioconductor-subcellbarcode
===========================

.. conda:recipe:: bioconductor-subcellbarcode
   :replaces_section_title:
   :noindex:

   SubCellBarCode\: Integrated workflow for robust mapping and visualizing whole human spatial proteome

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SubCellBarCode.html
   :license: GPL-2
   :recipe: /`bioconductor-subcellbarcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subcellbarcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-subcellbarcode/meta.yaml>`_

   Mass\-Spectrometry based spatial proteomics have enabled the proteome\-wide mapping of protein subcellular localization \(Orre et al. 2019\, Molecular Cell\). SubCellBarCode R package robustly classifies proteins into corresponding subcellular localization.


.. conda:package:: bioconductor-subcellbarcode

   |downloads_bioconductor-subcellbarcode| |docker_bioconductor-subcellbarcode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-networkd3: 
   :depends r-rtsne: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-subcellbarcode

   and update with::

      mamba update bioconductor-subcellbarcode

  To create a new environment, run::

      mamba create --name myenvname bioconductor-subcellbarcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-subcellbarcode:<tag>

   (see `bioconductor-subcellbarcode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-subcellbarcode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-subcellbarcode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-subcellbarcode
   :alt:   (downloads)
.. |docker_bioconductor-subcellbarcode| image:: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode
.. _`bioconductor-subcellbarcode/tags`: https://quay.io/repository/biocontainers/bioconductor-subcellbarcode?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-subcellbarcode";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-subcellbarcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-subcellbarcode/README.html