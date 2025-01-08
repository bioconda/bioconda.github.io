:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumi'
.. highlight: bash

bioconductor-lumi
=================

.. conda:recipe:: bioconductor-lumi
   :replaces_section_title:
   :noindex:

   BeadArray Specific Methods for Illumina Methylation and Expression Microarrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lumi.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-lumi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumi/meta.yaml>`_
   :links: biotools: :biotools:`lumi`

   The lumi package provides an integrated solution for the Illumina microarray data analysis. It includes functions of Illumina BeadStudio \(GenomeStudio\) data input\, quality control\, BeadArray\-specific variance stabilization\, normalization and gene annotation at the probe level. It also includes the functions of processing Illumina methylation microarrays\, especially Illumina Infinium methylation microarrays.


.. conda:package:: bioconductor-lumi

   |downloads_bioconductor-lumi| |docker_bioconductor-lumi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.46.0-1</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  </span></summary>
      

      ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.46.0-1``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-methylumi: ``>=2.52.0,<2.53.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-kernsmooth: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mgcv: ``>=1.4-0``
   :depends r-nleqslv: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-lumi

   and update with::

      mamba update bioconductor-lumi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumi:<tag>

   (see `bioconductor-lumi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumi
   :alt:   (downloads)
.. |docker_bioconductor-lumi| image:: https://quay.io/repository/biocontainers/bioconductor-lumi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumi
.. _`bioconductor-lumi/tags`: https://quay.io/repository/biocontainers/bioconductor-lumi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumi";
        var versions = ["2.58.0","2.54.0","2.52.0","2.50.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumi/README.html