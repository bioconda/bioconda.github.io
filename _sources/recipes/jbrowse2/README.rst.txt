:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jbrowse2'
.. highlight: bash

jbrowse2
========

.. conda:recipe:: jbrowse2
   :replaces_section_title:
   :noindex:

   The JBrowse 2 Genome Browser

   :homepage: https://jbrowse.org/
   :license: Apache / Apache-2.0
   :recipe: /`jbrowse2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse2/meta.yaml>`_
   :links: biotools: :biotools:`jbrowse`, doi: :doi:`10.1101/gr.094607.109`

   


.. conda:package:: jbrowse2

   |downloads_jbrowse2| |docker_jbrowse2|

   :versions:
      
      

      ``1.3.3-0``,  ``1.3.2-0``

      

   
   :depends bcftools: 
   :depends gff3sort: 
   :depends htslib: 
   :depends nodejs: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jbrowse2

   and update with::

      conda update jbrowse2

   or use the docker container::

      docker pull quay.io/biocontainers/jbrowse2:<tag>

   (see `jbrowse2/tags`_ for valid values for ``<tag>``)


.. |downloads_jbrowse2| image:: https://img.shields.io/conda/dn/bioconda/jbrowse2.svg?style=flat
   :target: https://anaconda.org/bioconda/jbrowse2
   :alt:   (downloads)
.. |docker_jbrowse2| image:: https://quay.io/repository/biocontainers/jbrowse2/status
   :target: https://quay.io/repository/biocontainers/jbrowse2
.. _`jbrowse2/tags`: https://quay.io/repository/biocontainers/jbrowse2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jbrowse2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jbrowse2/README.html