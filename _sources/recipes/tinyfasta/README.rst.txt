:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinyfasta'
.. highlight: bash

tinyfasta
=========

.. conda:recipe:: tinyfasta
   :replaces_section_title:
   :noindex:

   Tiny Python package\, with no external dependencies\, for parsing FASTA sequence files.

   :homepage: https://github.com/tjelvar-olsson/tinyfasta
   :license: MIT
   :recipe: /`tinyfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyfasta/meta.yaml>`_

   


.. conda:package:: tinyfasta

   |downloads_tinyfasta| |docker_tinyfasta|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: 
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

      mamba install tinyfasta

   and update with::

      mamba update tinyfasta

  To create a new environment, run::

      mamba create --name myenvname tinyfasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tinyfasta:<tag>

   (see `tinyfasta/tags`_ for valid values for ``<tag>``)


.. |downloads_tinyfasta| image:: https://img.shields.io/conda/dn/bioconda/tinyfasta.svg?style=flat
   :target: https://anaconda.org/bioconda/tinyfasta
   :alt:   (downloads)
.. |docker_tinyfasta| image:: https://quay.io/repository/biocontainers/tinyfasta/status
   :target: https://quay.io/repository/biocontainers/tinyfasta
.. _`tinyfasta/tags`: https://quay.io/repository/biocontainers/tinyfasta?tab=tags


.. raw:: html

    <script>
        var package = "tinyfasta";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinyfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinyfasta/README.html