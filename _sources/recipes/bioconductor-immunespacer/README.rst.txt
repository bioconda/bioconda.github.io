:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunespacer'
.. highlight: bash

bioconductor-immunespacer
=========================

.. conda:recipe:: bioconductor-immunespacer
   :replaces_section_title:
   :noindex:

   A Thin Wrapper around the ImmuneSpace Data and Tools Portal

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ImmuneSpaceR.html
   :license: GPL-2
   :recipe: /`bioconductor-immunespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer/meta.yaml>`_

   Provides a convenient API for accessing data sets within ImmuneSpace Data and Tools Portal \(datatools.immunespace.org\)\, the data repository and analysis platform of the Human Immunology Project Consortium \(HIPC\).


.. conda:package:: bioconductor-immunespacer

   |downloads_bioconductor-immunespacer| |docker_bioconductor-immunespacer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.5-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowworkspace: ``>=4.14.0,<4.15.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-ggplot2: ``>=3.2.0``
   :depends r-gplots: 
   :depends r-heatmaply: ``>=0.7.0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-r6: 
   :depends r-rlabkey: ``>=2.3.1``
   :depends r-rmarkdown: 
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

      mamba install bioconductor-immunespacer

   and update with::

      mamba update bioconductor-immunespacer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-immunespacer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunespacer:<tag>

   (see `bioconductor-immunespacer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunespacer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunespacer
   :alt:   (downloads)
.. |docker_bioconductor-immunespacer| image:: https://quay.io/repository/biocontainers/bioconductor-immunespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunespacer
.. _`bioconductor-immunespacer/tags`: https://quay.io/repository/biocontainers/bioconductor-immunespacer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunespacer";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html