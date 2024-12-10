:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wipertools'
.. highlight: bash

wipertools
==========

.. conda:recipe:: wipertools
   :replaces_section_title:
   :noindex:

   A suite of programs that drop or fix pesky lines in FASTQ files and that split FASTQ files into chunks or merge them.

   :homepage: https://github.com/mazzalab/fastqwiper
   :license: GPL / GPL-2.0-or-later
   :recipe: /`wipertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wipertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wipertools/meta.yaml>`_

   


.. conda:package:: wipertools

   |downloads_wipertools| |docker_wipertools|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends coreutils: ``>=8``
   :depends python: ``>=3.10``
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

      mamba install wipertools

   and update with::

      mamba update wipertools

  To create a new environment, run::

      mamba create --name myenvname wipertools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wipertools:<tag>

   (see `wipertools/tags`_ for valid values for ``<tag>``)


.. |downloads_wipertools| image:: https://img.shields.io/conda/dn/bioconda/wipertools.svg?style=flat
   :target: https://anaconda.org/bioconda/wipertools
   :alt:   (downloads)
.. |docker_wipertools| image:: https://quay.io/repository/biocontainers/wipertools/status
   :target: https://quay.io/repository/biocontainers/wipertools
.. _`wipertools/tags`: https://quay.io/repository/biocontainers/wipertools?tab=tags


.. raw:: html

    <script>
        var package = "wipertools";
        var versions = ["1.1.3","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wipertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wipertools/README.html