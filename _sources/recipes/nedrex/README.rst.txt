:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nedrex'
.. highlight: bash

nedrex
======

.. conda:recipe:: nedrex
   :replaces_section_title:
   :noindex:

   A Python library for interfacing with the NeDRex API

   :homepage: https://pypi.org/project/nedrex/
   :license: MIT
   :recipe: /`nedrex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedrex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedrex/meta.yaml>`_

   


.. conda:package:: nedrex

   |downloads_nedrex| |docker_nedrex|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends attrs: ``>=21.4.0``
   :depends cachetools: ``>=4.2.4``
   :depends more-itertools: ``>=8.13.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.27.1``
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

      mamba install nedrex

   and update with::

      mamba update nedrex

  To create a new environment, run::

      mamba create --name myenvname nedrex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nedrex:<tag>

   (see `nedrex/tags`_ for valid values for ``<tag>``)


.. |downloads_nedrex| image:: https://img.shields.io/conda/dn/bioconda/nedrex.svg?style=flat
   :target: https://anaconda.org/bioconda/nedrex
   :alt:   (downloads)
.. |docker_nedrex| image:: https://quay.io/repository/biocontainers/nedrex/status
   :target: https://quay.io/repository/biocontainers/nedrex
.. _`nedrex/tags`: https://quay.io/repository/biocontainers/nedrex?tab=tags


.. raw:: html

    <script>
        var package = "nedrex";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nedrex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nedrex/README.html