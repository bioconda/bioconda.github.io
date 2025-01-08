:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oscope'
.. highlight: bash

bioconductor-oscope
===================

.. conda:recipe:: bioconductor-oscope
   :replaces_section_title:
   :noindex:

   Oscope \- A statistical pipeline for identifying oscillatory genes in unsynchronized single cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Oscope.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-oscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope/meta.yaml>`_
   :links: biotools: :biotools:`oscope`, doi: :doi:`10.1038/nmeth.3549`

   Oscope is a statistical pipeline developed to identifying and recovering the base cycle profiles of oscillating genes in an unsynchronized single cell RNA\-seq experiment. The Oscope pipeline includes three modules\: a sine model module to search for candidate oscillator pairs\; a K\-medoids clustering module to cluster candidate oscillators into groups\; and an extended nearest insertion module to recover the base cycle order for each oscillator group.


.. conda:package:: bioconductor-oscope

   |downloads_bioconductor-oscope| |docker_bioconductor-oscope|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-ebseq: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-testthat: 
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

      mamba install bioconductor-oscope

   and update with::

      mamba update bioconductor-oscope

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oscope:<tag>

   (see `bioconductor-oscope/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oscope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oscope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oscope
   :alt:   (downloads)
.. |docker_bioconductor-oscope| image:: https://quay.io/repository/biocontainers/bioconductor-oscope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oscope
.. _`bioconductor-oscope/tags`: https://quay.io/repository/biocontainers/bioconductor-oscope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oscope";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oscope/README.html