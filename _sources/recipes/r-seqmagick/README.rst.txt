:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seqmagick'
.. highlight: bash

r-seqmagick
===========

.. conda:recipe:: r-seqmagick
   :replaces_section_title:
   :noindex:

   Supports reading and writing sequences for different formats \(currently interleaved and sequential formats for \'FASTA\' and \'PHYLIP\'\)\, file conversion\, and manipulation \(e.g. filter sequences that contain specify pattern\, export consensus sequence from an alignment\).

   :homepage: https://github.com/YuLab-SMU/seqmagick
   :license: OTHER / Artistic-2.0
   :recipe: /`r-seqmagick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick/meta.yaml>`_

   


.. conda:package:: r-seqmagick

   |downloads_r-seqmagick| |docker_r-seqmagick|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends bioconductor-biostrings: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-magrittr: 
   :depends r-yulab.utils: ``>0.1.6``
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

      mamba install r-seqmagick

   and update with::

      mamba update r-seqmagick

  To create a new environment, run::

      mamba create --name myenvname r-seqmagick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-seqmagick:<tag>

   (see `r-seqmagick/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seqmagick| image:: https://img.shields.io/conda/dn/bioconda/r-seqmagick.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seqmagick
   :alt:   (downloads)
.. |docker_r-seqmagick| image:: https://quay.io/repository/biocontainers/r-seqmagick/status
   :target: https://quay.io/repository/biocontainers/r-seqmagick
.. _`r-seqmagick/tags`: https://quay.io/repository/biocontainers/r-seqmagick?tab=tags


.. raw:: html

    <script>
        var package = "r-seqmagick";
        var versions = ["0.1.8","0.1.7","0.1.7","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seqmagick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seqmagick/README.html