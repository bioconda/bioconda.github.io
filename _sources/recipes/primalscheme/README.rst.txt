:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primalscheme'
.. highlight: bash

primalscheme
============

.. conda:recipe:: primalscheme
   :replaces_section_title:
   :noindex:

   primalscheme is a tool for designing primer panels for multiplex PCR

   :homepage: https://github.com/aresti/primalscheme
   :license: GPL3 / GPL-3
   :recipe: /`primalscheme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme/meta.yaml>`_
   :links: doi: :doi:`10.1038/nprot.2017.066`

   


.. conda:package:: primalscheme

   |downloads_primalscheme| |docker_primalscheme|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``

      

   
   :depends biopython: ``>=1,<2``
   :depends click: ``>=8.1.3``
   :depends parasail-python: ``>=1.2``
   :depends primer3-py: ``>=0,<1``
   :depends progress: ``>=1.5``
   :depends python: 
   :depends reportlab: ``>=3,<4``
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

      mamba install primalscheme

   and update with::

      mamba update primalscheme

  To create a new environment, run::

      mamba create --name myenvname primalscheme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primalscheme:<tag>

   (see `primalscheme/tags`_ for valid values for ``<tag>``)


.. |downloads_primalscheme| image:: https://img.shields.io/conda/dn/bioconda/primalscheme.svg?style=flat
   :target: https://anaconda.org/bioconda/primalscheme
   :alt:   (downloads)
.. |docker_primalscheme| image:: https://quay.io/repository/biocontainers/primalscheme/status
   :target: https://quay.io/repository/biocontainers/primalscheme
.. _`primalscheme/tags`: https://quay.io/repository/biocontainers/primalscheme?tab=tags


.. raw:: html

    <script>
        var package = "primalscheme";
        var versions = ["1.4.1","1.4.0","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primalscheme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primalscheme/README.html