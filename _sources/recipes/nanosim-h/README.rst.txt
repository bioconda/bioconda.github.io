:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosim-h'
.. highlight: bash

nanosim-h
=========

.. conda:recipe:: nanosim-h
   :replaces_section_title:
   :noindex:

   NanoSim\-H is a simulator of Oxford Nanopore reads that captures the technology\-specific features of ONT data\, and allows for adjustments upon improvement of Nanopore sequencing technology.

   :homepage: https://github.com/karel-brinda/NanoSim-H
   :license: GPLv3
   :recipe: /`nanosim-h <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h/meta.yaml>`_

   


.. conda:package:: nanosim-h

   |downloads_nanosim-h| |docker_nanosim-h|

   :versions:
      
      

      ``1.1.0.4-2``,  ``1.1.0.4-1``,  ``1.1.0.4-0``,  ``1.1.0.3-3``,  ``1.1.0.3-0``,  ``1.1.0.2-1``

      

   
   :depends last: 
   :depends numpy: 
   :depends progressbar2: 
   :depends python: 
   :depends r-base: ``>=4.0,<4.1.0a0``
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

      mamba install nanosim-h

   and update with::

      mamba update nanosim-h

  To create a new environment, run::

      mamba create --name myenvname nanosim-h

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanosim-h:<tag>

   (see `nanosim-h/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosim-h| image:: https://img.shields.io/conda/dn/bioconda/nanosim-h.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosim-h
   :alt:   (downloads)
.. |docker_nanosim-h| image:: https://quay.io/repository/biocontainers/nanosim-h/status
   :target: https://quay.io/repository/biocontainers/nanosim-h
.. _`nanosim-h/tags`: https://quay.io/repository/biocontainers/nanosim-h?tab=tags


.. raw:: html

    <script>
        var package = "nanosim-h";
        var versions = ["1.1.0.4","1.1.0.4","1.1.0.4","1.1.0.3","1.1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim-h/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim-h/README.html