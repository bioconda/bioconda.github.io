:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fragpipe'
.. highlight: bash

fragpipe
========

.. conda:recipe:: fragpipe
   :replaces_section_title:
   :noindex:

   Pipeline for comprehensive analysis of shotgun proteomics data

   :homepage: https://github.com/Nesvilab/FragPipe
   :license: GPL-3.0 + LICENSE files
   :recipe: /`fragpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragpipe/meta.yaml>`_
   :links: biotools: :biotools:`fragpipe`, doi: :doi:`10.1074/mcp.TIR120.002048`

   FragPipe is a Java Graphical User Interface \(GUI\) for a suite of computational tools
   enabling comprehensive analysis of mass spectrometry\-based proteomics data.
   It is powered by MSFragger \- an ultrafast proteomic search engine suitable
   for both conventional and \"open\" \(wide precursor mass tolerance\) peptide identification.
   FragPipe includes the Philosopher toolkit for downstream post\-processing of
   MSFragger search results \(PeptideProphet\, iProphet\, ProteinProphet\)\, FDR filtering\,
   label\-based quantification\, and multi\-experiment summary report generation.
   Crystal\-C and PTM\-Shepherd are included to aid interpretation of open search results.
   Also included in FragPipe binary are TMT\-Integrator for TMT\/iTRAQ isobaric
   labeling\-based quantification\, IonQuant for label\-free quantification with
   match\-between\-run \(MBR\) functionality\, spectral library building with EasyPQP\,
   and MSFragger\-DIA and DIA\-Umpire SE modules for direct analysis of data independent
   acquisition \(DIA\) data.



.. conda:package:: fragpipe

   |downloads_fragpipe| |docker_fragpipe|

   :versions:
      
      

      ``20.0-3``,  ``20.0-2``,  ``20.0-1``,  ``20.0-0``

      

   
   :depends easypqp: ``>=0.1.34``
   :depends ionquant: ``>=1.10.12``
   :depends lxml: 
   :depends msfragger: ``>=4.0``
   :depends openjdk: ``>=9``
   :depends python: ``3.9.*``
   :depends zlib: ``>=1.2.13``
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

      mamba install fragpipe

   and update with::

      mamba update fragpipe

  To create a new environment, run::

      mamba create --name myenvname fragpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fragpipe:<tag>

   (see `fragpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_fragpipe| image:: https://img.shields.io/conda/dn/bioconda/fragpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/fragpipe
   :alt:   (downloads)
.. |docker_fragpipe| image:: https://quay.io/repository/biocontainers/fragpipe/status
   :target: https://quay.io/repository/biocontainers/fragpipe
.. _`fragpipe/tags`: https://quay.io/repository/biocontainers/fragpipe?tab=tags


.. raw:: html

    <script>
        var package = "fragpipe";
        var versions = ["20.0","20.0","20.0","20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fragpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fragpipe/README.html