:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xeva'
.. highlight: bash

bioconductor-xeva
=================

.. conda:recipe:: bioconductor-xeva
   :replaces_section_title:
   :noindex:

   Analysis of patient\-derived xenograft \(PDX\) data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Xeva.html
   :license: GPL-3
   :recipe: /`bioconductor-xeva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xeva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xeva/meta.yaml>`_

   The Xeva package provides efficient and powerful functions for patient\-drived xenograft \(PDX\) based pharmacogenomic data analysis. This package contains a set of functions to perform analysis of patient\-derived xenograft data. This package was developed by the BHKLab\, for further information please see our documentation.


.. conda:package:: bioconductor-xeva

   |downloads_bioconductor-xeva| |docker_bioconductor-xeva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-pharmacogx: ``>=3.6.0,<3.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bbmisc: 
   :depends r-doparallel: 
   :depends r-downloader: 
   :depends r-ggplot2: 
   :depends r-nlme: 
   :depends r-rmisc: 
   :depends r-scales: 
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

      mamba install bioconductor-xeva

   and update with::

      mamba update bioconductor-xeva

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xeva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xeva:<tag>

   (see `bioconductor-xeva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xeva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xeva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xeva
   :alt:   (downloads)
.. |docker_bioconductor-xeva| image:: https://quay.io/repository/biocontainers/bioconductor-xeva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xeva
.. _`bioconductor-xeva/tags`: https://quay.io/repository/biocontainers/bioconductor-xeva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xeva";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xeva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xeva/README.html