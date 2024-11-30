:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophasm'
.. highlight: bash

prophasm
========

.. conda:recipe:: prophasm
   :replaces_section_title:
   :noindex:

   ProPhasm – ProPhyle Assembler. Compressing k\-mer sets via assembling contigs.

   :homepage: https://github.com/prophyle/prophasm
   :license: MIT
   :recipe: /`prophasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophasm/meta.yaml>`_

   


.. conda:package:: prophasm

   |downloads_prophasm| |docker_prophasm|

   :versions:
      
      

      ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install prophasm

   and update with::

      mamba update prophasm

  To create a new environment, run::

      mamba create --name myenvname prophasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prophasm:<tag>

   (see `prophasm/tags`_ for valid values for ``<tag>``)


.. |downloads_prophasm| image:: https://img.shields.io/conda/dn/bioconda/prophasm.svg?style=flat
   :target: https://anaconda.org/bioconda/prophasm
   :alt:   (downloads)
.. |docker_prophasm| image:: https://quay.io/repository/biocontainers/prophasm/status
   :target: https://quay.io/repository/biocontainers/prophasm
.. _`prophasm/tags`: https://quay.io/repository/biocontainers/prophasm?tab=tags


.. raw:: html

    <script>
        var package = "prophasm";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophasm/README.html