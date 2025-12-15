:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonclust3'
.. highlight: bash

isonclust3
==========

.. conda:recipe:: isonclust3
   :replaces_section_title:
   :noindex:

   De novo clustering of long transcript reads into genes

   :homepage: https://github.com/aljpetri/isONclust3
   :license: GPL-3.0-or-later
   :recipe: /`isonclust3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust3/meta.yaml>`_

   isONclust3 is a tool for clustering either PacBio Iso\-Seq reads\, or Oxford Nanopore reads into clusters\, where each cluster represents all reads that came from a gene family. Output is a tsv file with each read assigned to a cluster\-ID and a folder \'fastq\' containing one fastq file per cluster generated. Detailed information is available in the isONclust3 paper https\:\/\/doi.org\/10.1093\/bioinformatics\/btaf207



.. conda:package:: isonclust3

   |downloads_isonclust3| |docker_isonclust3|

   :versions:
      
      

      ``0.3.0-0``

      

   
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

      mamba install isonclust3

   and update with::

      mamba update isonclust3

  To create a new environment, run::

      mamba create --name myenvname isonclust3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isonclust3:<tag>

   (see `isonclust3/tags`_ for valid values for ``<tag>``)


.. |downloads_isonclust3| image:: https://img.shields.io/conda/dn/bioconda/isonclust3.svg?style=flat
   :target: https://anaconda.org/bioconda/isonclust3
   :alt:   (downloads)
.. |docker_isonclust3| image:: https://quay.io/repository/biocontainers/isonclust3/status
   :target: https://quay.io/repository/biocontainers/isonclust3
.. _`isonclust3/tags`: https://quay.io/repository/biocontainers/isonclust3?tab=tags


.. raw:: html

    <script>
        var package = "isonclust3";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonclust3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonclust3/README.html