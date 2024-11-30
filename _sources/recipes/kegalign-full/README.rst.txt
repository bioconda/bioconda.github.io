:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kegalign-full'
.. highlight: bash

kegalign-full
=============

.. conda:recipe:: kegalign-full
   :replaces_section_title:
   :noindex:

   KegAlign\: A Scalable GPU\-Based Whole Genome Aligner

   :homepage: https://github.com/galaxyproject/KegAlign
   :documentation: https://github.com/galaxyproject/KegAlign/blob/main/README.md
   
   :license: `MIT / MIT <https://github.com/galaxyproject/KegAlign/blob/main/LICENSE>`_
   :recipe: /`kegalign-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegalign-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegalign-full/meta.yaml>`_

   KegAlign is a Scalable GPU System for Pairwise Whole Genome
   Alignments based on LASTZ\'s seed\-filter\-extend paradigm.



.. conda:package:: kegalign-full

   |downloads_kegalign-full| |docker_kegalign-full|

   :versions:
      
      

      ``0.1.2.7-0``

      

   
   :depends kegalign: ``0.1.2.7.*``
   :depends lastz: 
   :depends mbuffer: 
   :depends samtools: 
   :depends ucsc-fatotwobit: 
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

      mamba install kegalign-full

   and update with::

      mamba update kegalign-full

  To create a new environment, run::

      mamba create --name myenvname kegalign-full

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kegalign-full:<tag>

   (see `kegalign-full/tags`_ for valid values for ``<tag>``)


.. |downloads_kegalign-full| image:: https://img.shields.io/conda/dn/bioconda/kegalign-full.svg?style=flat
   :target: https://anaconda.org/bioconda/kegalign-full
   :alt:   (downloads)
.. |docker_kegalign-full| image:: https://quay.io/repository/biocontainers/kegalign-full/status
   :target: https://quay.io/repository/biocontainers/kegalign-full
.. _`kegalign-full/tags`: https://quay.io/repository/biocontainers/kegalign-full?tab=tags


.. raw:: html

    <script>
        var package = "kegalign-full";
        var versions = ["0.1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kegalign-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kegalign-full/README.html