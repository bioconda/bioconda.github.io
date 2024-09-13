:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsem'
.. highlight: bash

rsem
====

.. conda:recipe:: rsem
   :replaces_section_title:
   :noindex:

   RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data.

   :homepage: https://deweylab.github.io/RSEM/
   :license: GPL3
   :recipe: /`rsem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-12-323`, biotools: :biotools:`rsem`

   \"RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data. \"
   \"The RSEM package provides an user\-friendly interface\, supports threads for parallel computation \"
   \"of the EM algorithm\, single\-end and paired\-end read data\, quality scores\, variable\-length reads \"
   \"and RSPD estimation. In addition\, it provides posterior mean and 95\% credibility interval \"
   \"estimates for expression levels. For visualization\, It can generate BAM and Wiggle files in both \"
   \"transcript\-coordinate and genomic\-coordinate. Genomic\-coordinate files can be visualized by both \"
   \"UCSC Genome browser and Broad Institute\'s Integrative Genomics Viewer \(IGV\). Transcript\-coordinate \"
   \"files can be visualized by IGV. RSEM also has its own scripts to generate transcript read depth \"
   \"plots in pdf format. The unique feature of RSEM is\, the read depth plots can be stacked\, with read \"
   \"depth contributed to unique reads shown in black and contributed to multi\-reads shown in red. In \"
   \"addition\, models learned from data can also be visualized. Last but not least\, RSEM contains a \"
   \"simulator.\"



.. conda:package:: rsem

   |downloads_rsem| |docker_rsem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-7</code>,  <code>1.3.3-6</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  </span></summary>
      

      ``1.3.3-7``,  ``1.3.3-6``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.28-2``,  ``1.2.28-0``,  ``1.2.22-0``,  ``1.2.21-5``,  ``1.2.21-4``,  ``1.2.21-3``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-ebseq: 
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
   :depends r-base: 
   :depends samtools: 
   :depends ucsc-bigwigsummary: 
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

      mamba install rsem

   and update with::

      mamba update rsem

  To create a new environment, run::

      mamba create --name myenvname rsem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rsem:<tag>

   (see `rsem/tags`_ for valid values for ``<tag>``)


.. |downloads_rsem| image:: https://img.shields.io/conda/dn/bioconda/rsem.svg?style=flat
   :target: https://anaconda.org/bioconda/rsem
   :alt:   (downloads)
.. |docker_rsem| image:: https://quay.io/repository/biocontainers/rsem/status
   :target: https://quay.io/repository/biocontainers/rsem
.. _`rsem/tags`: https://quay.io/repository/biocontainers/rsem?tab=tags


.. raw:: html

    <script>
        var package = "rsem";
        var versions = ["1.3.3","1.3.3","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsem/README.html