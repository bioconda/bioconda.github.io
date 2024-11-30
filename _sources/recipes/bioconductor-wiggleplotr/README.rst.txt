:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wiggleplotr'
.. highlight: bash

bioconductor-wiggleplotr
========================

.. conda:recipe:: bioconductor-wiggleplotr
   :replaces_section_title:
   :noindex:

   Make read coverage plots from BigWig files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/wiggleplotr.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-wiggleplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr/meta.yaml>`_

   Tools to visualise read coverage from sequencing experiments together with genomic annotations \(genes\, transcripts\, peaks\). Introns of long transcripts can be rescaled to a fixed length for better visualisation of exonic read coverage.


.. conda:package:: bioconductor-wiggleplotr

   |downloads_bioconductor-wiggleplotr| |docker_bioconductor-wiggleplotr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-purrr: 
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

      mamba install bioconductor-wiggleplotr

   and update with::

      mamba update bioconductor-wiggleplotr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wiggleplotr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wiggleplotr:<tag>

   (see `bioconductor-wiggleplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wiggleplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wiggleplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wiggleplotr
   :alt:   (downloads)
.. |docker_bioconductor-wiggleplotr| image:: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr
.. _`bioconductor-wiggleplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wiggleplotr";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html