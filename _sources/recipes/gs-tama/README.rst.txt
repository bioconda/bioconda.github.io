:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gs-tama'
.. highlight: bash

gs-tama
=======

.. conda:recipe:: gs-tama
   :replaces_section_title:
   :noindex:

   Gene\-Switch Transcriptome Annotation by Modular Algorithms

   :homepage: https://github.com/sguizard/gs-tama
   :license: GPL-3.0 License
   :recipe: /`gs-tama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gs-tama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gs-tama/meta.yaml>`_

   


.. conda:package:: gs-tama

   |downloads_gs-tama| |docker_gs-tama|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.11.0``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``2.7.*``
   :depends samtools: ``>=1.12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gs-tama

   and update with::

      mamba update gs-tama

  To create a new environment, run::

      mamba create --name myenvname gs-tama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gs-tama:<tag>

   (see `gs-tama/tags`_ for valid values for ``<tag>``)


.. |downloads_gs-tama| image:: https://img.shields.io/conda/dn/bioconda/gs-tama.svg?style=flat
   :target: https://anaconda.org/bioconda/gs-tama
   :alt:   (downloads)
.. |docker_gs-tama| image:: https://quay.io/repository/biocontainers/gs-tama/status
   :target: https://quay.io/repository/biocontainers/gs-tama
.. _`gs-tama/tags`: https://quay.io/repository/biocontainers/gs-tama?tab=tags


.. raw:: html

    <script>
        var package = "gs-tama";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gs-tama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gs-tama/README.html