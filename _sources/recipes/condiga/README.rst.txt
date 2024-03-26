:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'condiga'
.. highlight: bash

condiga
=======

.. conda:recipe:: condiga
   :replaces_section_title:
   :noindex:

   ConDiGA\: Contigs Directed Gene Annotation for accurate protein sequence database construction in metaproteomics

   :homepage: https://github.com/metagentools/ConDiGA
   :license: MIT / MIT
   :recipe: /`condiga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/condiga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/condiga/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.04.19.537311`

   ConDiGA is a taxonomic annotation pipeline for metagenomic data to construct accurate protein sequence databases for deep metaproteomic coverage.



.. conda:package:: condiga

   |downloads_condiga| |docker_condiga|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends minimap2: 
   :depends python: ``>=3.8``
   :depends taxonkit: 
   :depends tqdm: 
   :depends xlsxwriter: 
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

      mamba install condiga

   and update with::

      mamba update condiga

  To create a new environment, run::

      mamba create --name myenvname condiga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/condiga:<tag>

   (see `condiga/tags`_ for valid values for ``<tag>``)


.. |downloads_condiga| image:: https://img.shields.io/conda/dn/bioconda/condiga.svg?style=flat
   :target: https://anaconda.org/bioconda/condiga
   :alt:   (downloads)
.. |docker_condiga| image:: https://quay.io/repository/biocontainers/condiga/status
   :target: https://quay.io/repository/biocontainers/condiga
.. _`condiga/tags`: https://quay.io/repository/biocontainers/condiga?tab=tags


.. raw:: html

    <script>
        var package = "condiga";
        var versions = ["0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/condiga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/condiga/README.html