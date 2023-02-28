:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylextract'
.. highlight: bash

methylextract
=============

.. conda:recipe:: methylextract
   :replaces_section_title:
   :noindex:

   High\-Quality methylation maps and SNV calling from whole genome bisulfite sequencing data

   :homepage: http://bioinfo2.ugr.es/MethylExtract/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`methylextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract/meta.yaml>`_

   


.. conda:package:: methylextract

   |downloads_methylextract| |docker_methylextract|

   :versions:
      
      

      ``1.9.1-1``,  ``1.9.1-0``

      

   
   :depends perl: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methylextract

   and update with::

      conda update methylextract

   or use the docker container::

      docker pull quay.io/biocontainers/methylextract:<tag>

   (see `methylextract/tags`_ for valid values for ``<tag>``)


.. |downloads_methylextract| image:: https://img.shields.io/conda/dn/bioconda/methylextract.svg?style=flat
   :target: https://anaconda.org/bioconda/methylextract
   :alt:   (downloads)
.. |docker_methylextract| image:: https://quay.io/repository/biocontainers/methylextract/status
   :target: https://quay.io/repository/biocontainers/methylextract
.. _`methylextract/tags`: https://quay.io/repository/biocontainers/methylextract?tab=tags


.. raw:: html

    <script>
        var package = "methylextract";
        var versions = ["1.9.1","1.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylextract/README.html