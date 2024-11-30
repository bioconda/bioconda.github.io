:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygvcf2coverage'
.. highlight: bash

pygvcf2coverage
===============

.. conda:recipe:: pygvcf2coverage
   :replaces_section_title:
   :noindex:

   Python tool to extra coverage from gVCF files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`pygvcf2coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygvcf2coverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygvcf2coverage/meta.yaml>`_

   


.. conda:package:: pygvcf2coverage

   |downloads_pygvcf2coverage| |docker_pygvcf2coverage|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends cyvcf2: 
   :depends python: ``>=3.6``
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

      mamba install pygvcf2coverage

   and update with::

      mamba update pygvcf2coverage

  To create a new environment, run::

      mamba create --name myenvname pygvcf2coverage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygvcf2coverage:<tag>

   (see `pygvcf2coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_pygvcf2coverage| image:: https://img.shields.io/conda/dn/bioconda/pygvcf2coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/pygvcf2coverage
   :alt:   (downloads)
.. |docker_pygvcf2coverage| image:: https://quay.io/repository/biocontainers/pygvcf2coverage/status
   :target: https://quay.io/repository/biocontainers/pygvcf2coverage
.. _`pygvcf2coverage/tags`: https://quay.io/repository/biocontainers/pygvcf2coverage?tab=tags


.. raw:: html

    <script>
        var package = "pygvcf2coverage";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygvcf2coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygvcf2coverage/README.html