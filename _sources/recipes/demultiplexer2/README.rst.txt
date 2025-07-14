:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplexer2'
.. highlight: bash

demultiplexer2
==============

.. conda:recipe:: demultiplexer2
   :replaces_section_title:
   :noindex:

   A python command line interface to demultiplex illumina reads.

   :homepage: https://github.com/DominikBuchner/demultiplexer2
   :documentation: https://github.com/DominikBuchner/demultiplexer2/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`demultiplexer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer2/meta.yaml>`_

   


.. conda:package:: demultiplexer2

   |downloads_demultiplexer2| |docker_demultiplexer2|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.5-0``

      

   
   :depends biopython: ``>=1.84``
   :depends joblib: ``>=0.16.0``
   :depends luddite: ``>=1.0.4``
   :depends numpy: ``>=1.24.0,<2.0.0``
   :depends openpyxl: ``>=3.1.1``
   :depends pandas: ``>=2.2.3``
   :depends psutil: ``>=5.7.3``
   :depends python: ``>=3.8``
   :depends tqdm: ``>=4.66.4``
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

      mamba install demultiplexer2

   and update with::

      mamba update demultiplexer2

  To create a new environment, run::

      mamba create --name myenvname demultiplexer2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/demultiplexer2:<tag>

   (see `demultiplexer2/tags`_ for valid values for ``<tag>``)


.. |downloads_demultiplexer2| image:: https://img.shields.io/conda/dn/bioconda/demultiplexer2.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplexer2
   :alt:   (downloads)
.. |docker_demultiplexer2| image:: https://quay.io/repository/biocontainers/demultiplexer2/status
   :target: https://quay.io/repository/biocontainers/demultiplexer2
.. _`demultiplexer2/tags`: https://quay.io/repository/biocontainers/demultiplexer2?tab=tags


.. raw:: html

    <script>
        var package = "demultiplexer2";
        var versions = ["1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplexer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplexer2/README.html