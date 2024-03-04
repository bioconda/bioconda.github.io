:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msfragger'
.. highlight: bash

msfragger
=========

.. conda:recipe:: msfragger
   :replaces_section_title:
   :noindex:

   Ultrafast\, comprehensive peptide identification for mass spectrometry–based proteomics

   :homepage: https://github.com/Nesvilab/MSFragger
   :license: Academic License (https://msfragger.arsci.com/upgrader/MSFragger-LICENSE.pdf)
   :recipe: /`msfragger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msfragger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msfragger/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4256`, doi: :doi:`10.1038/s41467-020-17921-y`, doi: :doi:`10.1038/s41592-020-0967-9`

   MSFragger is an ultrafast database search tool for peptide identification in mass spectrometry\-based proteomics.
   It has demonstrated excellent performance across a wide range of datasets and applications.
   MSFragger is suitable for standard shotgun proteomics analyses as well as large datasets \(including timsTOF PASEF data\)\,
   enzyme unconstrained searches \(e.g.\, peptidome\)\,
   open database searches \(e.g.\, precursor mass tolerance set to hundreds of Daltons\) for identification
   of modified peptides\, and glycopeptide identification \(N\-linked and O\-linked\).

   MSFragger is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/upgrader\/MSFragger\-LICENSE.pdf.



.. conda:package:: msfragger

   |downloads_msfragger| |docker_msfragger|

   :versions:
      
      

      ``4.0-0``

      

   
   :depends mono: ``>=5,<6``
   :depends openjdk: ``>=11``
   :depends python: ``>=3.9``
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

      mamba install msfragger

   and update with::

      mamba update msfragger

  To create a new environment, run::

      mamba create --name myenvname msfragger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msfragger:<tag>

   (see `msfragger/tags`_ for valid values for ``<tag>``)


.. |downloads_msfragger| image:: https://img.shields.io/conda/dn/bioconda/msfragger.svg?style=flat
   :target: https://anaconda.org/bioconda/msfragger
   :alt:   (downloads)
.. |docker_msfragger| image:: https://quay.io/repository/biocontainers/msfragger/status
   :target: https://quay.io/repository/biocontainers/msfragger
.. _`msfragger/tags`: https://quay.io/repository/biocontainers/msfragger?tab=tags


.. raw:: html

    <script>
        var package = "msfragger";
        var versions = ["4.0"];
    </script>





Notes
-----
The \"msfragger\" command runs the MSFragger java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msfragger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msfragger/README.html