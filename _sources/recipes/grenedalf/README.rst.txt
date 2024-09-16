:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grenedalf'
.. highlight: bash

grenedalf
=========

.. conda:recipe:: grenedalf
   :replaces_section_title:
   :noindex:

   Toolkit for Population Genetic Statistics from Pool\-Sequenced Samples\, e.g.\, in Evolve and Resequence experiments

   :homepage: https://github.com/lczech/grenedalf
   :documentation: https://github.com/lczech/grenedalf/wiki
   
   :license: GPL-3.0-only
   :recipe: /`grenedalf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grenedalf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grenedalf/meta.yaml>`_
   :links: arXiv: :arXiv:`2306.11622`

   grenedalf is a collection of commands for working with population genetic data\, in particular from pool sequencing.
   Its main focus are statistical analyses such as Tajima\'s D and Fst. The statistics follow the approaches of PoPoolation
   and PoPoolation2\, as well as poolfstat and npstat. However\, compared to those\, grenedalf is significantly more scalable\,
   more user friendly\, and offers more settings and input file formats.



.. conda:package:: grenedalf

   |downloads_grenedalf| |docker_grenedalf|

   :versions:
      
      

      ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install grenedalf

   and update with::

      mamba update grenedalf

  To create a new environment, run::

      mamba create --name myenvname grenedalf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grenedalf:<tag>

   (see `grenedalf/tags`_ for valid values for ``<tag>``)


.. |downloads_grenedalf| image:: https://img.shields.io/conda/dn/bioconda/grenedalf.svg?style=flat
   :target: https://anaconda.org/bioconda/grenedalf
   :alt:   (downloads)
.. |docker_grenedalf| image:: https://quay.io/repository/biocontainers/grenedalf/status
   :target: https://quay.io/repository/biocontainers/grenedalf
.. _`grenedalf/tags`: https://quay.io/repository/biocontainers/grenedalf?tab=tags


.. raw:: html

    <script>
        var package = "grenedalf";
        var versions = ["0.6.2","0.6.1","0.6.0","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grenedalf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grenedalf/README.html