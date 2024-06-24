:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptrimmer'
.. highlight: bash

ptrimmer
========

.. conda:recipe:: ptrimmer
   :replaces_section_title:
   :noindex:

   Used to trim off the primer sequence from mutiplex amplicon sequencing

   :homepage: https://github.com/DMU-lilab/pTrimmer
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ptrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-2854-x`

   


.. conda:package:: ptrimmer

   |downloads_ptrimmer| |docker_ptrimmer|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.4.20240210,<7.0a0``
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

      mamba install ptrimmer

   and update with::

      mamba update ptrimmer

  To create a new environment, run::

      mamba create --name myenvname ptrimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ptrimmer:<tag>

   (see `ptrimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_ptrimmer| image:: https://img.shields.io/conda/dn/bioconda/ptrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/ptrimmer
   :alt:   (downloads)
.. |docker_ptrimmer| image:: https://quay.io/repository/biocontainers/ptrimmer/status
   :target: https://quay.io/repository/biocontainers/ptrimmer
.. _`ptrimmer/tags`: https://quay.io/repository/biocontainers/ptrimmer?tab=tags


.. raw:: html

    <script>
        var package = "ptrimmer";
        var versions = ["1.4.0","1.3.3","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptrimmer/README.html