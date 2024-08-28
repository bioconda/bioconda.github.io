:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmertools'
.. highlight: bash

kmertools
=========

.. conda:recipe:: kmertools
   :replaces_section_title:
   :noindex:

   kmertools\: DNA Vectorisation Tool

   :homepage: https://github.com/anuradhawick/kmertools
   :documentation: https://github.com/anuradhawick/kmertools/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`kmertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmertools/meta.yaml>`_

   kmertools is a k\-mer based feature extraction tool designed to support metagenomics and other bioinformatics analytics.


.. conda:package:: kmertools

   |downloads_kmertools| |docker_kmertools|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends python_abi: ``3.12.* *_cp312``
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

      mamba install kmertools

   and update with::

      mamba update kmertools

  To create a new environment, run::

      mamba create --name myenvname kmertools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmertools:<tag>

   (see `kmertools/tags`_ for valid values for ``<tag>``)


.. |downloads_kmertools| image:: https://img.shields.io/conda/dn/bioconda/kmertools.svg?style=flat
   :target: https://anaconda.org/bioconda/kmertools
   :alt:   (downloads)
.. |docker_kmertools| image:: https://quay.io/repository/biocontainers/kmertools/status
   :target: https://quay.io/repository/biocontainers/kmertools
.. _`kmertools/tags`: https://quay.io/repository/biocontainers/kmertools?tab=tags


.. raw:: html

    <script>
        var package = "kmertools";
        var versions = ["0.1.3","0.1.2","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmertools/README.html