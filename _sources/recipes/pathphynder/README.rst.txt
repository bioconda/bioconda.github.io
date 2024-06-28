:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathphynder'
.. highlight: bash

pathphynder
===========

.. conda:recipe:: pathphynder
   :replaces_section_title:
   :noindex:

   A workflow for ancient DNA placement into reference phylogenies.

   :homepage: https://github.com/ruidlpm/pathPhynder
   :license: MIT / MIT
   :recipe: /`pathphynder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathphynder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathphynder/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msac017`

   Ancient DNA data is characterized by deamination and low\-coverage sequencing\, which results in a high fraction of missing data and erroneous calls. 
   These factors affect the estimation of phylogenetic trees with modern and ancient DNA\, especially when dealing with many ancient samples sequenced to lower coverage. 
   Furthermore\, most ancient DNA analyses of the Y chromosome\, for example\, rely on previously known markers\, but additional variation will continuously emerge as more data is generated. 
   This workflow offers a solution for integrating ancient and present\-day haploid data\, first by identifiying informative markers in a high coverage dataset\, second\, by calling and filtering these SNPs in ancient samples and lastly\, by traversing the tree and evaluate the number of derived and ancestral markers in the ancients to find the most likely branch where it belongs.



.. conda:package:: pathphynder

   |downloads_pathphynder| |docker_pathphynder|

   :versions:
      
      

      

      

   
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

      mamba install pathphynder

   and update with::

      mamba update pathphynder

  To create a new environment, run::

      mamba create --name myenvname pathphynder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathphynder:<tag>

   (see `pathphynder/tags`_ for valid values for ``<tag>``)


.. |downloads_pathphynder| image:: https://img.shields.io/conda/dn/bioconda/pathphynder.svg?style=flat
   :target: https://anaconda.org/bioconda/pathphynder
   :alt:   (downloads)
.. |docker_pathphynder| image:: https://quay.io/repository/biocontainers/pathphynder/status
   :target: https://quay.io/repository/biocontainers/pathphynder
.. _`pathphynder/tags`: https://quay.io/repository/biocontainers/pathphynder?tab=tags


.. raw:: html

    <script>
        var package = "pathphynder";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathphynder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathphynder/README.html