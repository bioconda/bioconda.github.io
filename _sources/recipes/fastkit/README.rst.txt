:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastkit'
.. highlight: bash

fastkit
=======

.. conda:recipe:: fastkit
   :replaces_section_title:
   :noindex:

   Routine pre\-processing of biological data e.g. FASTA\/FASTQ files

   :homepage: https://github.com/neoformit/fastkit
   :license: MIT
   :recipe: /`fastkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastkit/meta.yaml>`_

   


.. conda:package:: fastkit

   |downloads_fastkit| |docker_fastkit|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.4-0``

      

   
   :depends biopython: 
   :depends python: 
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

      mamba install fastkit

   and update with::

      mamba update fastkit

  To create a new environment, run::

      mamba create --name myenvname fastkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastkit:<tag>

   (see `fastkit/tags`_ for valid values for ``<tag>``)


.. |downloads_fastkit| image:: https://img.shields.io/conda/dn/bioconda/fastkit.svg?style=flat
   :target: https://anaconda.org/bioconda/fastkit
   :alt:   (downloads)
.. |docker_fastkit| image:: https://quay.io/repository/biocontainers/fastkit/status
   :target: https://quay.io/repository/biocontainers/fastkit
.. _`fastkit/tags`: https://quay.io/repository/biocontainers/fastkit?tab=tags


.. raw:: html

    <script>
        var package = "fastkit";
        var versions = ["1.0.2","1.0.1","1.0.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastkit/README.html