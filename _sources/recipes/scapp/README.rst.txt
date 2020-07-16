:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scapp'
.. highlight: bash

scapp
=====

.. conda:recipe:: scapp
   :replaces_section_title:
   :noindex:

   Plasmid assembly in metagenomes

   :homepage: https://github.com/Shamir-Lab/SCAPP
   :license: MIT / MIT
   :recipe: /`scapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scapp/meta.yaml>`_

   


.. conda:package:: scapp

   |downloads_scapp| |docker_scapp|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends blast: 
   :depends bwa: 
   :depends networkx: ``2.4.*``
   :depends plasclass: 
   :depends pysam: ``0.15.3.*``
   :depends python: ``>=3.7``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scapp

   and update with::

      conda update scapp

   or use the docker container::

      docker pull quay.io/biocontainers/scapp:<tag>

   (see `scapp/tags`_ for valid values for ``<tag>``)


.. |downloads_scapp| image:: https://img.shields.io/conda/dn/bioconda/scapp.svg?style=flat
   :target: https://anaconda.org/bioconda/scapp
   :alt:   (downloads)
.. |docker_scapp| image:: https://quay.io/repository/biocontainers/scapp/status
   :target: https://quay.io/repository/biocontainers/scapp
.. _`scapp/tags`: https://quay.io/repository/biocontainers/scapp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scapp/README.html