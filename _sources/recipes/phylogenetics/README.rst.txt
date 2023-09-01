:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylogenetics'
.. highlight: bash

phylogenetics
=============

.. conda:recipe:: phylogenetics
   :replaces_section_title:
   :noindex:

   Python API for managing a phylogenetics projects.

   :homepage: https://github.com/Zsailer/phylogenetics
   :license: BSD / BSD-3-Clause
   :recipe: /`phylogenetics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenetics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenetics/meta.yaml>`_

   


.. conda:package:: phylogenetics

   |downloads_phylogenetics| |docker_phylogenetics|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends biopython: 
   :depends dendropy: 
   :depends pandas: 
   :depends phylopandas: 
   :depends phylovega: 
   :depends pyasr: 
   :depends python: ``>=3.6``
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

      mamba install phylogenetics

   and update with::

      mamba update phylogenetics

  To create a new environment, run::

      mamba create --name myenvname phylogenetics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylogenetics:<tag>

   (see `phylogenetics/tags`_ for valid values for ``<tag>``)


.. |downloads_phylogenetics| image:: https://img.shields.io/conda/dn/bioconda/phylogenetics.svg?style=flat
   :target: https://anaconda.org/bioconda/phylogenetics
   :alt:   (downloads)
.. |docker_phylogenetics| image:: https://quay.io/repository/biocontainers/phylogenetics/status
   :target: https://quay.io/repository/biocontainers/phylogenetics
.. _`phylogenetics/tags`: https://quay.io/repository/biocontainers/phylogenetics?tab=tags


.. raw:: html

    <script>
        var package = "phylogenetics";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylogenetics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylogenetics/README.html