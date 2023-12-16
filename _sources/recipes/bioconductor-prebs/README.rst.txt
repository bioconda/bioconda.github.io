:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prebs'
.. highlight: bash

bioconductor-prebs
==================

.. conda:recipe:: bioconductor-prebs
   :replaces_section_title:
   :noindex:

   Probe region expression estimation for RNA\-seq data for improved microarray comparability

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/prebs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prebs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebs/meta.yaml>`_
   :links: biotools: :biotools:`prebs`

   The prebs package aims at making RNA\-sequencing \(RNA\-seq\) data more comparable to microarray data. The comparability is achieved by summarizing sequencing\-based expressions of probe regions using a modified version of RMA algorithm. The pipeline takes mapped reads in BAM format as an input and produces either gene expressions or original microarray probe set expressions as an output.


.. conda:package:: bioconductor-prebs

   |downloads_bioconductor-prebs| |docker_bioconductor-prebs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rpa: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-prebs

   and update with::

      mamba update bioconductor-prebs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prebs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prebs:<tag>

   (see `bioconductor-prebs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prebs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prebs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prebs
   :alt:   (downloads)
.. |docker_bioconductor-prebs| image:: https://quay.io/repository/biocontainers/bioconductor-prebs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prebs
.. _`bioconductor-prebs/tags`: https://quay.io/repository/biocontainers/bioconductor-prebs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prebs";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prebs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prebs/README.html