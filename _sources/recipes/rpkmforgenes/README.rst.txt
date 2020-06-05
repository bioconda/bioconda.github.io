:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpkmforgenes'
.. highlight: bash

rpkmforgenes
============

.. conda:recipe:: rpkmforgenes
   :replaces_section_title:
   :noindex:

   Calculates gene expression from a read mapping file

   :homepage: https://github.com/danielramskold/S3_species-specific_sequencing
   :license: Creative Commons Attribution License
   :recipe: /`rpkmforgenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes/meta.yaml>`_

   


.. conda:package:: rpkmforgenes

   |downloads_rpkmforgenes| |docker_rpkmforgenes|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rpkmforgenes

   and update with::

      conda update rpkmforgenes

   or use the docker container::

      docker pull quay.io/biocontainers/rpkmforgenes:<tag>

   (see `rpkmforgenes/tags`_ for valid values for ``<tag>``)


.. |downloads_rpkmforgenes| image:: https://img.shields.io/conda/dn/bioconda/rpkmforgenes.svg?style=flat
   :target: https://anaconda.org/bioconda/rpkmforgenes
   :alt:   (downloads)
.. |docker_rpkmforgenes| image:: https://quay.io/repository/biocontainers/rpkmforgenes/status
   :target: https://quay.io/repository/biocontainers/rpkmforgenes
.. _`rpkmforgenes/tags`: https://quay.io/repository/biocontainers/rpkmforgenes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpkmforgenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpkmforgenes/README.html