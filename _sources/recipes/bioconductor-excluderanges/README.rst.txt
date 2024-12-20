:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-excluderanges'
.. highlight: bash

bioconductor-excluderanges
==========================

.. conda:recipe:: bioconductor-excluderanges
   :replaces_section_title:
   :noindex:

   Genomic coordinates of problematic genomic regions

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/excluderanges.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-excluderanges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluderanges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluderanges/meta.yaml>`_

   Genomic coordinates of problematic genomic regions that should be avoided when working with genomic data. GRanges of exclusion regions \(formerly known as blacklisted\)\, centromeres\, telomeres\, known heterochromatin regions\, etc. \(UCSC \'gap\' table data\). Primarily for human and mouse genomes\, hg19\/hg38 and mm9\/mm10 genome assemblies.


.. conda:package:: bioconductor-excluderanges

   |downloads_bioconductor-excluderanges| |docker_bioconductor-excluderanges|

   :versions:
      
      

      ``0.99.8-2``,  ``0.99.8-1``,  ``0.99.8-0``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-excluderanges

   and update with::

      mamba update bioconductor-excluderanges

  To create a new environment, run::

      mamba create --name myenvname bioconductor-excluderanges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-excluderanges:<tag>

   (see `bioconductor-excluderanges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-excluderanges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-excluderanges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-excluderanges
   :alt:   (downloads)
.. |docker_bioconductor-excluderanges| image:: https://quay.io/repository/biocontainers/bioconductor-excluderanges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-excluderanges
.. _`bioconductor-excluderanges/tags`: https://quay.io/repository/biocontainers/bioconductor-excluderanges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-excluderanges";
        var versions = ["0.99.8","0.99.8","0.99.8","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-excluderanges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-excluderanges/README.html