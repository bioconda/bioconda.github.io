:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_genome_region'
.. highlight: bash

extract_genome_region
=====================

.. conda:recipe:: extract_genome_region
   :replaces_section_title:
   :noindex:

   Given a CSV file of variable information defining the regions of interest\, return a file that contains a fasta\-formatted representation of these regions.

   :homepage: https://github.com/xguse/extract-genome-region
   :license: BSD License
   :recipe: /`extract_genome_region <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region/meta.yaml>`_

   


.. conda:package:: extract_genome_region

   |downloads_extract_genome_region| |docker_extract_genome_region|

   :versions:
      
      

      ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends click: 
   :depends pyfaidx: 
   :depends python: 
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

      mamba install extract_genome_region

   and update with::

      mamba update extract_genome_region

  To create a new environment, run::

      mamba create --name myenvname extract_genome_region

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/extract_genome_region:<tag>

   (see `extract_genome_region/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_genome_region| image:: https://img.shields.io/conda/dn/bioconda/extract_genome_region.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_genome_region
   :alt:   (downloads)
.. |docker_extract_genome_region| image:: https://quay.io/repository/biocontainers/extract_genome_region/status
   :target: https://quay.io/repository/biocontainers/extract_genome_region
.. _`extract_genome_region/tags`: https://quay.io/repository/biocontainers/extract_genome_region?tab=tags


.. raw:: html

    <script>
        var package = "extract_genome_region";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_genome_region/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_genome_region/README.html