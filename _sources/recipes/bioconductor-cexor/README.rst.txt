:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cexor'
.. highlight: bash

bioconductor-cexor
==================

.. conda:recipe:: bioconductor-cexor
   :replaces_section_title:
   :noindex:

   An R package to uncover high\-resolution protein\-DNA interactions in ChIP\-exo replicates

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CexoR.html
   :license: Artistic-2.0 | GPL-2 + file LICENSE
   :recipe: /`bioconductor-cexor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cexor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cexor/meta.yaml>`_
   :links: biotools: :biotools:`cexor`, doi: :doi:`10.14806/ej.21.0.837`

   Strand specific peak\-pair calling in ChIP\-exo replicates. The cumulative Skellam distribution function is used to detect significant normalised count differences of opposed sign at each DNA strand \(peak\-pairs\). Then\, irreproducible discovery rate for overlapping peak\-pairs across biological replicates is computed.


.. conda:package:: bioconductor-cexor

   |downloads_bioconductor-cexor| |docker_bioconductor-cexor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomation: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-idr: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-cexor

   and update with::

      mamba update bioconductor-cexor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cexor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cexor:<tag>

   (see `bioconductor-cexor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cexor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cexor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cexor
   :alt:   (downloads)
.. |docker_bioconductor-cexor| image:: https://quay.io/repository/biocontainers/bioconductor-cexor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cexor
.. _`bioconductor-cexor/tags`: https://quay.io/repository/biocontainers/bioconductor-cexor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cexor";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cexor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cexor/README.html