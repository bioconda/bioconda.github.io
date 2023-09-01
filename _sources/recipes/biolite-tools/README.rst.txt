:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biolite-tools'
.. highlight: bash

biolite-tools
=============

.. conda:recipe:: biolite-tools
   :replaces_section_title:
   :noindex:

   C\+\+ tools for biolite\, a lightweight bioinformatics framework with automated tracking of diagnostics and provenance.

   :homepage: https://bitbucket.org/caseywdunn/biolite
   :license: GPLv3
   :recipe: /`biolite-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite-tools/meta.yaml>`_

   


.. conda:package:: biolite-tools

   |downloads_biolite-tools| |docker_biolite-tools|

   :versions:
      
      

      ``0.4.0-8``,  ``0.4.0-7``,  ``0.4.0-6``,  ``0.4.0-5``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install biolite-tools

   and update with::

      mamba update biolite-tools

  To create a new environment, run::

      mamba create --name myenvname biolite-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biolite-tools:<tag>

   (see `biolite-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_biolite-tools| image:: https://img.shields.io/conda/dn/bioconda/biolite-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/biolite-tools
   :alt:   (downloads)
.. |docker_biolite-tools| image:: https://quay.io/repository/biocontainers/biolite-tools/status
   :target: https://quay.io/repository/biocontainers/biolite-tools
.. _`biolite-tools/tags`: https://quay.io/repository/biocontainers/biolite-tools?tab=tags


.. raw:: html

    <script>
        var package = "biolite-tools";
        var versions = ["0.4.0","0.4.0","0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biolite-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biolite-tools/README.html