:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenza-utils'
.. highlight: bash

sequenza-utils
==============

.. conda:recipe:: sequenza-utils
   :replaces_section_title:
   :noindex:

   Analysis of cancer sequencing samples\, utilities for the R package sequenza

   :homepage: http://sequenza-utils.readthedocs.org
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`sequenza-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils/meta.yaml>`_

   


.. conda:package:: sequenza-utils

   |downloads_sequenza-utils| |docker_sequenza-utils|

   :versions:
      
      

      ``3.0.0-7``,  ``3.0.0-6``,  ``3.0.0-5``,  ``3.0.0-4``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.9999b0-0``

      

   
   :depends htslib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
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

      mamba install sequenza-utils

   and update with::

      mamba update sequenza-utils

  To create a new environment, run::

      mamba create --name myenvname sequenza-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequenza-utils:<tag>

   (see `sequenza-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_sequenza-utils| image:: https://img.shields.io/conda/dn/bioconda/sequenza-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenza-utils
   :alt:   (downloads)
.. |docker_sequenza-utils| image:: https://quay.io/repository/biocontainers/sequenza-utils/status
   :target: https://quay.io/repository/biocontainers/sequenza-utils
.. _`sequenza-utils/tags`: https://quay.io/repository/biocontainers/sequenza-utils?tab=tags


.. raw:: html

    <script>
        var package = "sequenza-utils";
        var versions = ["3.0.0","3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenza-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenza-utils/README.html