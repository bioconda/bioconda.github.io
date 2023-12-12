:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggcyto'
.. highlight: bash

bioconductor-ggcyto
===================

.. conda:recipe:: bioconductor-ggcyto
   :replaces_section_title:
   :noindex:

   Visualize Cytometry data with ggplot

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ggcyto.html
   :license: file LICENSE
   :recipe: /`bioconductor-ggcyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto/meta.yaml>`_
   :links: biotools: :biotools:`ggcyto`, doi: :doi:`10.1038/nmeth.3252`

   With the dedicated fortify method implemented for flowSet\, ncdfFlowSet and GatingSet classes\, both raw and gated flow cytometry data can be plotted directly with ggplot. ggcyto wrapper and some customed layers also make it easy to add gates and population statistics to the plot.


.. conda:package:: bioconductor-ggcyto

   |downloads_bioconductor-ggcyto| |docker_bioconductor-ggcyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowworkspace: ``>=4.14.0,<4.15.0``
   :depends bioconductor-ncdfflow: ``>=2.48.0,<2.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: ``>=3.4.2``
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
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

      mamba install bioconductor-ggcyto

   and update with::

      mamba update bioconductor-ggcyto

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggcyto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggcyto:<tag>

   (see `bioconductor-ggcyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggcyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggcyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggcyto
   :alt:   (downloads)
.. |docker_bioconductor-ggcyto| image:: https://quay.io/repository/biocontainers/bioconductor-ggcyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggcyto
.. _`bioconductor-ggcyto/tags`: https://quay.io/repository/biocontainers/bioconductor-ggcyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggcyto";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html