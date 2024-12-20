:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromdraw'
.. highlight: bash

bioconductor-chromdraw
======================

.. conda:recipe:: bioconductor-chromdraw
   :replaces_section_title:
   :noindex:

   chromDraw is a R package for drawing the schemes of karyotypes in the linear and circular fashion.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/chromDraw.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-chromdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw/meta.yaml>`_
   :links: biotools: :biotools:`chromdraw`

   ChromDraw is a R package for drawing the schemes of karyotype\(s\) in the linear and circular fashion. It is possible to visualized cytogenetic marsk on the chromosomes. This tool has own input data format. Input data can be imported from the GenomicRanges data structure. This package can visualized the data in the BED file format. Here is requirement on to the first nine fields of the BED format. Output files format are \*.eps and \*.svg.


.. conda:package:: bioconductor-chromdraw

   |downloads_bioconductor-chromdraw| |docker_bioconductor-chromdraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.24.0-2</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.24.0-2``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: ``>=0.11.1``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-chromdraw

   and update with::

      mamba update bioconductor-chromdraw

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromdraw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromdraw:<tag>

   (see `bioconductor-chromdraw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromdraw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromdraw
   :alt:   (downloads)
.. |docker_bioconductor-chromdraw| image:: https://quay.io/repository/biocontainers/bioconductor-chromdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromdraw
.. _`bioconductor-chromdraw/tags`: https://quay.io/repository/biocontainers/bioconductor-chromdraw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromdraw";
        var versions = ["2.36.0","2.32.0","2.32.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html