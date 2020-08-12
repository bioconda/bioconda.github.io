:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magpurify'
.. highlight: bash

magpurify
=========

.. conda:recipe:: magpurify
   :replaces_section_title:
   :noindex:

   Identify and remove incorrectly binned contigs from metagenome\-assembled genomes.

   :homepage: https://github.com/snayfach/MAGpurify
   :license: GPL / GPL-3
   :recipe: /`magpurify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify/meta.yaml>`_

   


.. conda:package:: magpurify

   |downloads_magpurify| |docker_magpurify|

   :versions:
      
      

      ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends biopython: 
   :depends blast: 
   :depends coverm: 
   :depends hmmer: 
   :depends last: 
   :depends mash: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magpurify

   and update with::

      conda update magpurify

   or use the docker container::

      docker pull quay.io/biocontainers/magpurify:<tag>

   (see `magpurify/tags`_ for valid values for ``<tag>``)


.. |downloads_magpurify| image:: https://img.shields.io/conda/dn/bioconda/magpurify.svg?style=flat
   :target: https://anaconda.org/bioconda/magpurify
   :alt:   (downloads)
.. |docker_magpurify| image:: https://quay.io/repository/biocontainers/magpurify/status
   :target: https://quay.io/repository/biocontainers/magpurify
.. _`magpurify/tags`: https://quay.io/repository/biocontainers/magpurify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magpurify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magpurify/README.html