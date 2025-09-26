:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraviewer'
.. highlight: bash

paraviewer
==========

.. conda:recipe:: paraviewer
   :replaces_section_title:
   :noindex:

   Automated visualization generator for Paraphase HiFi analysis tool

   :homepage: https://github.com/PacificBiosciences/Paraviewer
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`paraviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraviewer/meta.yaml>`_

   


.. conda:package:: paraviewer

   |downloads_paraviewer| |docker_paraviewer|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends cachetools: ``5.5.2``
   :depends jinja2: ``3.1.5``
   :depends pysam: ``0.23.0``
   :depends pytest: ``8.3.5``
   :depends python: ``>=3.10``
   :depends pyyaml: ``6.0.2``
   :depends tqdm: ``4.67.1``
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

      mamba install paraviewer

   and update with::

      mamba update paraviewer

  To create a new environment, run::

      mamba create --name myenvname paraviewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paraviewer:<tag>

   (see `paraviewer/tags`_ for valid values for ``<tag>``)


.. |downloads_paraviewer| image:: https://img.shields.io/conda/dn/bioconda/paraviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/paraviewer
   :alt:   (downloads)
.. |docker_paraviewer| image:: https://quay.io/repository/biocontainers/paraviewer/status
   :target: https://quay.io/repository/biocontainers/paraviewer
.. _`paraviewer/tags`: https://quay.io/repository/biocontainers/paraviewer?tab=tags


.. raw:: html

    <script>
        var package = "paraviewer";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraviewer/README.html