:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'talon'
.. highlight: bash

talon
=====

.. conda:recipe:: talon
   :replaces_section_title:
   :noindex:

   TALON is a Python package for identifying and quantifying known and novel 
   genes\/isoforms in long\-read transcriptome data sets. TALON is 
   technology\-agnostic in that it works from mapped SAM files\, 
   allowing data from different sequencing platforms 
   \(i.e. PacBio and Oxford Nanopore\) to be analyzed side by side.

   :homepage: https://github.com/mortazavilab/TALON
   :license: MIT
   :recipe: /`talon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon/meta.yaml>`_

   


.. conda:package:: talon

   |downloads_talon| |docker_talon|

   :versions:
      
      

      ``5.0-0``,  ``v5.0-1``,  ``v5.0-0``

      

   
   :depends pandas: 
   :depends pybedtools: 
   :depends pyfaidx: 
   :depends pysam: ``>=0.15.4``
   :depends python: ``>=3.6,<=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install talon

   and update with::

      conda update talon

   or use the docker container::

      docker pull quay.io/biocontainers/talon:<tag>

   (see `talon/tags`_ for valid values for ``<tag>``)


.. |downloads_talon| image:: https://img.shields.io/conda/dn/bioconda/talon.svg?style=flat
   :target: https://anaconda.org/bioconda/talon
   :alt:   (downloads)
.. |docker_talon| image:: https://quay.io/repository/biocontainers/talon/status
   :target: https://quay.io/repository/biocontainers/talon
.. _`talon/tags`: https://quay.io/repository/biocontainers/talon?tab=tags


.. raw:: html

    <script>
        var package = "talon";
        var versions = ["5.0","v5.0","v5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/talon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/talon/README.html