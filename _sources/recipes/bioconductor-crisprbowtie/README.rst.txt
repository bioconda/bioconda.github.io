:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbowtie'
.. highlight: bash

bioconductor-crisprbowtie
=========================

.. conda:recipe:: bioconductor-crisprbowtie
   :replaces_section_title:
   :noindex:

   Bowtie\-based alignment of CRISPR gRNA spacer sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprBowtie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie/meta.yaml>`_

   Provides a user\-friendly interface to map on\-targets and off\-targets of CRISPR gRNA spacer sequences using bowtie. The alignment is fast\, and can be performed using either commonly\-used or custom CRISPR nucleases. The alignment can work with any reference or custom genomes. Both DNA\- and RNA\-targeting nucleases are supported.


.. conda:package:: bioconductor-crisprbowtie

   |downloads_bioconductor-crisprbowtie| |docker_bioconductor-crisprbowtie|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-crisprbase: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rbowtie: ``>=1.50.0,<1.51.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-readr: 
   :depends r-stringr: 
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

      mamba install bioconductor-crisprbowtie

   and update with::

      mamba update bioconductor-crisprbowtie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprbowtie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprbowtie:<tag>

   (see `bioconductor-crisprbowtie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbowtie
   :alt:   (downloads)
.. |docker_bioconductor-crisprbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie
.. _`bioconductor-crisprbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbowtie";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html