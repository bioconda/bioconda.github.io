:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ringo'
.. highlight: bash

bioconductor-ringo
==================

.. conda:recipe:: bioconductor-ringo
   :replaces_section_title:
   :noindex:

   R Investigation of ChIP\-chip Oligoarrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Ringo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ringo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ringo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ringo/meta.yaml>`_
   :links: biotools: :biotools:`ringo`

   The package Ringo facilitates the primary analysis of ChIP\-chip data. The main functionalities of the package are data read\-in\, quality assessment\, data visualisation and identification of genomic regions showing enrichment in ChIP\-chip. The package has functions to deal with two\-color oligonucleotide microarrays from NimbleGen used in ChIP\-chip projects\, but also contains more general functions for ChIP\-chip data analysis\, given that the data is supplied as RGList \(raw\) or ExpressionSet \(pre\- processed\). The package employs functions from various other packages of the Bioconductor project and provides additional ChIP\-chip\-specific and NimbleGen\-specific functionalities.


.. conda:package:: bioconductor-ringo

   |downloads_bioconductor-ringo| |docker_bioconductor-ringo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-ringo

   and update with::

      mamba update bioconductor-ringo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ringo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ringo:<tag>

   (see `bioconductor-ringo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ringo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ringo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ringo
   :alt:   (downloads)
.. |docker_bioconductor-ringo| image:: https://quay.io/repository/biocontainers/bioconductor-ringo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ringo
.. _`bioconductor-ringo/tags`: https://quay.io/repository/biocontainers/bioconductor-ringo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ringo";
        var versions = ["1.66.0","1.64.0","1.62.0","1.62.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ringo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ringo/README.html