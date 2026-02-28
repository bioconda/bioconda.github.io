:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viral_usher'
.. highlight: bash

viral_usher
===========

.. conda:recipe:: viral_usher
   :replaces_section_title:
   :noindex:

   Easily configure and run a pipeline to build a tree of virus genomes using UShER

   :homepage: https://github.com/AngieHinrichs/viral_usher
   :license: MIT / MIT
   :recipe: /`viral_usher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_usher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_usher/meta.yaml>`_

   


.. conda:package:: viral_usher

   |downloads_viral_usher| |docker_viral_usher|

   :versions:
      
      

      ``0.10.2-0``,  ``0.10.1-0``

      

   
   :depends biopython: 
   :depends docker-py: 
   :depends python: ``>=3.11``
   :depends requests: 
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

      mamba install viral_usher

   and update with::

      mamba update viral_usher

  To create a new environment, run::

      mamba create --name myenvname viral_usher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viral_usher:<tag>

   (see `viral_usher/tags`_ for valid values for ``<tag>``)


.. |downloads_viral_usher| image:: https://img.shields.io/conda/dn/bioconda/viral_usher.svg?style=flat
   :target: https://anaconda.org/bioconda/viral_usher
   :alt:   (downloads)
.. |docker_viral_usher| image:: https://quay.io/repository/biocontainers/viral_usher/status
   :target: https://quay.io/repository/biocontainers/viral_usher
.. _`viral_usher/tags`: https://quay.io/repository/biocontainers/viral_usher?tab=tags


.. raw:: html

    <script>
        var package = "viral_usher";
        var versions = ["0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viral_usher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viral_usher/README.html