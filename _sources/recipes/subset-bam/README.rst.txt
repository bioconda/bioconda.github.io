:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'subset-bam'
.. highlight: bash

subset-bam
==========

.. conda:recipe:: subset-bam
   :replaces_section_title:
   :noindex:

   A tool to subset a 10x Genomics BAM file based on a tag\, most commonly the cell barcode tag.

   :homepage: https://github.com/10XGenomics/subset-bam
   :documentation: https://github.com/10XGenomics/subset-bam/blob/v1.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`subset-bam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subset-bam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subset-bam/meta.yaml>`_

   


.. conda:package:: subset-bam

   |downloads_subset-bam| |docker_subset-bam|

   :versions:
      
      

      ``1.1.0-0``

      

   
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

      mamba install subset-bam

   and update with::

      mamba update subset-bam

  To create a new environment, run::

      mamba create --name myenvname subset-bam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/subset-bam:<tag>

   (see `subset-bam/tags`_ for valid values for ``<tag>``)


.. |downloads_subset-bam| image:: https://img.shields.io/conda/dn/bioconda/subset-bam.svg?style=flat
   :target: https://anaconda.org/bioconda/subset-bam
   :alt:   (downloads)
.. |docker_subset-bam| image:: https://quay.io/repository/biocontainers/subset-bam/status
   :target: https://quay.io/repository/biocontainers/subset-bam
.. _`subset-bam/tags`: https://quay.io/repository/biocontainers/subset-bam?tab=tags


.. raw:: html

    <script>
        var package = "subset-bam";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/subset-bam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/subset-bam/README.html