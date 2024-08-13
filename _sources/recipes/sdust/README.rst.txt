:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdust'
.. highlight: bash

sdust
=====

.. conda:recipe:: sdust
   :replaces_section_title:
   :noindex:

   Symmetric DUST for finding low\-complexity regions in DNA sequences.

   :homepage: https://github.com/lh3/sdust
   :license: Unknown
   :recipe: /`sdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdust/meta.yaml>`_

   


.. conda:package:: sdust

   |downloads_sdust| |docker_sdust|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install sdust

   and update with::

      mamba update sdust

  To create a new environment, run::

      mamba create --name myenvname sdust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sdust:<tag>

   (see `sdust/tags`_ for valid values for ``<tag>``)


.. |downloads_sdust| image:: https://img.shields.io/conda/dn/bioconda/sdust.svg?style=flat
   :target: https://anaconda.org/bioconda/sdust
   :alt:   (downloads)
.. |docker_sdust| image:: https://quay.io/repository/biocontainers/sdust/status
   :target: https://quay.io/repository/biocontainers/sdust
.. _`sdust/tags`: https://quay.io/repository/biocontainers/sdust?tab=tags


.. raw:: html

    <script>
        var package = "sdust";
        var versions = ["0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdust/README.html