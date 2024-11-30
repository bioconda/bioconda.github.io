:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crabs'
.. highlight: bash

crabs
=====

.. conda:recipe:: crabs
   :replaces_section_title:
   :noindex:

   Crabs \(Creating Reference databases for Amplicon\-Based Sequencing\) is a program to download and curate reference databases for eDNA metabarcoding analyses.

   :homepage: https://github.com/gjeunen/reference_database_creator
   :license: MIT / MIT
   :recipe: /`crabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crabs/meta.yaml>`_

   


.. conda:package:: crabs

   |downloads_crabs| |docker_crabs|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends cutadapt: ``>=3.4``
   :depends matplotlib-base: 
   :depends muscle: 
   :depends numpy: 
   :depends pandas: ``>=0.23.4``
   :depends python: ``>=3.6``
   :depends requests: 
   :depends rich: 
   :depends rich-click: 
   :depends tqdm: 
   :depends vsearch: ``>=2.13.3``
   :depends wget: 
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

      mamba install crabs

   and update with::

      mamba update crabs

  To create a new environment, run::

      mamba create --name myenvname crabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crabs:<tag>

   (see `crabs/tags`_ for valid values for ``<tag>``)


.. |downloads_crabs| image:: https://img.shields.io/conda/dn/bioconda/crabs.svg?style=flat
   :target: https://anaconda.org/bioconda/crabs
   :alt:   (downloads)
.. |docker_crabs| image:: https://quay.io/repository/biocontainers/crabs/status
   :target: https://quay.io/repository/biocontainers/crabs
.. _`crabs/tags`: https://quay.io/repository/biocontainers/crabs?tab=tags


.. raw:: html

    <script>
        var package = "crabs";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crabs/README.html