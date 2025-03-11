:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amiga'
.. highlight: bash

amiga
=====

.. conda:recipe:: amiga
   :replaces_section_title:
   :noindex:

   Analysis of Microbial Growth Assays

   :homepage: https://github.com/firasmidani/amiga
   :license: GPL-3.0-or-later
   :recipe: /`amiga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amiga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amiga/meta.yaml>`_

   


.. conda:package:: amiga

   |downloads_amiga| |docker_amiga|

   :versions:
      
      

      ``3.0.3-0``,  ``3.0.2-0``

      

   
   :depends cycler: ``>=0.11.0``
   :depends decorator: ``>=5.1.0``
   :depends gpy: ``>=1.13.2``
   :depends kiwisolver: ``>=1.3.2``
   :depends libgcc: ``>=13``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.3.0``
   :depends paramz: ``>=0.9.5``
   :depends pyparsing: ``>=3.0.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-dateutil: ``>=2.8.2``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pytz: ``>=2021.3``
   :depends scipy: ``>=1.8.0``
   :depends seaborn: ``>=0.11.2``
   :depends six: ``>=1.16.0``
   :depends tabulate: ``>=0.8.8``
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

      mamba install amiga

   and update with::

      mamba update amiga

  To create a new environment, run::

      mamba create --name myenvname amiga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amiga:<tag>

   (see `amiga/tags`_ for valid values for ``<tag>``)


.. |downloads_amiga| image:: https://img.shields.io/conda/dn/bioconda/amiga.svg?style=flat
   :target: https://anaconda.org/bioconda/amiga
   :alt:   (downloads)
.. |docker_amiga| image:: https://quay.io/repository/biocontainers/amiga/status
   :target: https://quay.io/repository/biocontainers/amiga
.. _`amiga/tags`: https://quay.io/repository/biocontainers/amiga?tab=tags


.. raw:: html

    <script>
        var package = "amiga";
        var versions = ["3.0.3","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amiga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amiga/README.html