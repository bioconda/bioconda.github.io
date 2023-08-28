:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbg2olc'
.. highlight: bash

dbg2olc
=======

.. conda:recipe:: dbg2olc
   :replaces_section_title:
   :noindex:

   Efficient Assembly of Large Genomes Using Long Erroneous Reads of the Third Generation Sequencing Technologies

   :homepage: https://github.com/yechengxi/DBG2OLC
   :license: unknown
   :recipe: /`dbg2olc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc/meta.yaml>`_

   


.. conda:package:: dbg2olc

   |downloads_dbg2olc| |docker_dbg2olc|

   :versions:
      
      

      ``20200723-2``,  ``20200723-1``,  ``20200723-0``,  ``20180222-3``,  ``20180222-2``,  ``20180222-1``,  ``20180222-0``,  ``20160205-1``,  ``20160205-0``

      

   
   :depends assemblyutility: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends sparc: 
   :depends sparseassembler: 
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

      mamba install dbg2olc

   and update with::

      mamba update dbg2olc

  To create a new environment, run::

      mamba create --name myenvname dbg2olc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dbg2olc:<tag>

   (see `dbg2olc/tags`_ for valid values for ``<tag>``)


.. |downloads_dbg2olc| image:: https://img.shields.io/conda/dn/bioconda/dbg2olc.svg?style=flat
   :target: https://anaconda.org/bioconda/dbg2olc
   :alt:   (downloads)
.. |docker_dbg2olc| image:: https://quay.io/repository/biocontainers/dbg2olc/status
   :target: https://quay.io/repository/biocontainers/dbg2olc
.. _`dbg2olc/tags`: https://quay.io/repository/biocontainers/dbg2olc?tab=tags


.. raw:: html

    <script>
        var package = "dbg2olc";
        var versions = ["20200723","20200723","20200723","20180222","20180222"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbg2olc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbg2olc/README.html