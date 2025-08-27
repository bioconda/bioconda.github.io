:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minipileup'
.. highlight: bash

minipileup
==========

.. conda:recipe:: minipileup
   :replaces_section_title:
   :noindex:

   Minipileup is a simple pileup\-based variant caller

   :homepage: https://github.com/lh3/minipileup
   :license: MIT / MIT
   :recipe: /`minipileup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipileup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipileup/meta.yaml>`_
   :links: biotools: :biotools:`minipileup`

   Minipileup is a simple pileup\-based variant caller. It takes a reference FASTA and one or multiple alignment BAM as input\, and outputs a multi\-sample VCF along with allele counts.


.. conda:package:: minipileup

   |downloads_minipileup| |docker_minipileup|

   :versions:
      
      

      ``1.4b-0``

      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install minipileup

   and update with::

      mamba update minipileup

  To create a new environment, run::

      mamba create --name myenvname minipileup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minipileup:<tag>

   (see `minipileup/tags`_ for valid values for ``<tag>``)


.. |downloads_minipileup| image:: https://img.shields.io/conda/dn/bioconda/minipileup.svg?style=flat
   :target: https://anaconda.org/bioconda/minipileup
   :alt:   (downloads)
.. |docker_minipileup| image:: https://quay.io/repository/biocontainers/minipileup/status
   :target: https://quay.io/repository/biocontainers/minipileup
.. _`minipileup/tags`: https://quay.io/repository/biocontainers/minipileup?tab=tags


.. raw:: html

    <script>
        var package = "minipileup";
        var versions = ["1.4b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minipileup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minipileup/README.html