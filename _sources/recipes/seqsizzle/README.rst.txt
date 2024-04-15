:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsizzle'
.. highlight: bash

seqsizzle
=========

.. conda:recipe:: seqsizzle
   :replaces_section_title:
   :noindex:

   A pager for viewing FASTQ files with fuzzy adaptor matching and coloring.

   :homepage: https://github.com/ChangqingW/SeqSizzle
   :license: AGPL-3.0-or-later
   :recipe: /`seqsizzle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsizzle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsizzle/meta.yaml>`_

   


.. conda:package:: seqsizzle

   |downloads_seqsizzle| |docker_seqsizzle|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install seqsizzle

   and update with::

      mamba update seqsizzle

  To create a new environment, run::

      mamba create --name myenvname seqsizzle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqsizzle:<tag>

   (see `seqsizzle/tags`_ for valid values for ``<tag>``)


.. |downloads_seqsizzle| image:: https://img.shields.io/conda/dn/bioconda/seqsizzle.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsizzle
   :alt:   (downloads)
.. |docker_seqsizzle| image:: https://quay.io/repository/biocontainers/seqsizzle/status
   :target: https://quay.io/repository/biocontainers/seqsizzle
.. _`seqsizzle/tags`: https://quay.io/repository/biocontainers/seqsizzle?tab=tags


.. raw:: html

    <script>
        var package = "seqsizzle";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsizzle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsizzle/README.html