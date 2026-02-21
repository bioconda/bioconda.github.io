:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covsnap'
.. highlight: bash

covsnap
=======

.. conda:recipe:: covsnap
   :replaces_section_title:
   :noindex:

   Coverage inspector for targeted sequencing QC \(hg38\)

   :homepage: https://github.com/enes-ak/covsnap
   :documentation: https://github.com/enes-ak/covsnap/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`covsnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsnap/meta.yaml>`_

   covsnap computes per\-target and per\-exon depth metrics from
   BAM\/CRAM files\, producing a machine\-readable raw TSV and a
   human\-readable interpreted report with PASS\/FAIL classifications.
   Supports gene symbols\, genomic regions\, and BED files as input.
   Ships with a bundled GENCODE v44 hg38 gene index — no internet
   or GTF files required at runtime.



.. conda:package:: covsnap

   |downloads_covsnap| |docker_covsnap|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends htslib: ``>=1.17``
   :depends numpy: ``>=1.24``
   :depends pysam: ``>=0.22``
   :depends python: ``>=3.9``
   :depends samtools: ``>=1.17``
   :depends tabix: 
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

      mamba install covsnap

   and update with::

      mamba update covsnap

  To create a new environment, run::

      mamba create --name myenvname covsnap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/covsnap:<tag>

   (see `covsnap/tags`_ for valid values for ``<tag>``)


.. |downloads_covsnap| image:: https://img.shields.io/conda/dn/bioconda/covsnap.svg?style=flat
   :target: https://anaconda.org/bioconda/covsnap
   :alt:   (downloads)
.. |docker_covsnap| image:: https://quay.io/repository/biocontainers/covsnap/status
   :target: https://quay.io/repository/biocontainers/covsnap
.. _`covsnap/tags`: https://quay.io/repository/biocontainers/covsnap?tab=tags


.. raw:: html

    <script>
        var package = "covsnap";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covsnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covsnap/README.html