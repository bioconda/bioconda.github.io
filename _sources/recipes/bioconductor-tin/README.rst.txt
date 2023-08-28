:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tin'
.. highlight: bash

bioconductor-tin
================

.. conda:recipe:: bioconductor-tin
   :replaces_section_title:
   :noindex:

   Transcriptome instability analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TIN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin/meta.yaml>`_
   :links: biotools: :biotools:`tin`, doi: :doi:`10.4137/CIN.S31363`

   The TIN package implements a set of tools for transcriptome instability analysis based on exon expression profiles. Deviating exon usage is studied in the context of splicing factors to analyse to what degree transcriptome instability is correlated to splicing factor expression. In the transcriptome instability correlation analysis\, the data is compared to both random permutations of alternative splicing scores and expression of random gene sets.


.. conda:package:: bioconductor-tin

   |downloads_bioconductor-tin| |docker_bioconductor-tin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends r-aroma.affymetrix: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-squash: 
   :depends r-stringr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tin

   and update with::

      mamba update bioconductor-tin

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tin:<tag>

   (see `bioconductor-tin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tin
   :alt:   (downloads)
.. |docker_bioconductor-tin| image:: https://quay.io/repository/biocontainers/bioconductor-tin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tin
.. _`bioconductor-tin/tags`: https://quay.io/repository/biocontainers/bioconductor-tin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tin";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tin/README.html