:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structureharvester'
.. highlight: bash

structureharvester
==================

.. conda:recipe:: structureharvester
   :replaces_section_title:
   :noindex:

   structureHarvester.py is a Python script capable of extracting all the relevant data from STRUCTURE results files

   :homepage: http://alumni.soe.ucsc.edu/~dearl/software/structureHarvester/
   :license: MIT
   :recipe: /`structureharvester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structureharvester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structureharvester/meta.yaml>`_

   


.. conda:package:: structureharvester

   |downloads_structureharvester| |docker_structureharvester|

   :versions:
      
      

      ``0.6.94-3``,  ``0.6.94-2``,  ``0.6.94-1``,  ``0.6.94-0``

      

   
   :depends python: ``<3``
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

      mamba install structureharvester

   and update with::

      mamba update structureharvester

  To create a new environment, run::

      mamba create --name myenvname structureharvester

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/structureharvester:<tag>

   (see `structureharvester/tags`_ for valid values for ``<tag>``)


.. |downloads_structureharvester| image:: https://img.shields.io/conda/dn/bioconda/structureharvester.svg?style=flat
   :target: https://anaconda.org/bioconda/structureharvester
   :alt:   (downloads)
.. |docker_structureharvester| image:: https://quay.io/repository/biocontainers/structureharvester/status
   :target: https://quay.io/repository/biocontainers/structureharvester
.. _`structureharvester/tags`: https://quay.io/repository/biocontainers/structureharvester?tab=tags


.. raw:: html

    <script>
        var package = "structureharvester";
        var versions = ["0.6.94","0.6.94","0.6.94","0.6.94"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structureharvester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structureharvester/README.html