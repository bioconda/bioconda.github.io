:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smcounter2'
.. highlight: bash

smcounter2
==========

.. conda:recipe:: smcounter2
   :replaces_section_title:
   :noindex:

   smCounter2\: an accurate low\-frequency variant caller for targeted sequencing data with unique molecular identifiers

   :homepage: https://github.com/qiaseq/qiaseq-smcounter-v2
   :license: MIT
   :recipe: /`smcounter2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2/meta.yaml>`_

   


.. conda:package:: smcounter2

   |downloads_smcounter2| |docker_smcounter2|

   :versions:
      
      

      ``0.1.2018.08.28-2``,  ``0.1.2018.08.28-1``,  ``0.1.2018.08.28-0``

      

   
   :depends bedtools: 
   :depends openpyxl: 
   :depends pysam: 
   :depends python: ``<3``
   :depends r-base: 
   :depends r-plyr: 
   :depends scipy: 
   :depends statistics: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smcounter2

   and update with::

      conda update smcounter2

   or use the docker container::

      docker pull quay.io/biocontainers/smcounter2:<tag>

   (see `smcounter2/tags`_ for valid values for ``<tag>``)


.. |downloads_smcounter2| image:: https://img.shields.io/conda/dn/bioconda/smcounter2.svg?style=flat
   :target: https://anaconda.org/bioconda/smcounter2
   :alt:   (downloads)
.. |docker_smcounter2| image:: https://quay.io/repository/biocontainers/smcounter2/status
   :target: https://quay.io/repository/biocontainers/smcounter2
.. _`smcounter2/tags`: https://quay.io/repository/biocontainers/smcounter2?tab=tags


.. raw:: html

    <script>
        var package = "smcounter2";
        var versions = ["0.1.2018.08.28","0.1.2018.08.28","0.1.2018.08.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcounter2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcounter2/README.html