:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqstats'
.. highlight: bash

seqstats
========

.. conda:recipe:: seqstats
   :replaces_section_title:
   :noindex:

   Quick summary statistics on fasta\/fastq\(.gz\) files

   :homepage: https://github.com/clwgg/seqstats
   :license: MIT
   :recipe: /`seqstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstats/meta.yaml>`_

   


.. conda:package:: seqstats

   |downloads_seqstats| |docker_seqstats|

   :versions:
      
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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

      mamba install seqstats

   and update with::

      mamba update seqstats

  To create a new environment, run::

      mamba create --name myenvname seqstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqstats:<tag>

   (see `seqstats/tags`_ for valid values for ``<tag>``)


.. |downloads_seqstats| image:: https://img.shields.io/conda/dn/bioconda/seqstats.svg?style=flat
   :target: https://anaconda.org/bioconda/seqstats
   :alt:   (downloads)
.. |docker_seqstats| image:: https://quay.io/repository/biocontainers/seqstats/status
   :target: https://quay.io/repository/biocontainers/seqstats
.. _`seqstats/tags`: https://quay.io/repository/biocontainers/seqstats?tab=tags


.. raw:: html

    <script>
        var package = "seqstats";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqstats/README.html