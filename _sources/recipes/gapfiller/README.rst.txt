:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapfiller'
.. highlight: bash

gapfiller
=========

.. conda:recipe:: gapfiller
   :replaces_section_title:
   :noindex:

   GapFiller is a seed\-and\-extend local assembler to fill the gap within paired reads.

   :homepage: https://sourceforge.net/projects/gapfiller
   :license: GPL / GPLv3
   :recipe: /`gapfiller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapfiller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapfiller/meta.yaml>`_

   


.. conda:package:: gapfiller

   |downloads_gapfiller| |docker_gapfiller|

   :versions:
      
      

      ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install gapfiller

   and update with::

      mamba update gapfiller

  To create a new environment, run::

      mamba create --name myenvname gapfiller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gapfiller:<tag>

   (see `gapfiller/tags`_ for valid values for ``<tag>``)


.. |downloads_gapfiller| image:: https://img.shields.io/conda/dn/bioconda/gapfiller.svg?style=flat
   :target: https://anaconda.org/bioconda/gapfiller
   :alt:   (downloads)
.. |docker_gapfiller| image:: https://quay.io/repository/biocontainers/gapfiller/status
   :target: https://quay.io/repository/biocontainers/gapfiller
.. _`gapfiller/tags`: https://quay.io/repository/biocontainers/gapfiller?tab=tags


.. raw:: html

    <script>
        var package = "gapfiller";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapfiller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapfiller/README.html