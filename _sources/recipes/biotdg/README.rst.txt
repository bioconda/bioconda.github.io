:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotdg'
.. highlight: bash

biotdg
======

.. conda:recipe:: biotdg
   :replaces_section_title:
   :noindex:

   Bioinformatics Test Data Generator

   :homepage: https://github.com/biowdl/biotdg
   :license: MIT / MIT
   :recipe: /`biotdg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotdg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotdg/meta.yaml>`_

   


.. conda:package:: biotdg

   |downloads_biotdg| |docker_biotdg|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: 
   :depends cyvcf2: 
   :depends dwgsim: 
   :depends python: ``>=3.6,<3.8``
   :depends setuptools: 
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

      mamba install biotdg

   and update with::

      mamba update biotdg

  To create a new environment, run::

      mamba create --name myenvname biotdg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biotdg:<tag>

   (see `biotdg/tags`_ for valid values for ``<tag>``)


.. |downloads_biotdg| image:: https://img.shields.io/conda/dn/bioconda/biotdg.svg?style=flat
   :target: https://anaconda.org/bioconda/biotdg
   :alt:   (downloads)
.. |docker_biotdg| image:: https://quay.io/repository/biocontainers/biotdg/status
   :target: https://quay.io/repository/biocontainers/biotdg
.. _`biotdg/tags`: https://quay.io/repository/biocontainers/biotdg?tab=tags


.. raw:: html

    <script>
        var package = "biotdg";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotdg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotdg/README.html