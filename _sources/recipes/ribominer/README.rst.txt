:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribominer'
.. highlight: bash

ribominer
=========

.. conda:recipe:: ribominer
   :replaces_section_title:
   :noindex:

   A python toolset for mining multi\-dimensional features of the translatome with ribosome profiling data

   :homepage: https://github.com/xryanglab/RiboMiner
   :license: GPL3 / GPLv3.0
   :recipe: /`ribominer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribominer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribominer/meta.yaml>`_

   


.. conda:package:: ribominer

   |downloads_ribominer| |docker_ribominer|

   :versions:
      
      

      ``0.2.3.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends htseq: 
   :depends matplotlib-base: ``>=2.1.0``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends pysam: ``>=0.15.2``
   :depends pysamstats: 
   :depends python: 
   :depends ribocode: ``>=1.2.10``
   :depends scipy: ``>=1.1.0``
   :depends seaborn: ``>=0.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribominer

   and update with::

      conda update ribominer

   or use the docker container::

      docker pull quay.io/biocontainers/ribominer:<tag>

   (see `ribominer/tags`_ for valid values for ``<tag>``)


.. |downloads_ribominer| image:: https://img.shields.io/conda/dn/bioconda/ribominer.svg?style=flat
   :target: https://anaconda.org/bioconda/ribominer
   :alt:   (downloads)
.. |docker_ribominer| image:: https://quay.io/repository/biocontainers/ribominer/status
   :target: https://quay.io/repository/biocontainers/ribominer
.. _`ribominer/tags`: https://quay.io/repository/biocontainers/ribominer?tab=tags


.. raw:: html

    <script>
        var package = "ribominer";
        var versions = ["0.2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribominer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribominer/README.html