:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umap'
.. highlight: bash

umap
====

.. conda:recipe:: umap
   :replaces_section_title:
   :noindex:

   Umap and Bismap\: tools for genome and methylome mappability

   :homepage: https://bitbucket.org/hoffmanlab/umap/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`umap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umap/meta.yaml>`_

   


.. conda:package:: umap

   |downloads_umap| |docker_umap|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends argparse: 
   :depends bowtie: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install umap

   and update with::

      mamba update umap

  To create a new environment, run::

      mamba create --name myenvname umap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umap:<tag>

   (see `umap/tags`_ for valid values for ``<tag>``)


.. |downloads_umap| image:: https://img.shields.io/conda/dn/bioconda/umap.svg?style=flat
   :target: https://anaconda.org/bioconda/umap
   :alt:   (downloads)
.. |docker_umap| image:: https://quay.io/repository/biocontainers/umap/status
   :target: https://quay.io/repository/biocontainers/umap
.. _`umap/tags`: https://quay.io/repository/biocontainers/umap?tab=tags


.. raw:: html

    <script>
        var package = "umap";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umap/README.html