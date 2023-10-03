:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplexer'
.. highlight: bash

demultiplexer
=============

.. conda:recipe:: demultiplexer
   :replaces_section_title:
   :noindex:

   python tool to demultiplex illumina reads tagged with the leeselab tagging scheme

   :homepage: https://github.com/DominikBuchner/demultiplexer
   :license: MIT
   :recipe: /`demultiplexer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer/meta.yaml>`_

   


.. conda:package:: demultiplexer

   |downloads_demultiplexer| |docker_demultiplexer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.1.2-0``,  ``1.1.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends joblib: ``>=0.16.0``
   :depends openpyxl: ``>=3.0.3``
   :depends psutil: ``>=5.7.3``
   :depends pysimplegui: ``>=4.19.0``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install demultiplexer

   and update with::

      mamba update demultiplexer

  To create a new environment, run::

      mamba create --name myenvname demultiplexer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/demultiplexer:<tag>

   (see `demultiplexer/tags`_ for valid values for ``<tag>``)


.. |downloads_demultiplexer| image:: https://img.shields.io/conda/dn/bioconda/demultiplexer.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplexer
   :alt:   (downloads)
.. |docker_demultiplexer| image:: https://quay.io/repository/biocontainers/demultiplexer/status
   :target: https://quay.io/repository/biocontainers/demultiplexer
.. _`demultiplexer/tags`: https://quay.io/repository/biocontainers/demultiplexer?tab=tags


.. raw:: html

    <script>
        var package = "demultiplexer";
        var versions = ["1.2.1","1.1.2","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplexer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplexer/README.html