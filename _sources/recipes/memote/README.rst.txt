:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'memote'
.. highlight: bash

memote
======

.. conda:recipe:: memote
   :replaces_section_title:
   :noindex:

   the genome\-scale metabolic model test suite

   :homepage: https://memote.readthedocs.io/
   :license: Apache-2.0
   :recipe: /`memote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memote/meta.yaml>`_

   


.. conda:package:: memote

   |downloads_memote| |docker_memote|

   :versions:
      
      

      

      

   
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

      mamba install memote

   and update with::

      mamba update memote

  To create a new environment, run::

      mamba create --name myenvname memote

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/memote:<tag>

   (see `memote/tags`_ for valid values for ``<tag>``)


.. |downloads_memote| image:: https://img.shields.io/conda/dn/bioconda/memote.svg?style=flat
   :target: https://anaconda.org/bioconda/memote
   :alt:   (downloads)
.. |docker_memote| image:: https://quay.io/repository/biocontainers/memote/status
   :target: https://quay.io/repository/biocontainers/memote
.. _`memote/tags`: https://quay.io/repository/biocontainers/memote?tab=tags


.. raw:: html

    <script>
        var package = "memote";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/memote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/memote/README.html