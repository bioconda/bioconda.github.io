:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vulcan'
.. highlight: bash

bioconductor-vulcan
===================

.. conda:recipe:: bioconductor-vulcan
   :replaces_section_title:
   :noindex:

   VirtUaL ChIP\-Seq data Analysis using Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/vulcan.html
   :license: LGPL-3
   :recipe: /`bioconductor-vulcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcan/meta.yaml>`_

   Vulcan \(VirtUaL ChIP\-Seq Analysis through Networks\) is a package that interrogates gene regulatory networks to infer cofactors significantly enriched in a differential binding signature coming from ChIP\-Seq data. In order to do so\, our package combines strategies from different BioConductor packages\: DESeq for data normalization\, ChIPpeakAnno and DiffBind for annotation and definition of ChIP\-Seq genomic peaks\, csaw to define optimal peak width and viper for applying a regulatory network over a differential binding signature.


.. conda:package:: bioconductor-vulcan

   |downloads_bioconductor-vulcan| |docker_bioconductor-vulcan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-chippeakanno: ``>=3.40.0,<3.41.0``
   :depends bioconductor-csaw: ``>=1.40.0,<1.41.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-diffbind: ``>=3.16.0,<3.17.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-viper: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-catools: 
   :depends r-gplots: 
   :depends r-locfit: 
   :depends r-wordcloud: 
   :depends r-zoo: 
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

      mamba install bioconductor-vulcan

   and update with::

      mamba update bioconductor-vulcan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vulcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vulcan:<tag>

   (see `bioconductor-vulcan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vulcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vulcan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vulcan
   :alt:   (downloads)
.. |docker_bioconductor-vulcan| image:: https://quay.io/repository/biocontainers/bioconductor-vulcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vulcan
.. _`bioconductor-vulcan/tags`: https://quay.io/repository/biocontainers/bioconductor-vulcan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vulcan";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vulcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vulcan/README.html