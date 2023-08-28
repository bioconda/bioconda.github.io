:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msp2db'
.. highlight: bash

msp2db
======

.. conda:recipe:: msp2db
   :replaces_section_title:
   :noindex:

   Python package to create an SQLite database from a collection of MSP mass spectromertry spectra files. Currently works with MSP files formated as MassBank records or as MoNA records. The resulting SQLite database can be used for spectral matching with msPurity Bioconductor R package\,

   :homepage: https://github.com/computational-metabolomics/msp2db
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`msp2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db/meta.yaml>`_

   


.. conda:package:: msp2db

   |downloads_msp2db| |docker_msp2db|

   :versions:
      
      

      ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.6-0``

      

   
   :depends pubchempy: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install msp2db

   and update with::

      mamba update msp2db

  To create a new environment, run::

      mamba create --name myenvname msp2db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msp2db:<tag>

   (see `msp2db/tags`_ for valid values for ``<tag>``)


.. |downloads_msp2db| image:: https://img.shields.io/conda/dn/bioconda/msp2db.svg?style=flat
   :target: https://anaconda.org/bioconda/msp2db
   :alt:   (downloads)
.. |docker_msp2db| image:: https://quay.io/repository/biocontainers/msp2db/status
   :target: https://quay.io/repository/biocontainers/msp2db
.. _`msp2db/tags`: https://quay.io/repository/biocontainers/msp2db?tab=tags


.. raw:: html

    <script>
        var package = "msp2db";
        var versions = ["0.0.9","0.0.9","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msp2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msp2db/README.html