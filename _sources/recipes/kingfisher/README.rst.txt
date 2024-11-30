:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kingfisher'
.. highlight: bash

kingfisher
==========

.. conda:recipe:: kingfisher
   :replaces_section_title:
   :noindex:

   Download\/extract biological FASTA\/Q read data and metadata

   :homepage: https://github.com/wwood/kingfisher-download
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kingfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher/meta.yaml>`_

   


.. conda:package:: kingfisher

   |downloads_kingfisher| |docker_kingfisher|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.2-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends aria2: ``>=1.36.0``
   :depends awscli: 
   :depends bird_tool_utils_python: ``>=0.4.1``
   :depends curl: 
   :depends extern: 
   :depends pandas: 
   :depends pigz: 
   :depends pyarrow: 
   :depends python: 
   :depends requests: 
   :depends sra-tools: ``>=3.0.5``
   :depends sracat: 
   :depends tqdm: 
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

      mamba install kingfisher

   and update with::

      mamba update kingfisher

  To create a new environment, run::

      mamba create --name myenvname kingfisher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kingfisher:<tag>

   (see `kingfisher/tags`_ for valid values for ``<tag>``)


.. |downloads_kingfisher| image:: https://img.shields.io/conda/dn/bioconda/kingfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/kingfisher
   :alt:   (downloads)
.. |docker_kingfisher| image:: https://quay.io/repository/biocontainers/kingfisher/status
   :target: https://quay.io/repository/biocontainers/kingfisher
.. _`kingfisher/tags`: https://quay.io/repository/biocontainers/kingfisher?tab=tags


.. raw:: html

    <script>
        var package = "kingfisher";
        var versions = ["0.4.1","0.3.1","0.3.0","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kingfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kingfisher/README.html