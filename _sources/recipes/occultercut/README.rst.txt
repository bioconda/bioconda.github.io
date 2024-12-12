:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'occultercut'
.. highlight: bash

occultercut
===========

.. conda:recipe:: occultercut
   :replaces_section_title:
   :noindex:

   A package for measuring the local GC\-content bias in genomes and fungal species

   :homepage: https://sourceforge.net/projects/occultercut
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`occultercut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/occultercut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/occultercut/meta.yaml>`_
   :links: doi: :doi:`10.1093/gbe/evw121`

   


.. conda:package:: occultercut

   |downloads_occultercut| |docker_occultercut|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends gnuplot: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install occultercut

   and update with::

      mamba update occultercut

  To create a new environment, run::

      mamba create --name myenvname occultercut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/occultercut:<tag>

   (see `occultercut/tags`_ for valid values for ``<tag>``)


.. |downloads_occultercut| image:: https://img.shields.io/conda/dn/bioconda/occultercut.svg?style=flat
   :target: https://anaconda.org/bioconda/occultercut
   :alt:   (downloads)
.. |docker_occultercut| image:: https://quay.io/repository/biocontainers/occultercut/status
   :target: https://quay.io/repository/biocontainers/occultercut
.. _`occultercut/tags`: https://quay.io/repository/biocontainers/occultercut?tab=tags


.. raw:: html

    <script>
        var package = "occultercut";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/occultercut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/occultercut/README.html