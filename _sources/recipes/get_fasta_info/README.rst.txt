:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_fasta_info'
.. highlight: bash

get_fasta_info
==============

.. conda:recipe:: get_fasta_info
   :replaces_section_title:
   :noindex:

   get\_FAST\{A\,Q\}\_info \- Get fast info on fasta and fastq files

   :homepage: https://github.com/nylander/get_fasta_info
   :license: MIT
   :recipe: /`get_fasta_info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_fasta_info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_fasta_info/meta.yaml>`_

   


.. conda:package:: get_fasta_info

   |downloads_get_fasta_info| |docker_get_fasta_info|

   :versions:
      
      

      ``2.5.0-0``,  ``2.4-3``,  ``2.4-2``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install get_fasta_info

   and update with::

      mamba update get_fasta_info

  To create a new environment, run::

      mamba create --name myenvname get_fasta_info

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/get_fasta_info:<tag>

   (see `get_fasta_info/tags`_ for valid values for ``<tag>``)


.. |downloads_get_fasta_info| image:: https://img.shields.io/conda/dn/bioconda/get_fasta_info.svg?style=flat
   :target: https://anaconda.org/bioconda/get_fasta_info
   :alt:   (downloads)
.. |docker_get_fasta_info| image:: https://quay.io/repository/biocontainers/get_fasta_info/status
   :target: https://quay.io/repository/biocontainers/get_fasta_info
.. _`get_fasta_info/tags`: https://quay.io/repository/biocontainers/get_fasta_info?tab=tags


.. raw:: html

    <script>
        var package = "get_fasta_info";
        var versions = ["2.5.0","2.4","2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_fasta_info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_fasta_info/README.html