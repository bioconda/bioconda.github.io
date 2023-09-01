:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizr'
.. highlight: bash

bioconductor-epivizr
====================

.. conda:recipe:: bioconductor-epivizr
   :replaces_section_title:
   :noindex:

   R Interface to epiviz web app

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/epivizr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epivizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizr/meta.yaml>`_
   :links: biotools: :biotools:`epivizr`, doi: :doi:`10.1038/nmeth.3038`

   This package provides connections to the epiviz web app \(http\:\/\/epiviz.cbcb.umd.edu\) for interactive visualization of genomic data. Objects in R\/bioc interactive sessions can be displayed in genome browser tracks or plots to be explored by navigation through genomic regions. Fundamental Bioconductor data structures are supported \(e.g.\, GenomicRanges and RangedSummarizedExperiment objects\)\, while providing an easy mechanism to support other data structures \(through package epivizrData\). Visualizations \(using d3.js\) can be easily added to the web app as well.


.. conda:package:: bioconductor-epivizr

   |downloads_bioconductor-epivizr| |docker_bioconductor-epivizr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bumphunter: ``>=1.42.0,<1.43.0``
   :depends bioconductor-epivizrdata: ``>=1.28.0,<1.29.0``
   :depends bioconductor-epivizrserver: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-epivizr

   and update with::

      mamba update bioconductor-epivizr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epivizr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epivizr:<tag>

   (see `bioconductor-epivizr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epivizr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizr
   :alt:   (downloads)
.. |docker_bioconductor-epivizr| image:: https://quay.io/repository/biocontainers/bioconductor-epivizr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizr
.. _`bioconductor-epivizr/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epivizr";
        var versions = ["2.30.0","2.28.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizr/README.html