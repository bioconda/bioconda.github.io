:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-venndetail'
.. highlight: bash

bioconductor-venndetail
=======================

.. conda:recipe:: bioconductor-venndetail
   :replaces_section_title:
   :noindex:

   A package for visualization and extract details

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VennDetail.html
   :license: GPL-2
   :recipe: /`bioconductor-venndetail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail/meta.yaml>`_

   A set of functions to generate high\-resolution Venn\,Vennpie plot\,extract and combine details of these subsets with user datasets in data frame is available.


.. conda:package:: bioconductor-venndetail

   |downloads_bioconductor-venndetail| |docker_bioconductor-venndetail|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-tibble: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-venndetail

   and update with::

      mamba update bioconductor-venndetail

  To create a new environment, run::

      mamba create --name myenvname bioconductor-venndetail

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-venndetail:<tag>

   (see `bioconductor-venndetail/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-venndetail| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-venndetail.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-venndetail
   :alt:   (downloads)
.. |docker_bioconductor-venndetail| image:: https://quay.io/repository/biocontainers/bioconductor-venndetail/status
   :target: https://quay.io/repository/biocontainers/bioconductor-venndetail
.. _`bioconductor-venndetail/tags`: https://quay.io/repository/biocontainers/bioconductor-venndetail?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-venndetail";
        var versions = ["1.22.0","1.18.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-venndetail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-venndetail/README.html