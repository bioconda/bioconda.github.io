:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lz4-bin'
.. highlight: bash

lz4-bin
=======

.. conda:recipe:: lz4-bin
   :replaces_section_title:
   :noindex:

   Extremely Fast Compression Application

   :homepage: http://cyan4973.github.io/lz4
   :license: BSD
   :recipe: /`lz4-bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin/meta.yaml>`_

   


.. conda:package:: lz4-bin

   |downloads_lz4-bin| |docker_lz4-bin|

   :versions:
      
      

      ``131-7``,  ``131-6``,  ``131-5``,  ``131-4``,  ``131-3``,  ``131-2``,  ``131-1``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lz4-bin

   and update with::

      mamba update lz4-bin

  To create a new environment, run::

      mamba create --name myenvname lz4-bin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lz4-bin:<tag>

   (see `lz4-bin/tags`_ for valid values for ``<tag>``)


.. |downloads_lz4-bin| image:: https://img.shields.io/conda/dn/bioconda/lz4-bin.svg?style=flat
   :target: https://anaconda.org/bioconda/lz4-bin
   :alt:   (downloads)
.. |docker_lz4-bin| image:: https://quay.io/repository/biocontainers/lz4-bin/status
   :target: https://quay.io/repository/biocontainers/lz4-bin
.. _`lz4-bin/tags`: https://quay.io/repository/biocontainers/lz4-bin?tab=tags


.. raw:: html

    <script>
        var package = "lz4-bin";
        var versions = ["131","131","131","131","131"];
    </script>





Notes
-----
This package is for the lz4 C binary\, while the package in the default channel is \(as of 9\/9\/16\) for the lz4 Python bindings \(hence the \'\-bin\' suffix of this package\)


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lz4-bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lz4-bin/README.html