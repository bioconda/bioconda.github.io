:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultra_bioinformatics'
.. highlight: bash

ultra_bioinformatics
====================

.. conda:recipe:: ultra_bioinformatics
   :replaces_section_title:
   :noindex:

   Splice aligner of long transcriptomic reads to genome.

   :homepage: https://github.com/ksahlin/uLTRA
   :license: GPL3 / GNU GPLV3
   :recipe: /`ultra_bioinformatics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics/meta.yaml>`_

   


.. conda:package:: ultra_bioinformatics

   |downloads_ultra_bioinformatics| |docker_ultra_bioinformatics|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3.3-1``,  ``0.0.3.3-0``

      

   
   :depends dill: 
   :depends edlib: 
   :depends gffutils: 
   :depends intervaltree: 
   :depends minimap2: 
   :depends mummer: 
   :depends parasail-python: 
   :depends pysam: 
   :depends python: 
   :depends python-edlib: 
   :depends slamem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ultra_bioinformatics

   and update with::

      conda update ultra_bioinformatics

   or use the docker container::

      docker pull quay.io/biocontainers/ultra_bioinformatics:<tag>

   (see `ultra_bioinformatics/tags`_ for valid values for ``<tag>``)


.. |downloads_ultra_bioinformatics| image:: https://img.shields.io/conda/dn/bioconda/ultra_bioinformatics.svg?style=flat
   :target: https://anaconda.org/bioconda/ultra_bioinformatics
   :alt:   (downloads)
.. |docker_ultra_bioinformatics| image:: https://quay.io/repository/biocontainers/ultra_bioinformatics/status
   :target: https://quay.io/repository/biocontainers/ultra_bioinformatics
.. _`ultra_bioinformatics/tags`: https://quay.io/repository/biocontainers/ultra_bioinformatics?tab=tags


.. raw:: html

    <script>
        var package = "ultra_bioinformatics";
        var versions = ["0.0.4","0.0.3.3","0.0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultra_bioinformatics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultra_bioinformatics/README.html