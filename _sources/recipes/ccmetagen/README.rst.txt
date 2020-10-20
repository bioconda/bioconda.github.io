:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccmetagen'
.. highlight: bash

ccmetagen
=========

.. conda:recipe:: ccmetagen
   :replaces_section_title:
   :noindex:

   CCMetagen\: comprehensive and accurate identification of eukaryotes and prokaryotes in metagenomic data.

   :homepage: https://github.com/vrmarcelino/CCMetagen
   :license: GPL3 / GPL3
   :recipe: /`ccmetagen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccmetagen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccmetagen/meta.yaml>`_

   


.. conda:package:: ccmetagen

   |downloads_ccmetagen| |docker_ccmetagen|

   :versions:
      
      

      ``1.2.5-0``

      

   
   :depends ete3: 
   :depends kma: ``>=1.3``
   :depends krona: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ccmetagen

   and update with::

      conda update ccmetagen

   or use the docker container::

      docker pull quay.io/biocontainers/ccmetagen:<tag>

   (see `ccmetagen/tags`_ for valid values for ``<tag>``)


.. |downloads_ccmetagen| image:: https://img.shields.io/conda/dn/bioconda/ccmetagen.svg?style=flat
   :target: https://anaconda.org/bioconda/ccmetagen
   :alt:   (downloads)
.. |docker_ccmetagen| image:: https://quay.io/repository/biocontainers/ccmetagen/status
   :target: https://quay.io/repository/biocontainers/ccmetagen
.. _`ccmetagen/tags`: https://quay.io/repository/biocontainers/ccmetagen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccmetagen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccmetagen/README.html