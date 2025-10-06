:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alloshp'
.. highlight: bash

alloshp
=======

.. conda:recipe:: alloshp
   :replaces_section_title:
   :noindex:

   From mapped reads to Single Homeologous Polymorphisms \(SHPs\)\: pipeline for phylogenetic studies of allopolyploids

   :homepage: https://github.com/eead-csic-compbio/AlloSHP
   :license: APACHE / Apache-2.0
   :recipe: /`alloshp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alloshp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alloshp/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.07.17.665301`

   This 3\-step protocol computes Whole Genome Alignments \(WGA\) to discover Single Homeologous Polymorphisms \(SHPs\) out of reads mapped to concatenated genome sequeces. It requires FASTA and VCF input files and produces multiple sequence alignments of subgenomes that make up allopolyploids.


.. conda:package:: alloshp

   |downloads_alloshp| |docker_alloshp|

   :versions:
      
      

      ``2025.09.12-0``,  ``2025.09.08-0``,  ``2025.09.08d-0``

      

   
   :depends bzip2: 
   :depends coreutils: 
   :depends gnuplot: 
   :depends grep: 
   :depends gsalign: 
   :depends gzip: 
   :depends libgcc: ``>=13``
   :depends make: 
   :depends perl: 
   :depends perl-db_file: 
   :depends red: 
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

      mamba install alloshp

   and update with::

      mamba update alloshp

  To create a new environment, run::

      mamba create --name myenvname alloshp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alloshp:<tag>

   (see `alloshp/tags`_ for valid values for ``<tag>``)


.. |downloads_alloshp| image:: https://img.shields.io/conda/dn/bioconda/alloshp.svg?style=flat
   :target: https://anaconda.org/bioconda/alloshp
   :alt:   (downloads)
.. |docker_alloshp| image:: https://quay.io/repository/biocontainers/alloshp/status
   :target: https://quay.io/repository/biocontainers/alloshp
.. _`alloshp/tags`: https://quay.io/repository/biocontainers/alloshp?tab=tags


.. raw:: html

    <script>
        var package = "alloshp";
        var versions = ["2025.09.12","2025.09.08","2025.09.08d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alloshp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alloshp/README.html