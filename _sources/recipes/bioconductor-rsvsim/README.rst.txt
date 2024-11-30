:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsvsim'
.. highlight: bash

bioconductor-rsvsim
===================

.. conda:recipe:: bioconductor-rsvsim
   :replaces_section_title:
   :noindex:

   RSVSim\: an R\/Bioconductor package for the simulation of structural variations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RSVSim.html
   :license: LGPL-3
   :recipe: /`bioconductor-rsvsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsvsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsvsim/meta.yaml>`_
   :links: biotools: :biotools:`rsvsim`, doi: :doi:`10.1093/bioinformatics/btt198`

   RSVSim is a package for the simulation of deletions\, insertions\, inversion\, tandem\-duplications and translocations of various sizes in any genome available as FASTA\-file or BSgenome data package. SV breakpoints can be placed uniformly accross the whole genome\, with a bias towards repeat regions and regions of high homology \(for hg19\) or at user\-supplied coordinates.


.. conda:package:: bioconductor-rsvsim

   |downloads_bioconductor-rsvsim| |docker_bioconductor-rsvsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rsvsim

   and update with::

      mamba update bioconductor-rsvsim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsvsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsvsim:<tag>

   (see `bioconductor-rsvsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsvsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsvsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsvsim
   :alt:   (downloads)
.. |docker_bioconductor-rsvsim| image:: https://quay.io/repository/biocontainers/bioconductor-rsvsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsvsim
.. _`bioconductor-rsvsim/tags`: https://quay.io/repository/biocontainers/bioconductor-rsvsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsvsim";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsvsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsvsim/README.html