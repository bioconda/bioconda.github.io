:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trace-crispr'
.. highlight: bash

trace-crispr
============

.. conda:recipe:: trace-crispr
   :replaces_section_title:
   :noindex:

   TRACE\: Triple\-aligner Read Analysis for CRISPR Editing

   :homepage: https://github.com/k-roy/TRACE
   :license: MIT / MIT
   :recipe: /`trace-crispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trace-crispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trace-crispr/meta.yaml>`_

   TRACE provides robust quantification of CRISPR editing outcomes
   including HDR\, NHEJ\, and large deletions using a triple\-aligner
   consensus approach \(BWA\-MEM\, BBMap\, minimap2\).



.. conda:package:: trace-crispr

   |downloads_trace-crispr| |docker_trace-crispr|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends bbmap: ``>=39``
   :depends bwa: ``>=0.7``
   :depends click: ``>=8.0``
   :depends minimap2: ``>=2.24``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.5``
   :depends pysam: ``>=0.20``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=6.0``
   :depends rapidfuzz: ``>=3.0``
   :depends samtools: ``>=1.16``
   :depends tqdm: ``>=4.60``
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

      mamba install trace-crispr

   and update with::

      mamba update trace-crispr

  To create a new environment, run::

      mamba create --name myenvname trace-crispr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trace-crispr:<tag>

   (see `trace-crispr/tags`_ for valid values for ``<tag>``)


.. |downloads_trace-crispr| image:: https://img.shields.io/conda/dn/bioconda/trace-crispr.svg?style=flat
   :target: https://anaconda.org/bioconda/trace-crispr
   :alt:   (downloads)
.. |docker_trace-crispr| image:: https://quay.io/repository/biocontainers/trace-crispr/status
   :target: https://quay.io/repository/biocontainers/trace-crispr
.. _`trace-crispr/tags`: https://quay.io/repository/biocontainers/trace-crispr?tab=tags


.. raw:: html

    <script>
        var package = "trace-crispr";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trace-crispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trace-crispr/README.html