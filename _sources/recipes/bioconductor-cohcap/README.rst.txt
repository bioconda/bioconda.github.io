:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cohcap'
.. highlight: bash

bioconductor-cohcap
===================

.. conda:recipe:: bioconductor-cohcap
   :replaces_section_title:
   :noindex:

   CpG Island Analysis Pipeline for Illumina Methylation Array and Targeted BS\-Seq Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/COHCAP.html
   :license: GPL-3
   :recipe: /`bioconductor-cohcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcap/meta.yaml>`_
   :links: biotools: :biotools:`cohcap`

   COHCAP \(pronounced \"co\-cap\"\) provides a pipeline to analyze single\-nucleotide resolution methylation data \(Illumina 450k\/EPIC methylation array\, targeted BS\-Seq\, etc.\). It provides differential methylation for CpG Sites\, differential methylation for CpG Islands\, integration with gene expression data\, with visualizaton options. Discussion Group\: https\:\/\/sourceforge.net\/p\/cohcap\/discussion\/bioconductor\/


.. conda:package:: bioconductor-cohcap

   |downloads_bioconductor-cohcap| |docker_bioconductor-cohcap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-3</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-3``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cohcapanno: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl: ``>=5.6.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-writexls: 
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

      mamba install bioconductor-cohcap

   and update with::

      mamba update bioconductor-cohcap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cohcap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cohcap:<tag>

   (see `bioconductor-cohcap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cohcap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cohcap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cohcap
   :alt:   (downloads)
.. |docker_bioconductor-cohcap| image:: https://quay.io/repository/biocontainers/bioconductor-cohcap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cohcap
.. _`bioconductor-cohcap/tags`: https://quay.io/repository/biocontainers/bioconductor-cohcap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cohcap";
        var versions = ["1.46.0","1.44.0","1.44.0","1.40.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cohcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cohcap/README.html