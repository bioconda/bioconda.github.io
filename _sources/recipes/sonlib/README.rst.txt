:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonlib'
.. highlight: bash

sonlib
======

.. conda:recipe:: sonlib
   :replaces_section_title:
   :noindex:

   Small general purpose library for C and Python with focus on bioinformatics.

   :homepage: https://github.com/ComparativeGenomicsToolkit/sonLib
   :license: MIT
   :recipe: /`sonlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonlib/meta.yaml>`_

   


.. conda:package:: sonlib

   |downloads_sonlib| |docker_sonlib|

   :versions:
      
      

      ``2.0.dev88-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends networkx: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends quicktree: ``>=2.5,<3.0a0``
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

      mamba install sonlib

   and update with::

      mamba update sonlib

  To create a new environment, run::

      mamba create --name myenvname sonlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sonlib:<tag>

   (see `sonlib/tags`_ for valid values for ``<tag>``)


.. |downloads_sonlib| image:: https://img.shields.io/conda/dn/bioconda/sonlib.svg?style=flat
   :target: https://anaconda.org/bioconda/sonlib
   :alt:   (downloads)
.. |docker_sonlib| image:: https://quay.io/repository/biocontainers/sonlib/status
   :target: https://quay.io/repository/biocontainers/sonlib
.. _`sonlib/tags`: https://quay.io/repository/biocontainers/sonlib?tab=tags


.. raw:: html

    <script>
        var package = "sonlib";
        var versions = ["2.0.dev88","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonlib/README.html