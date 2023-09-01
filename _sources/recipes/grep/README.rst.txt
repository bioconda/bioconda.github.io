:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grep'
.. highlight: bash

grep
====

.. conda:recipe:: grep
   :replaces_section_title:
   :noindex:

   Grep searches one or more input files for lines containing a match to a specified pattern

   :homepage: https://www.gnu.org/software/grep/
   :license: GPL
   :recipe: /`grep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grep/meta.yaml>`_

   


.. conda:package:: grep

   |downloads_grep| |docker_grep|

   :versions:
      
      

      ``3.4-4``,  ``3.4-3``,  ``3.4-2``,  ``3.4-1``,  ``3.4-0``,  ``2.14-3``,  ``2.14-2``,  ``2.14-1``,  ``2.14-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends pcre: ``>=8.45,<9.0a0``
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

      mamba install grep

   and update with::

      mamba update grep

  To create a new environment, run::

      mamba create --name myenvname grep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grep:<tag>

   (see `grep/tags`_ for valid values for ``<tag>``)


.. |downloads_grep| image:: https://img.shields.io/conda/dn/bioconda/grep.svg?style=flat
   :target: https://anaconda.org/bioconda/grep
   :alt:   (downloads)
.. |docker_grep| image:: https://quay.io/repository/biocontainers/grep/status
   :target: https://quay.io/repository/biocontainers/grep
.. _`grep/tags`: https://quay.io/repository/biocontainers/grep?tab=tags


.. raw:: html

    <script>
        var package = "grep";
        var versions = ["3.4","3.4","3.4","3.4","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grep/README.html