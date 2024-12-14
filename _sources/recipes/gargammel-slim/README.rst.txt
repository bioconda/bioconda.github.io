:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gargammel-slim'
.. highlight: bash

gargammel-slim
==============

.. conda:recipe:: gargammel-slim
   :replaces_section_title:
   :noindex:

   Tool for simulating ancient DNA datasets

   :homepage: https://github.com/grenaud/gargammel
   :license: GPL-3.0-only
   :recipe: /`gargammel-slim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim/meta.yaml>`_

   This a stripped version of Gargammel that only builds the programs 
   fragSim\, deamSim and adptSim. For a full Gargammel installation
   look at the gargammel package



.. conda:package:: gargammel-slim

   |downloads_gargammel-slim| |docker_gargammel-slim|

   :versions:
      
      

      ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends bamtools: ``>=2.5.2,<2.6.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install gargammel-slim

   and update with::

      mamba update gargammel-slim

  To create a new environment, run::

      mamba create --name myenvname gargammel-slim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gargammel-slim:<tag>

   (see `gargammel-slim/tags`_ for valid values for ``<tag>``)


.. |downloads_gargammel-slim| image:: https://img.shields.io/conda/dn/bioconda/gargammel-slim.svg?style=flat
   :target: https://anaconda.org/bioconda/gargammel-slim
   :alt:   (downloads)
.. |docker_gargammel-slim| image:: https://quay.io/repository/biocontainers/gargammel-slim/status
   :target: https://quay.io/repository/biocontainers/gargammel-slim
.. _`gargammel-slim/tags`: https://quay.io/repository/biocontainers/gargammel-slim?tab=tags


.. raw:: html

    <script>
        var package = "gargammel-slim";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gargammel-slim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gargammel-slim/README.html