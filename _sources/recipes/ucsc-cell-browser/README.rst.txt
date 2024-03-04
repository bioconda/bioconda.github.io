:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-cell-browser'
.. highlight: bash

ucsc-cell-browser
=================

.. conda:recipe:: ucsc-cell-browser
   :replaces_section_title:
   :noindex:

   A browser for single\-cell data\, main site at http\:\/\/cells.ucsc.edu. UCSC Cellbrowser\, an interactive browser for single cell data. Includes importers and basic pipelines for text files\, Seurat\, Scanpy and Cellranger. All Javascript \- does not require a server backend.

   :homepage: https://cells.ucsc.edu
   :documentation: https://cellbrowser.readthedocs.io/en/master/
   
   :developer docs: https://github.com/maximilianh/cellBrowser
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ucsc-cell-browser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab503`

   


.. conda:package:: ucsc-cell-browser

   |downloads_ucsc-cell-browser| |docker_ucsc-cell-browser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.15-0``,  ``0.7.14-0``,  ``0.7.13-0``,  ``0.7.11-0``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.5.49-0``,  ``0.5.46-0``,  ``0.5.45-0``,  ``0.5.43-1``,  ``0.5.43-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.21-0``,  ``0.4.56-0``,  ``0.4.38-0``,  ``0.4.35-0``,  ``0.4.23-1``,  ``0.4.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends numpy: 
   :depends python: ``>=3.6,<3.12``
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

      mamba install ucsc-cell-browser

   and update with::

      mamba update ucsc-cell-browser

  To create a new environment, run::

      mamba create --name myenvname ucsc-cell-browser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-cell-browser:<tag>

   (see `ucsc-cell-browser/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-cell-browser| image:: https://img.shields.io/conda/dn/bioconda/ucsc-cell-browser.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-cell-browser
   :alt:   (downloads)
.. |docker_ucsc-cell-browser| image:: https://quay.io/repository/biocontainers/ucsc-cell-browser/status
   :target: https://quay.io/repository/biocontainers/ucsc-cell-browser
.. _`ucsc-cell-browser/tags`: https://quay.io/repository/biocontainers/ucsc-cell-browser?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-cell-browser";
        var versions = ["1.2.5","1.2.4","1.2.3","1.2.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-cell-browser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-cell-browser/README.html