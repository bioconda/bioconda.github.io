:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isaac4'
.. highlight: bash

isaac4
======

.. conda:recipe:: isaac4
   :replaces_section_title:
   :noindex:

   Ultra\-fast whole\-genome alignment for Illumina sequencing platforms.

   :homepage: https://github.com/Illumina/Isaac4
   :license: GPL-3.0-only
   :recipe: /`isaac4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isaac4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isaac4/meta.yaml>`_
   :links: biotools: :biotools:`isaac`, doi: :doi:`10.1093/bioinformatics/btt314`

   


.. conda:package:: isaac4

   |downloads_isaac4| |docker_isaac4|

   :versions:
      
      

      ``04.18.11.09-0``

      

   
   :depends gnuplot: ``>=4.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends libxml2: ``>=2.9.10,<2.10.0a0``
   :depends libxslt: ``>=1.1.31``
   :depends libxslt: ``>=1.1.33,<2.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install isaac4

   and update with::

      mamba update isaac4

  To create a new environment, run::

      mamba create --name myenvname isaac4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isaac4:<tag>

   (see `isaac4/tags`_ for valid values for ``<tag>``)


.. |downloads_isaac4| image:: https://img.shields.io/conda/dn/bioconda/isaac4.svg?style=flat
   :target: https://anaconda.org/bioconda/isaac4
   :alt:   (downloads)
.. |docker_isaac4| image:: https://quay.io/repository/biocontainers/isaac4/status
   :target: https://quay.io/repository/biocontainers/isaac4
.. _`isaac4/tags`: https://quay.io/repository/biocontainers/isaac4?tab=tags


.. raw:: html

    <script>
        var package = "isaac4";
        var versions = ["04.18.11.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isaac4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isaac4/README.html