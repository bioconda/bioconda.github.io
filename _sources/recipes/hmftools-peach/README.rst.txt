:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-peach'
.. highlight: bash

hmftools-peach
==============

.. conda:recipe:: hmftools-peach
   :replaces_section_title:
   :noindex:

   Infer haplotypes for interpretation in a pharmacogenomic context

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/peach/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-peach <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-peach>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-peach/meta.yaml>`_

   


.. conda:package:: hmftools-peach

   |downloads_hmftools-peach| |docker_hmftools-peach|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends openjdk: ``>=8,<=21``
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

      mamba install hmftools-peach

   and update with::

      mamba update hmftools-peach

  To create a new environment, run::

      mamba create --name myenvname hmftools-peach

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-peach:<tag>

   (see `hmftools-peach/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-peach| image:: https://img.shields.io/conda/dn/bioconda/hmftools-peach.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-peach
   :alt:   (downloads)
.. |docker_hmftools-peach| image:: https://quay.io/repository/biocontainers/hmftools-peach/status
   :target: https://quay.io/repository/biocontainers/hmftools-peach
.. _`hmftools-peach/tags`: https://quay.io/repository/biocontainers/hmftools-peach?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-peach";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-peach/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-peach/README.html