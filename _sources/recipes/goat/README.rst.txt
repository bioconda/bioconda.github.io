:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goat'
.. highlight: bash

goat
====

.. conda:recipe:: goat
   :replaces_section_title:
   :noindex:

   Query metadata for any taxon across the tree of life.


   :homepage: https://github.com/genomehubs/goat-cli
   :license: MIT
   :recipe: /`goat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goat/meta.yaml>`_

   A command line interface for the GoaT API\, which is a collection of datasets to decorate the genomic tree of life.


.. conda:package:: goat

   |downloads_goat| |docker_goat|

   :versions:
      
      

      ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.0-0``,  ``0.1.55-0``,  ``0.1.54-0``,  ``0.1.51-1``,  ``0.1.51-0``,  ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openssl: ``>=3.1.0,<4.0a0``
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

      mamba install goat

   and update with::

      mamba update goat

  To create a new environment, run::

      mamba create --name myenvname goat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goat:<tag>

   (see `goat/tags`_ for valid values for ``<tag>``)


.. |downloads_goat| image:: https://img.shields.io/conda/dn/bioconda/goat.svg?style=flat
   :target: https://anaconda.org/bioconda/goat
   :alt:   (downloads)
.. |docker_goat| image:: https://quay.io/repository/biocontainers/goat/status
   :target: https://quay.io/repository/biocontainers/goat
.. _`goat/tags`: https://quay.io/repository/biocontainers/goat?tab=tags


.. raw:: html

    <script>
        var package = "goat";
        var versions = ["0.2.5","0.2.5","0.2.5","0.2.0","0.1.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goat/README.html