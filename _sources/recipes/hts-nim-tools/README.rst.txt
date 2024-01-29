:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hts-nim-tools'
.. highlight: bash

hts-nim-tools
=============

.. conda:recipe:: hts-nim-tools
   :replaces_section_title:
   :noindex:

   useful command\-line tools written to show\-case hts\-nim

   :homepage: https://github.com/brentp/hts-nim-tools
   :license: MIT
   :recipe: /`hts-nim-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools/meta.yaml>`_

   


.. conda:package:: hts-nim-tools

   |downloads_hts-nim-tools| |docker_hts-nim-tools|

   :versions:
      
      

      ``0.3.11-0``,  ``0.2.0-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends pcre: ``>=8.44,<9.0a0``
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

      mamba install hts-nim-tools

   and update with::

      mamba update hts-nim-tools

  To create a new environment, run::

      mamba create --name myenvname hts-nim-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hts-nim-tools:<tag>

   (see `hts-nim-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_hts-nim-tools| image:: https://img.shields.io/conda/dn/bioconda/hts-nim-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/hts-nim-tools
   :alt:   (downloads)
.. |docker_hts-nim-tools| image:: https://quay.io/repository/biocontainers/hts-nim-tools/status
   :target: https://quay.io/repository/biocontainers/hts-nim-tools
.. _`hts-nim-tools/tags`: https://quay.io/repository/biocontainers/hts-nim-tools?tab=tags


.. raw:: html

    <script>
        var package = "hts-nim-tools";
        var versions = ["0.3.11","0.2.0","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hts-nim-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hts-nim-tools/README.html