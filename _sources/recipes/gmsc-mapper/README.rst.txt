:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmsc-mapper'
.. highlight: bash

gmsc-mapper
===========

.. conda:recipe:: gmsc-mapper
   :replaces_section_title:
   :noindex:

   GMSC\-mapper is a command line tool to query the Global Microbial smORFs Catalog \(GMSC\).

   :homepage: https://github.com/BigDataBiology/GMSC-mapper
   :license: MIT / MIT
   :recipe: /`gmsc-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmsc-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmsc-mapper/meta.yaml>`_

   


.. conda:package:: gmsc-mapper

   |downloads_gmsc-mapper| |docker_gmsc-mapper|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends atomicwrites: 
   :depends biopython: 
   :depends bottleneck: 
   :depends certifi: 
   :depends diamond: ``>=2.0.13``
   :depends mmseqs2: 
   :depends numexpr: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pyparsing: 
   :depends pyrodigal: 
   :depends python: ``>=3.7``
   :depends python-dateutil: 
   :depends pytz: 
   :depends six: 
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

      mamba install gmsc-mapper

   and update with::

      mamba update gmsc-mapper

  To create a new environment, run::

      mamba create --name myenvname gmsc-mapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gmsc-mapper:<tag>

   (see `gmsc-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_gmsc-mapper| image:: https://img.shields.io/conda/dn/bioconda/gmsc-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/gmsc-mapper
   :alt:   (downloads)
.. |docker_gmsc-mapper| image:: https://quay.io/repository/biocontainers/gmsc-mapper/status
   :target: https://quay.io/repository/biocontainers/gmsc-mapper
.. _`gmsc-mapper/tags`: https://quay.io/repository/biocontainers/gmsc-mapper?tab=tags


.. raw:: html

    <script>
        var package = "gmsc-mapper";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmsc-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmsc-mapper/README.html