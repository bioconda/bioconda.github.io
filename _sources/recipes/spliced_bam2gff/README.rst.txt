:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliced_bam2gff'
.. highlight: bash

spliced_bam2gff
===============

.. conda:recipe:: spliced_bam2gff
   :replaces_section_title:
   :noindex:

   A tool to convert spliced BAM alignments into GFF2 format

   :homepage: https://github.com/nanoporetech/spliced_bam2gff
   :license: MOZILLA / MPL-2
   :recipe: /`spliced_bam2gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff/meta.yaml>`_

   The spliced\_bam2gff tool converts BAM alignments\, produced by spliced aligners \(such as minimap2\, gmap\)\, into a GFF2 format.

   By default\, introns are created based on the N cigar feature. Alternatively\, if \-d \(i.e. for deletion\) is specified\, any deletions larger than the limit will be classified as an intron. The orientation of the GFF2 features is determined by the XS strand tag and SAM flags depending on the aligner.

   The tool supports splitting the output into loci and bundles of loci with a minimum number of features\, which enables easy parallelisation of downstream analyses. 



.. conda:package:: spliced_bam2gff

   |downloads_spliced_bam2gff| |docker_spliced_bam2gff|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   
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

      mamba install spliced_bam2gff

   and update with::

      mamba update spliced_bam2gff

  To create a new environment, run::

      mamba create --name myenvname spliced_bam2gff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spliced_bam2gff:<tag>

   (see `spliced_bam2gff/tags`_ for valid values for ``<tag>``)


.. |downloads_spliced_bam2gff| image:: https://img.shields.io/conda/dn/bioconda/spliced_bam2gff.svg?style=flat
   :target: https://anaconda.org/bioconda/spliced_bam2gff
   :alt:   (downloads)
.. |docker_spliced_bam2gff| image:: https://quay.io/repository/biocontainers/spliced_bam2gff/status
   :target: https://quay.io/repository/biocontainers/spliced_bam2gff
.. _`spliced_bam2gff/tags`: https://quay.io/repository/biocontainers/spliced_bam2gff?tab=tags


.. raw:: html

    <script>
        var package = "spliced_bam2gff";
        var versions = ["1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliced_bam2gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliced_bam2gff/README.html