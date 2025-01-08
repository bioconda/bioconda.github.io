:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-limmagui'
.. highlight: bash

bioconductor-limmagui
=====================

.. conda:recipe:: bioconductor-limmagui
   :replaces_section_title:
   :noindex:

   GUI for limma Package With Two Color Microarrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/limmaGUI.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-limmagui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limmagui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limmagui/meta.yaml>`_

   A Graphical User Interface for differential expression analysis of two\-color microarray data using the limma package.


.. conda:package:: bioconductor-limmagui

   |downloads_bioconductor-limmagui| |docker_bioconductor-limmagui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r2html: 
   :depends r-tkrplot: 
   :depends r-xtable: 
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

      mamba install bioconductor-limmagui

   and update with::

      mamba update bioconductor-limmagui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-limmagui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-limmagui:<tag>

   (see `bioconductor-limmagui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-limmagui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limmagui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-limmagui
   :alt:   (downloads)
.. |docker_bioconductor-limmagui| image:: https://quay.io/repository/biocontainers/bioconductor-limmagui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limmagui
.. _`bioconductor-limmagui/tags`: https://quay.io/repository/biocontainers/bioconductor-limmagui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-limmagui";
        var versions = ["1.82.0","1.78.0","1.76.0","1.74.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limmagui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limmagui/README.html