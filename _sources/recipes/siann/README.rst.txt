:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'siann'
.. highlight: bash

siann
=====

.. conda:recipe:: siann
   :replaces_section_title:
   :noindex:

   SIANN was created to allow creation of local small sets of bacterial\/viral genomes to perform strain level differentiation from fastq data

   :homepage: https://github.com/signaturescience/siann/wiki
   :license: GPL3
   :recipe: /`siann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siann/meta.yaml>`_

   


.. conda:package:: siann

   |downloads_siann| |docker_siann|

   :versions:
      
      

      ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends bowtie2: 
   :depends mummer: 
   :depends parallel: 
   :depends python: ``2.*``
   :depends scipy: 
   :depends time: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install siann

   and update with::

      conda update siann

   or use the docker container::

      docker pull quay.io/biocontainers/siann:<tag>

   (see `siann/tags`_ for valid values for ``<tag>``)


.. |downloads_siann| image:: https://img.shields.io/conda/dn/bioconda/siann.svg?style=flat
   :target: https://anaconda.org/bioconda/siann
   :alt:   (downloads)
.. |docker_siann| image:: https://quay.io/repository/biocontainers/siann/status
   :target: https://quay.io/repository/biocontainers/siann
.. _`siann/tags`: https://quay.io/repository/biocontainers/siann?tab=tags


.. raw:: html

    <script>
        var package = "siann";
        var versions = ["1.3","1.2","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/siann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/siann/README.html