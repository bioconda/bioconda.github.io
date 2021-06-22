:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saspector'
.. highlight: bash

saspector
=========

.. conda:recipe:: saspector
   :replaces_section_title:
   :noindex:

   A tool for analysis of missing regions in \(bacterial\) draft genomes.

   :homepage: https://github.com/alejocrojo09/SASpector
   :license: MIT
   :recipe: /`saspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saspector/meta.yaml>`_

   


.. conda:package:: saspector

   |downloads_saspector| |docker_saspector|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends progressbar: 
   :depends progressivemauve: 
   :depends prokka: 
   :depends python: ``>3``
   :depends quast: 
   :depends samtools: 
   :depends seaborn: 
   :depends sourmash: 
   :depends trf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install saspector

   and update with::

      conda update saspector

   or use the docker container::

      docker pull quay.io/biocontainers/saspector:<tag>

   (see `saspector/tags`_ for valid values for ``<tag>``)


.. |downloads_saspector| image:: https://img.shields.io/conda/dn/bioconda/saspector.svg?style=flat
   :target: https://anaconda.org/bioconda/saspector
   :alt:   (downloads)
.. |docker_saspector| image:: https://quay.io/repository/biocontainers/saspector/status
   :target: https://quay.io/repository/biocontainers/saspector
.. _`saspector/tags`: https://quay.io/repository/biocontainers/saspector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saspector/README.html