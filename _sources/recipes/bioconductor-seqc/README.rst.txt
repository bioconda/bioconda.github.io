:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqc'
.. highlight: bash

bioconductor-seqc
=================

.. conda:recipe:: bioconductor-seqc
   :replaces_section_title:
   :noindex:

   RNA\-seq data generated from SEQC \(MAQC\-III\) study

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/seqc.html
   :license: GPL-3
   :recipe: /`bioconductor-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqc/meta.yaml>`_

   The SEQC\/MAQC\-III Consortium has produced benchmark RNA\-seq data for the assessment of RNA sequencing technologies and data analysis methods \(Nat Biotechnol\, 2014\). Billions of sequence reads have been generated from ten different sequencing sites. This package contains the summarized read count data for \~2000 sequencing libraries. It also includes all the exon\-exon junctions discovered from the study. TaqMan RT\-PCR data for \~1000 genes and ERCC spike\-in sequence data are included in this package as well.


.. conda:package:: bioconductor-seqc

   |downloads_bioconductor-seqc| |docker_bioconductor-seqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-seqc

   and update with::

      mamba update bioconductor-seqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqc:<tag>

   (see `bioconductor-seqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqc
   :alt:   (downloads)
.. |docker_bioconductor-seqc| image:: https://quay.io/repository/biocontainers/bioconductor-seqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqc
.. _`bioconductor-seqc/tags`: https://quay.io/repository/biocontainers/bioconductor-seqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqc";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqc/README.html