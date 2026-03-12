:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thebigbam'
.. highlight: bash

thebigbam
=========

.. conda:recipe:: thebigbam
   :replaces_section_title:
   :noindex:

   Compression and interactive exploration of large\-scale sequencing alignments with circular mapping support

   :homepage: https://github.com/bhagavadgitadu22/theBIGbam
   :license: MIT
   :recipe: /`thebigbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thebigbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thebigbam/meta.yaml>`_

   


.. conda:package:: thebigbam

   |downloads_thebigbam| |docker_thebigbam|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: 
   :depends bokeh: ``>=3.0``
   :depends bwa-mem2: 
   :depends dna_features_viewer: ``>=1.0``
   :depends libgcc: ``>=14``
   :depends libstdcxx: ``>=14``
   :depends minimap2: 
   :depends panel: ``>=1.4``
   :depends pysam: ``>=0.20``
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python-duckdb: ``>=1.0``
   :depends python_abi: ``3.13.* *_cp313``
   :depends samtools: 
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

      mamba install thebigbam

   and update with::

      mamba update thebigbam

  To create a new environment, run::

      mamba create --name myenvname thebigbam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/thebigbam:<tag>

   (see `thebigbam/tags`_ for valid values for ``<tag>``)


.. |downloads_thebigbam| image:: https://img.shields.io/conda/dn/bioconda/thebigbam.svg?style=flat
   :target: https://anaconda.org/bioconda/thebigbam
   :alt:   (downloads)
.. |docker_thebigbam| image:: https://quay.io/repository/biocontainers/thebigbam/status
   :target: https://quay.io/repository/biocontainers/thebigbam
.. _`thebigbam/tags`: https://quay.io/repository/biocontainers/thebigbam?tab=tags


.. raw:: html

    <script>
        var package = "thebigbam";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thebigbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thebigbam/README.html