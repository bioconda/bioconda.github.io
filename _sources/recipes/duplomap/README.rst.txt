:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplomap'
.. highlight: bash

duplomap
========

.. conda:recipe:: duplomap
   :replaces_section_title:
   :noindex:

   Tool designed to improve precision and recall of long\-read alignments in segmental duplications.

   :homepage: https://gitlab.com/tprodanov/duplomap
   :license: MIT
   :recipe: /`duplomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap/meta.yaml>`_

   


.. conda:package:: duplomap

   |downloads_duplomap| |docker_duplomap|

   :versions:
      
      

      ``0.9.5-3``,  ``0.9.5-2``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends samtools: 
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

      mamba install duplomap

   and update with::

      mamba update duplomap

  To create a new environment, run::

      mamba create --name myenvname duplomap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/duplomap:<tag>

   (see `duplomap/tags`_ for valid values for ``<tag>``)


.. |downloads_duplomap| image:: https://img.shields.io/conda/dn/bioconda/duplomap.svg?style=flat
   :target: https://anaconda.org/bioconda/duplomap
   :alt:   (downloads)
.. |docker_duplomap| image:: https://quay.io/repository/biocontainers/duplomap/status
   :target: https://quay.io/repository/biocontainers/duplomap
.. _`duplomap/tags`: https://quay.io/repository/biocontainers/duplomap?tab=tags


.. raw:: html

    <script>
        var package = "duplomap";
        var versions = ["0.9.5","0.9.5","0.9.5","0.9.5","0.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplomap/README.html