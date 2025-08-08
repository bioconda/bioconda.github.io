:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viloca'
.. highlight: bash

viloca
======

.. conda:recipe:: viloca
   :replaces_section_title:
   :noindex:

   VILOCA is a tool to analyse short\- and long\-read sequencing viral samples. It provides mutation calls and local haplotypes.

   :homepage: https://github.com/cbg-ethz/VILOCA
   :documentation: https://github.com/cbg-ethz/VILOCA/README.md
   
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`viloca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viloca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viloca/meta.yaml>`_

   


.. conda:package:: viloca

   |downloads_viloca| |docker_viloca|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``1.79.*``
   :depends libshorah: ``1.99.4.*``
   :depends numpy: ``>=1.21,<2``
   :depends pandas: ``>=1.3,<3``
   :depends pysam: ``>=0.22,<0.23``
   :depends python: ``>=3.10``
   :depends scipy: ``>=1.7,<2``
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

      mamba install viloca

   and update with::

      mamba update viloca

  To create a new environment, run::

      mamba create --name myenvname viloca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viloca:<tag>

   (see `viloca/tags`_ for valid values for ``<tag>``)


.. |downloads_viloca| image:: https://img.shields.io/conda/dn/bioconda/viloca.svg?style=flat
   :target: https://anaconda.org/bioconda/viloca
   :alt:   (downloads)
.. |docker_viloca| image:: https://quay.io/repository/biocontainers/viloca/status
   :target: https://quay.io/repository/biocontainers/viloca
.. _`viloca/tags`: https://quay.io/repository/biocontainers/viloca?tab=tags


.. raw:: html

    <script>
        var package = "viloca";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viloca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viloca/README.html