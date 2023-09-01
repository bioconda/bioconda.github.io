:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minorseq'
.. highlight: bash

minorseq
========

.. conda:recipe:: minorseq
   :replaces_section_title:
   :noindex:

   Minor Variant Calling and Phasing Tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`minorseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minorseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minorseq/meta.yaml>`_

   


.. conda:package:: minorseq

   |downloads_minorseq| |docker_minorseq|

   :versions:
      
      

      ``1.12.0-0``,  ``1.11.0-1``,  ``1.11.0-0``

      

   
   :depends pbccs: 
   :depends pbmm2: 
   :depends samtools: 
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

      mamba install minorseq

   and update with::

      mamba update minorseq

  To create a new environment, run::

      mamba create --name myenvname minorseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minorseq:<tag>

   (see `minorseq/tags`_ for valid values for ``<tag>``)


.. |downloads_minorseq| image:: https://img.shields.io/conda/dn/bioconda/minorseq.svg?style=flat
   :target: https://anaconda.org/bioconda/minorseq
   :alt:   (downloads)
.. |docker_minorseq| image:: https://quay.io/repository/biocontainers/minorseq/status
   :target: https://quay.io/repository/biocontainers/minorseq
.. _`minorseq/tags`: https://quay.io/repository/biocontainers/minorseq?tab=tags


.. raw:: html

    <script>
        var package = "minorseq";
        var versions = ["1.12.0","1.11.0","1.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minorseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minorseq/README.html