:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yasma'
.. highlight: bash

yasma
=====

.. conda:recipe:: yasma
   :replaces_section_title:
   :noindex:

   Small RNA annotation suite

   :homepage: https://github.com/NateyJay/YASMA
   :license: GPL-3.0-only
   :recipe: /`yasma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yasma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yasma/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.csbj.2025.05.045`

   This is a fully integrated pipeline for analysis of small RNAs based on short\-read sequence data\, focused on its annotation tool \(YASMA\-tradeoff\). This tool produces accurate sRNA annotations in diverse species and library qualities\, built specifically for dealing with samples with higher noise.



.. conda:package:: yasma

   |downloads_yasma| |docker_yasma|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bowtie: 
   :depends click: 
   :depends click-option-group: 
   :depends cutadapt: 
   :depends levenshtein: 
   :depends numpy: 
   :depends pprintpp: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.12``
   :depends sra-tools: 
   :depends viennarna: 
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

      mamba install yasma

   and update with::

      mamba update yasma

  To create a new environment, run::

      mamba create --name myenvname yasma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yasma:<tag>

   (see `yasma/tags`_ for valid values for ``<tag>``)


.. |downloads_yasma| image:: https://img.shields.io/conda/dn/bioconda/yasma.svg?style=flat
   :target: https://anaconda.org/bioconda/yasma
   :alt:   (downloads)
.. |docker_yasma| image:: https://quay.io/repository/biocontainers/yasma/status
   :target: https://quay.io/repository/biocontainers/yasma
.. _`yasma/tags`: https://quay.io/repository/biocontainers/yasma?tab=tags


.. raw:: html

    <script>
        var package = "yasma";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yasma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yasma/README.html