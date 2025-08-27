:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfa1'
.. highlight: bash

gfa1
====

.. conda:recipe:: gfa1
   :replaces_section_title:
   :noindex:

   gfa1 toolkit

   :homepage: https://github.com/lh3/gfa1
   :license: GPL3
   :recipe: /`gfa1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfa1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfa1/meta.yaml>`_
   :links: biotools: :biotools:`gfa1`

   A command\-line tool as well as a library in C that 
   parses\, validates and transforms assembly graphs in
   a dialect of the GFA1 format.



.. conda:package:: gfa1

   |downloads_gfa1| |docker_gfa1|

   :versions:
      
      

      ``0.53.alpha-3``,  ``0.53.alpha-2``,  ``0.53.alpha-1``,  ``0.53.alpha-0``

      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install gfa1

   and update with::

      mamba update gfa1

  To create a new environment, run::

      mamba create --name myenvname gfa1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfa1:<tag>

   (see `gfa1/tags`_ for valid values for ``<tag>``)


.. |downloads_gfa1| image:: https://img.shields.io/conda/dn/bioconda/gfa1.svg?style=flat
   :target: https://anaconda.org/bioconda/gfa1
   :alt:   (downloads)
.. |docker_gfa1| image:: https://quay.io/repository/biocontainers/gfa1/status
   :target: https://quay.io/repository/biocontainers/gfa1
.. _`gfa1/tags`: https://quay.io/repository/biocontainers/gfa1?tab=tags


.. raw:: html

    <script>
        var package = "gfa1";
        var versions = ["0.53.alpha","0.53.alpha","0.53.alpha","0.53.alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfa1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfa1/README.html