:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblyutility'
.. highlight: bash

assemblyutility
===============

.. conda:recipe:: assemblyutility
   :replaces_section_title:
   :noindex:

   Tools for DBG2OLC genoome assembler

   :homepage: https://github.com/yechengxi/AssemblyUtility
   :license: MIT
   :recipe: /`assemblyutility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility/meta.yaml>`_

   


.. conda:package:: assemblyutility

   |downloads_assemblyutility| |docker_assemblyutility|

   :versions:
      
      

      ``20160209-7``,  ``20160209-6``,  ``20160209-5``,  ``20160209-4``,  ``20160209-3``,  ``20160209-2``,  ``20160209-1``,  ``20160209-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install assemblyutility

   and update with::

      mamba update assemblyutility

  To create a new environment, run::

      mamba create --name myenvname assemblyutility

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/assemblyutility:<tag>

   (see `assemblyutility/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblyutility| image:: https://img.shields.io/conda/dn/bioconda/assemblyutility.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblyutility
   :alt:   (downloads)
.. |docker_assemblyutility| image:: https://quay.io/repository/biocontainers/assemblyutility/status
   :target: https://quay.io/repository/biocontainers/assemblyutility
.. _`assemblyutility/tags`: https://quay.io/repository/biocontainers/assemblyutility?tab=tags


.. raw:: html

    <script>
        var package = "assemblyutility";
        var versions = ["20160209","20160209","20160209","20160209","20160209"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblyutility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblyutility/README.html