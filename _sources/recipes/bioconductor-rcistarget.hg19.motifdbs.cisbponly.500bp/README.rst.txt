:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp'
.. highlight: bash

bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
=====================================================

.. conda:recipe:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :replaces_section_title:
   :noindex:

   RcisTarget motif databases for human \(hg19\) \- Subset of 4.6k motifs

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RcisTarget.hg19.motifDBs.cisbpOnly.500bp.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/meta.yaml>`_

   RcisTarget databases\: Gene\-based motif rankings and annotation to transcription factors. This package contains a subset of 4.6k motifs \(cisbp motifs\)\, scored only within 500bp upstream and the TSS. See RcisTarget tutorial to download the full databases\, containing 20k motifs and search space up to 10kbp around the TSS.


.. conda:package:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   and update with::

      mamba update bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp:<tag>

   (see `bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
.. _`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp";
        var versions = ["1.22.0","1.20.0","1.17.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html