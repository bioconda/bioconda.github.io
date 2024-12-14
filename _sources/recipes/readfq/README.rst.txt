:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readfq'
.. highlight: bash

readfq
======

.. conda:recipe:: readfq
   :replaces_section_title:
   :noindex:

   A high\-speed tool to calculate reads number and total base count in FASTQ file\, forked from Li Heng\'s original version

   :homepage: https://github.com/billzt/readfq
   :license: MIT / MIT
   :recipe: /`readfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq/meta.yaml>`_

   


.. conda:package:: readfq

   |downloads_readfq| |docker_readfq|

   :versions:
      
      

      ``2015.08.30-6``,  ``2015.08.30-5``,  ``2015.08.30-4``,  ``2015.08.30-3``,  ``2015.08.30-2``,  ``2015.08.30-1``,  ``2015.08.30-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install readfq

   and update with::

      mamba update readfq

  To create a new environment, run::

      mamba create --name myenvname readfq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/readfq:<tag>

   (see `readfq/tags`_ for valid values for ``<tag>``)


.. |downloads_readfq| image:: https://img.shields.io/conda/dn/bioconda/readfq.svg?style=flat
   :target: https://anaconda.org/bioconda/readfq
   :alt:   (downloads)
.. |docker_readfq| image:: https://quay.io/repository/biocontainers/readfq/status
   :target: https://quay.io/repository/biocontainers/readfq
.. _`readfq/tags`: https://quay.io/repository/biocontainers/readfq?tab=tags


.. raw:: html

    <script>
        var package = "readfq";
        var versions = ["2015.08.30","2015.08.30","2015.08.30","2015.08.30","2015.08.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readfq/README.html