:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastutils'
.. highlight: bash

fastutils
=========

.. conda:recipe:: fastutils
   :replaces_section_title:
   :noindex:

   A light toolkit for parsing\, manipulating and analysis of FASTA and FASTQ files

   :homepage: https://github.com/haghshenas/fastutils
   :license: GPL-3.0
   :recipe: /`fastutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastutils/meta.yaml>`_

   


.. conda:package:: fastutils

   |downloads_fastutils| |docker_fastutils|

   :versions:
      
      

      ``0.3-5``,  ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install fastutils

   and update with::

      mamba update fastutils

  To create a new environment, run::

      mamba create --name myenvname fastutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastutils:<tag>

   (see `fastutils/tags`_ for valid values for ``<tag>``)


.. |downloads_fastutils| image:: https://img.shields.io/conda/dn/bioconda/fastutils.svg?style=flat
   :target: https://anaconda.org/bioconda/fastutils
   :alt:   (downloads)
.. |docker_fastutils| image:: https://quay.io/repository/biocontainers/fastutils/status
   :target: https://quay.io/repository/biocontainers/fastutils
.. _`fastutils/tags`: https://quay.io/repository/biocontainers/fastutils?tab=tags


.. raw:: html

    <script>
        var package = "fastutils";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastutils/README.html