:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-sigs'
.. highlight: bash

hmftools-sigs
=============

.. conda:recipe:: hmftools-sigs
   :replaces_section_title:
   :noindex:

   Fits sample SNV counts to trinucleotide signature definitions.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/sigs/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-sigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sigs/meta.yaml>`_

   


.. conda:package:: hmftools-sigs

   |downloads_hmftools-sigs| |docker_hmftools-sigs|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
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

      mamba install hmftools-sigs

   and update with::

      mamba update hmftools-sigs

  To create a new environment, run::

      mamba create --name myenvname hmftools-sigs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-sigs:<tag>

   (see `hmftools-sigs/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-sigs| image:: https://img.shields.io/conda/dn/bioconda/hmftools-sigs.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-sigs
   :alt:   (downloads)
.. |docker_hmftools-sigs| image:: https://quay.io/repository/biocontainers/hmftools-sigs/status
   :target: https://quay.io/repository/biocontainers/hmftools-sigs
.. _`hmftools-sigs/tags`: https://quay.io/repository/biocontainers/hmftools-sigs?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-sigs";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-sigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-sigs/README.html