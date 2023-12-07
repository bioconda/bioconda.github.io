:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tnt'
.. highlight: bash

bioconductor-tnt
================

.. conda:recipe:: bioconductor-tnt
   :replaces_section_title:
   :noindex:

   Interactive Visualization for Genomic Features

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TnT.html
   :license: AGPL-3
   :recipe: /`bioconductor-tnt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt/meta.yaml>`_

   A R interface to the TnT javascript library \(https\:\/\/github.com\/ tntvis\) to provide interactive and flexible visualization of track\-based genomic data.


.. conda:package:: bioconductor-tnt

   |downloads_bioconductor-tnt| |docker_bioconductor-tnt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-htmlwidgets: 
   :depends r-jsonlite: 
   :depends r-knitr: 
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

      mamba install bioconductor-tnt

   and update with::

      mamba update bioconductor-tnt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tnt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tnt:<tag>

   (see `bioconductor-tnt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tnt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tnt
   :alt:   (downloads)
.. |docker_bioconductor-tnt| image:: https://quay.io/repository/biocontainers/bioconductor-tnt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnt
.. _`bioconductor-tnt/tags`: https://quay.io/repository/biocontainers/bioconductor-tnt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tnt";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnt/README.html