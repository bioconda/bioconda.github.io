:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bax2bam'
.. highlight: bash

bax2bam
=======

.. conda:recipe:: bax2bam
   :replaces_section_title:
   :noindex:

   bax2bam converts the legacy PacBio basecall format \(bax.h5\) into the BAM basecall format

   :homepage: https://github.com/PacificBiosciences/bax2bam
   :license: BSD-3-Clause-Clear
   :recipe: /`bax2bam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam/meta.yaml>`_

   


.. conda:package:: bax2bam

   |downloads_bax2bam| |docker_bax2bam|

   :versions:
      
      

      ``0.0.11-0``,  ``0.0.9-7``,  ``0.0.9-6``,  ``0.0.9-5``,  ``0.0.9-4``,  ``0.0.9-3``,  ``0.0.9-1``,  ``0.0.9-0``

      

   
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

      mamba install bax2bam

   and update with::

      mamba update bax2bam

  To create a new environment, run::

      mamba create --name myenvname bax2bam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bax2bam:<tag>

   (see `bax2bam/tags`_ for valid values for ``<tag>``)


.. |downloads_bax2bam| image:: https://img.shields.io/conda/dn/bioconda/bax2bam.svg?style=flat
   :target: https://anaconda.org/bioconda/bax2bam
   :alt:   (downloads)
.. |docker_bax2bam| image:: https://quay.io/repository/biocontainers/bax2bam/status
   :target: https://quay.io/repository/biocontainers/bax2bam
.. _`bax2bam/tags`: https://quay.io/repository/biocontainers/bax2bam?tab=tags


.. raw:: html

    <script>
        var package = "bax2bam";
        var versions = ["0.0.11","0.0.9","0.0.9","0.0.9","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bax2bam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bax2bam/README.html