:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrseqtools'
.. highlight: bash

spectrseqtools
==============

.. conda:recipe:: spectrseqtools
   :replaces_section_title:
   :noindex:

   SpectrSeqTools is a fully automatic analysis platform for sequencing small RNA molecules including
   post translational modifications measured via LC\-MS\/MS data.


   :homepage: https://github.com/spectrseq/spectrseqtools
   :license: GPL-3.0-only
   :recipe: /`spectrseqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrseqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrseqtools/meta.yaml>`_

   


.. conda:package:: spectrseqtools

   |downloads_spectrseqtools| |docker_spectrseqtools|

   :versions:
      
      

      

      

   
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

      mamba install spectrseqtools

   and update with::

      mamba update spectrseqtools

  To create a new environment, run::

      mamba create --name myenvname spectrseqtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spectrseqtools:<tag>

   (see `spectrseqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_spectrseqtools| image:: https://img.shields.io/conda/dn/bioconda/spectrseqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrseqtools
   :alt:   (downloads)
.. |docker_spectrseqtools| image:: https://quay.io/repository/biocontainers/spectrseqtools/status
   :target: https://quay.io/repository/biocontainers/spectrseqtools
.. _`spectrseqtools/tags`: https://quay.io/repository/biocontainers/spectrseqtools?tab=tags


.. raw:: html

    <script>
        var package = "spectrseqtools";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrseqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrseqtools/README.html