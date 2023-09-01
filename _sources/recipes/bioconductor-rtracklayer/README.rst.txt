:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtracklayer'
.. highlight: bash

bioconductor-rtracklayer
========================

.. conda:recipe:: bioconductor-rtracklayer
   :replaces_section_title:
   :noindex:

   R interface to genome annotation files and the UCSC genome browser

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rtracklayer.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-rtracklayer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtracklayer/meta.yaml>`_
   :links: biotools: :biotools:`rtracklayer`

   Extensible framework for interacting with multiple genome browsers \(currently UCSC built\-in\) and manipulating annotation tracks in various formats \(currently GFF\, BED\, bedGraph\, BED15\, WIG\, BigWig and 2bit built\-in\). The user may export\/import tracks to\/from the supported browsers\, as well as query and modify the browser state\, such as the current viewport.


.. conda:package:: bioconductor-rtracklayer

   |downloads_bioconductor-rtracklayer| |docker_bioconductor-rtracklayer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.54.0-4</code>,  <code>1.54.0-3</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.54.0-4``,  ``1.54.0-3``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.2-1``,  ``1.44.2-0``,  ``1.44.0-1``,  ``1.42.1-1``,  ``1.42.1-0``,  ``1.40.6-0``,  ``1.38.3-0``,  ``1.38.0-0``,  ``1.36.6-0``,  ``1.34.2-1``,  ``1.34.1-0``,  ``1.32.2-1``,  ``1.30.1-0``,  ``1.30.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocio: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: ``>=1.4-2``
   :depends r-restfulr: ``>=0.0.13``
   :depends r-xml: ``>=1.98-0``
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

      mamba install bioconductor-rtracklayer

   and update with::

      mamba update bioconductor-rtracklayer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtracklayer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtracklayer:<tag>

   (see `bioconductor-rtracklayer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtracklayer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtracklayer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtracklayer
   :alt:   (downloads)
.. |docker_bioconductor-rtracklayer| image:: https://quay.io/repository/biocontainers/bioconductor-rtracklayer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtracklayer
.. _`bioconductor-rtracklayer/tags`: https://quay.io/repository/biocontainers/bioconductor-rtracklayer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtracklayer";
        var versions = ["1.60.0","1.58.0","1.58.0","1.54.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtracklayer/README.html