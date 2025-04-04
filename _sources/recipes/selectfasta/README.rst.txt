:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selectfasta'
.. highlight: bash

selectfasta
===========

.. conda:recipe:: selectfasta
   :replaces_section_title:
   :noindex:

   FASTA or FASTQ select from a list of header names

   :homepage: https://github.com/andvides/selectFasta/
   :license: GPL / GPL-3.0
   :recipe: /`selectfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectfasta/meta.yaml>`_

   


.. conda:package:: selectfasta

   |downloads_selectfasta| |docker_selectfasta|

   :versions:
      
      

      ``3.1-1``,  ``3.1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install selectfasta

   and update with::

      mamba update selectfasta

  To create a new environment, run::

      mamba create --name myenvname selectfasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/selectfasta:<tag>

   (see `selectfasta/tags`_ for valid values for ``<tag>``)


.. |downloads_selectfasta| image:: https://img.shields.io/conda/dn/bioconda/selectfasta.svg?style=flat
   :target: https://anaconda.org/bioconda/selectfasta
   :alt:   (downloads)
.. |docker_selectfasta| image:: https://quay.io/repository/biocontainers/selectfasta/status
   :target: https://quay.io/repository/biocontainers/selectfasta
.. _`selectfasta/tags`: https://quay.io/repository/biocontainers/selectfasta?tab=tags


.. raw:: html

    <script>
        var package = "selectfasta";
        var versions = ["3.1","3.1","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selectfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selectfasta/README.html