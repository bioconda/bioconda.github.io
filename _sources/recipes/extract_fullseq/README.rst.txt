:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_fullseq'
.. highlight: bash

extract_fullseq
===============

.. conda:recipe:: extract_fullseq
   :replaces_section_title:
   :noindex:

   extract\_fullseq is part of BMTagger aka Best Match Tagger\, for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`extract_fullseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fullseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fullseq/meta.yaml>`_

   


.. conda:package:: extract_fullseq

   |downloads_extract_fullseq| |docker_extract_fullseq|

   :versions:
      
      

      ``3.101-5``,  ``3.101-4``,  ``3.101-3``,  ``3.101-2``,  ``3.101-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install extract_fullseq

   and update with::

      mamba update extract_fullseq

  To create a new environment, run::

      mamba create --name myenvname extract_fullseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/extract_fullseq:<tag>

   (see `extract_fullseq/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_fullseq| image:: https://img.shields.io/conda/dn/bioconda/extract_fullseq.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_fullseq
   :alt:   (downloads)
.. |docker_extract_fullseq| image:: https://quay.io/repository/biocontainers/extract_fullseq/status
   :target: https://quay.io/repository/biocontainers/extract_fullseq
.. _`extract_fullseq/tags`: https://quay.io/repository/biocontainers/extract_fullseq?tab=tags


.. raw:: html

    <script>
        var package = "extract_fullseq";
        var versions = ["3.101","3.101","3.101","3.101","3.101"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_fullseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_fullseq/README.html