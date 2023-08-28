:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanospring'
.. highlight: bash

nanospring
==========

.. conda:recipe:: nanospring
   :replaces_section_title:
   :noindex:

   NanoSpring is a compression tool for nanopore reads in Fastq files

   :homepage: https://github.com/qm2/NanoSpring
   :license: MIT
   :recipe: /`nanospring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanospring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanospring/meta.yaml>`_

   


.. conda:package:: nanospring

   |downloads_nanospring| |docker_nanospring|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install nanospring

   and update with::

      mamba update nanospring

  To create a new environment, run::

      mamba create --name myenvname nanospring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanospring:<tag>

   (see `nanospring/tags`_ for valid values for ``<tag>``)


.. |downloads_nanospring| image:: https://img.shields.io/conda/dn/bioconda/nanospring.svg?style=flat
   :target: https://anaconda.org/bioconda/nanospring
   :alt:   (downloads)
.. |docker_nanospring| image:: https://quay.io/repository/biocontainers/nanospring/status
   :target: https://quay.io/repository/biocontainers/nanospring
.. _`nanospring/tags`: https://quay.io/repository/biocontainers/nanospring?tab=tags


.. raw:: html

    <script>
        var package = "nanospring";
        var versions = ["0.2","0.2","0.2","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanospring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanospring/README.html