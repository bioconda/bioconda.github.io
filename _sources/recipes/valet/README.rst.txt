:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'valet'
.. highlight: bash

valet
=====

.. conda:recipe:: valet
   :replaces_section_title:

   Pipeline for detecting mis\-assemblies in metagenomic assemblies

   :homepage: https://github.com/marbl/VALET
   :license: MIT
   :recipe: /`valet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/valet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/valet/meta.yaml>`_

   


.. conda:package:: valet

   |downloads_valet| |docker_valet|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends bedtools: 
   :depends bowtie2: 
   :depends numpy: 
   :depends perl: 
   :depends python: <3
   :depends r-base: 
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install valet

   and update with::

      conda update valet

   or use the docker container::

      docker pull quay.io/biocontainers/valet:<tag>

   (see `valet/tags`_ for valid values for ``<tag>``)


.. |downloads_valet| image:: https://img.shields.io/conda/dn/bioconda/valet.svg?style=flat
   :target: https://anaconda.org/bioconda/valet
   :alt:   (downloads)
.. |docker_valet| image:: https://quay.io/repository/biocontainers/valet/status
   :target: https://quay.io/repository/biocontainers/valet
.. _`valet/tags`: https://quay.io/repository/biocontainers/valet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/valet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/valet/README.html