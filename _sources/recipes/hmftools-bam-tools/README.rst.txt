:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-bam-tools'
.. highlight: bash

hmftools-bam-tools
==================

.. conda:recipe:: hmftools-bam-tools
   :replaces_section_title:
   :noindex:

   Rapidly process BAMs for various tasks.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/bam-tools/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-bam-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bam-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bam-tools/meta.yaml>`_

   


.. conda:package:: hmftools-bam-tools

   |downloads_hmftools-bam-tools| |docker_hmftools-bam-tools|

   :versions:
      
      

      ``1.3_beta-1``,  ``1.3_beta-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends openjdk: ``>=8,<=21``
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

      mamba install hmftools-bam-tools

   and update with::

      mamba update hmftools-bam-tools

  To create a new environment, run::

      mamba create --name myenvname hmftools-bam-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-bam-tools:<tag>

   (see `hmftools-bam-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-bam-tools| image:: https://img.shields.io/conda/dn/bioconda/hmftools-bam-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-bam-tools
   :alt:   (downloads)
.. |docker_hmftools-bam-tools| image:: https://quay.io/repository/biocontainers/hmftools-bam-tools/status
   :target: https://quay.io/repository/biocontainers/hmftools-bam-tools
.. _`hmftools-bam-tools/tags`: https://quay.io/repository/biocontainers/hmftools-bam-tools?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-bam-tools";
        var versions = ["1.3_beta","1.3_beta","1.2.1","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-bam-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-bam-tools/README.html