:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast'
.. highlight: bash

bioconductor-geneplast
======================

.. conda:recipe:: bioconductor-geneplast
   :replaces_section_title:
   :noindex:

   Evolutionary and plasticity analysis of orthologous groups

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/geneplast.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneplast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast/meta.yaml>`_
   :links: biotools: :biotools:`geneplast`, doi: :doi:`10.1038/nmeth.3252`

   Geneplast is designed for evolutionary and plasticity analysis based on orthologous groups distribution in a given species tree. It uses Shannon information theory and orthologs abundance to estimate the Evolutionary Plasticity Index. Additionally\, it implements the Bridge algorithm to determine the evolutionary root of a given gene based on its orthologs distribution.


.. conda:package:: bioconductor-geneplast

   |downloads_bioconductor-geneplast| |docker_bioconductor-geneplast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-snow: 
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

      mamba install bioconductor-geneplast

   and update with::

      mamba update bioconductor-geneplast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneplast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplast:<tag>

   (see `bioconductor-geneplast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast
   :alt:   (downloads)
.. |docker_bioconductor-geneplast| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast
.. _`bioconductor-geneplast/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplast";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast/README.html