:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbwa'
.. highlight: bash

bioconductor-crisprbwa
======================

.. conda:recipe:: bioconductor-crisprbwa
   :replaces_section_title:
   :noindex:

   BWA\-based alignment of CRISPR gRNA spacer sequences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/crisprBwa.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbwa/meta.yaml>`_

   Provides a user\-friendly interface to map on\-targets and off\-targets of CRISPR gRNA spacer sequences using bwa. The alignment is fast\, and can be performed using either commonly\-used or custom CRISPR nucleases. The alignment can work with any reference or custom genomes. Currently not supported on Windows machines.


.. conda:package:: bioconductor-crisprbwa

   |downloads_bioconductor-crisprbwa| |docker_bioconductor-crisprbwa|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-crisprbase: ``>=1.6.0,<1.7.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rbwa: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
   :depends r-stringr: 
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

      mamba install bioconductor-crisprbwa

   and update with::

      mamba update bioconductor-crisprbwa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprbwa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprbwa:<tag>

   (see `bioconductor-crisprbwa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprbwa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbwa
   :alt:   (downloads)
.. |docker_bioconductor-crisprbwa| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbwa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbwa
.. _`bioconductor-crisprbwa/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbwa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbwa";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbwa/README.html