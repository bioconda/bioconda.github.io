:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seabreeze-genomics'
.. highlight: bash

seabreeze-genomics
==================

.. conda:recipe:: seabreeze-genomics
   :replaces_section_title:
   :noindex:

   Analyzing Structural Variation Between Bacterial Genome Assemblies.

   :homepage: https://github.com/barricklab/seabreeze
   :documentation: https://barricklab.github.io/seabreeze
   
   :license: MIT / MIT
   :recipe: /`seabreeze-genomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seabreeze-genomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seabreeze-genomics/meta.yaml>`_

   


.. conda:package:: seabreeze-genomics

   |downloads_seabreeze-genomics| |docker_seabreeze-genomics|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends click: 
   :depends coloredlogs: 
   :depends numpy: 
   :depends pandas: 
   :depends pytest: 
   :depends python: ``>=3.11``
   :depends snakemake-minimal: ``<8``
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

      mamba install seabreeze-genomics

   and update with::

      mamba update seabreeze-genomics

  To create a new environment, run::

      mamba create --name myenvname seabreeze-genomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seabreeze-genomics:<tag>

   (see `seabreeze-genomics/tags`_ for valid values for ``<tag>``)


.. |downloads_seabreeze-genomics| image:: https://img.shields.io/conda/dn/bioconda/seabreeze-genomics.svg?style=flat
   :target: https://anaconda.org/bioconda/seabreeze-genomics
   :alt:   (downloads)
.. |docker_seabreeze-genomics| image:: https://quay.io/repository/biocontainers/seabreeze-genomics/status
   :target: https://quay.io/repository/biocontainers/seabreeze-genomics
.. _`seabreeze-genomics/tags`: https://quay.io/repository/biocontainers/seabreeze-genomics?tab=tags


.. raw:: html

    <script>
        var package = "seabreeze-genomics";
        var versions = ["1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seabreeze-genomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seabreeze-genomics/README.html