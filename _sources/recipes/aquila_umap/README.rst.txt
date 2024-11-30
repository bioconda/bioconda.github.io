:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquila_umap'
.. highlight: bash

aquila_umap
===========

.. conda:recipe:: aquila_umap
   :replaces_section_title:
   :noindex:

   This is a program to generate Umap for Aquila diploid assembly.

   :homepage: https://github.com/maiziex/Aquila_Umap
   :license: MIT
   :recipe: /`aquila_umap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_umap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_umap/meta.yaml>`_

   


.. conda:package:: aquila_umap

   |downloads_aquila_umap| |docker_aquila_umap|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bowtie2: 
   :depends pysam: 
   :depends python: 
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

      mamba install aquila_umap

   and update with::

      mamba update aquila_umap

  To create a new environment, run::

      mamba create --name myenvname aquila_umap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aquila_umap:<tag>

   (see `aquila_umap/tags`_ for valid values for ``<tag>``)


.. |downloads_aquila_umap| image:: https://img.shields.io/conda/dn/bioconda/aquila_umap.svg?style=flat
   :target: https://anaconda.org/bioconda/aquila_umap
   :alt:   (downloads)
.. |docker_aquila_umap| image:: https://quay.io/repository/biocontainers/aquila_umap/status
   :target: https://quay.io/repository/biocontainers/aquila_umap
.. _`aquila_umap/tags`: https://quay.io/repository/biocontainers/aquila_umap?tab=tags


.. raw:: html

    <script>
        var package = "aquila_umap";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquila_umap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquila_umap/README.html