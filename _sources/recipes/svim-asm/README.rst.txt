:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svim-asm'
.. highlight: bash

svim-asm
========

.. conda:recipe:: svim-asm
   :replaces_section_title:
   :noindex:

   SVIM\-asm is a fork of the SV caller SVIM for genome\-genome alignments.

   :homepage: https://github.com/eldariont/svim-asm
   :license: GPL / GPL-3.0
   :recipe: /`svim-asm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm/meta.yaml>`_

   


.. conda:package:: svim-asm

   |downloads_svim-asm| |docker_svim-asm|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends scipy: 
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

      mamba install svim-asm

   and update with::

      mamba update svim-asm

  To create a new environment, run::

      mamba create --name myenvname svim-asm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svim-asm:<tag>

   (see `svim-asm/tags`_ for valid values for ``<tag>``)


.. |downloads_svim-asm| image:: https://img.shields.io/conda/dn/bioconda/svim-asm.svg?style=flat
   :target: https://anaconda.org/bioconda/svim-asm
   :alt:   (downloads)
.. |docker_svim-asm| image:: https://quay.io/repository/biocontainers/svim-asm/status
   :target: https://quay.io/repository/biocontainers/svim-asm
.. _`svim-asm/tags`: https://quay.io/repository/biocontainers/svim-asm?tab=tags


.. raw:: html

    <script>
        var package = "svim-asm";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim-asm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim-asm/README.html