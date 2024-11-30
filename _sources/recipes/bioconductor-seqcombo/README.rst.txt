:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcombo'
.. highlight: bash

bioconductor-seqcombo
=====================

.. conda:recipe:: bioconductor-seqcombo
   :replaces_section_title:
   :noindex:

   Visualization Tool for Genetic Reassortment

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqcombo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqcombo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcombo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcombo/meta.yaml>`_

   Provides useful functions for visualizing virus reassortment events.


.. conda:package:: bioconductor-seqcombo

   |downloads_bioconductor-seqcombo| |docker_bioconductor-seqcombo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-yulab.utils: 
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

      mamba install bioconductor-seqcombo

   and update with::

      mamba update bioconductor-seqcombo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqcombo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcombo:<tag>

   (see `bioconductor-seqcombo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcombo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcombo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcombo
   :alt:   (downloads)
.. |docker_bioconductor-seqcombo| image:: https://quay.io/repository/biocontainers/bioconductor-seqcombo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcombo
.. _`bioconductor-seqcombo/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcombo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqcombo";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcombo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcombo/README.html