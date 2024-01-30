:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf2coverage'
.. highlight: bash

gvcf2coverage
=============

.. conda:recipe:: gvcf2coverage
   :replaces_section_title:
   :noindex:

   Coverage extractor from gVCF files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`gvcf2coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2coverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2coverage/meta.yaml>`_

   


.. conda:package:: gvcf2coverage

   |downloads_gvcf2coverage| |docker_gvcf2coverage|

   :versions:
      
      

      ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
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

      mamba install gvcf2coverage

   and update with::

      mamba update gvcf2coverage

  To create a new environment, run::

      mamba create --name myenvname gvcf2coverage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gvcf2coverage:<tag>

   (see `gvcf2coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcf2coverage| image:: https://img.shields.io/conda/dn/bioconda/gvcf2coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcf2coverage
   :alt:   (downloads)
.. |docker_gvcf2coverage| image:: https://quay.io/repository/biocontainers/gvcf2coverage/status
   :target: https://quay.io/repository/biocontainers/gvcf2coverage
.. _`gvcf2coverage/tags`: https://quay.io/repository/biocontainers/gvcf2coverage?tab=tags


.. raw:: html

    <script>
        var package = "gvcf2coverage";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf2coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf2coverage/README.html