:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'juicebox_scripts'
.. highlight: bash

juicebox_scripts
================

.. conda:recipe:: juicebox_scripts
   :replaces_section_title:
   :noindex:

   A collection of scripts for working with Hi\-C data\, Juicebox\, and other genomic file formats

   :homepage: https://github.com/phasegenomics/juicebox_scripts
   :license: GNU GPLv3
   :recipe: /`juicebox_scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicebox_scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicebox_scripts/meta.yaml>`_

   


.. conda:package:: juicebox_scripts

   |downloads_juicebox_scripts| |docker_juicebox_scripts|

   :versions:
      
      

      ``0.1.0gita7ae991-0``

      

   
   :depends python: ``>=3.9``
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

      mamba install juicebox_scripts

   and update with::

      mamba update juicebox_scripts

  To create a new environment, run::

      mamba create --name myenvname juicebox_scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/juicebox_scripts:<tag>

   (see `juicebox_scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_juicebox_scripts| image:: https://img.shields.io/conda/dn/bioconda/juicebox_scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/juicebox_scripts
   :alt:   (downloads)
.. |docker_juicebox_scripts| image:: https://quay.io/repository/biocontainers/juicebox_scripts/status
   :target: https://quay.io/repository/biocontainers/juicebox_scripts
.. _`juicebox_scripts/tags`: https://quay.io/repository/biocontainers/juicebox_scripts?tab=tags


.. raw:: html

    <script>
        var package = "juicebox_scripts";
        var versions = ["0.1.0gita7ae991"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/juicebox_scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/juicebox_scripts/README.html