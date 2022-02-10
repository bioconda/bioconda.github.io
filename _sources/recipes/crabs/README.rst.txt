:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crabs'
.. highlight: bash

crabs
=====

.. conda:recipe:: crabs
   :replaces_section_title:
   :noindex:

   Crabs \(Creating Reference databases for Amplicon\-Based Sequencing\) is a program to download and curate reference databases for eDNA metabarcoding analyses

   :homepage: https://github.com/gjeunen/reference_database_creator
   :license: MIT License
   :recipe: /`crabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crabs/meta.yaml>`_

   


.. conda:package:: crabs

   |downloads_crabs| |docker_crabs|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends argparse: 
   :depends biopython: ``1.78.*``
   :depends cutadapt: ``>=3.4``
   :depends matplotlib-base: 
   :depends muscle: ``>=3.8.31``
   :depends numpy: 
   :depends pandas: ``>=0.23.4``
   :depends python: ``>=3.6.10``
   :depends tqdm: 
   :depends vsearch: ``>=2.13.3``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crabs

   and update with::

      conda update crabs

   or use the docker container::

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
        var versions = ["0.1.1"];
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