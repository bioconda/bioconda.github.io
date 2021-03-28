:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rucs'
.. highlight: bash

rucs
====

.. conda:recipe:: rucs
   :replaces_section_title:
   :noindex:

   RUCS is a bioinformatics tool developed to ease the task of designing new primers.

   :homepage: https://bitbucket.org/genomicepidemiology/rucs/src/master/
   :documentation: https://cge.cbs.dtu.dk/services/rucs/instructions.php
   
   :license: APACHE / Apache-2.0
   :recipe: /`rucs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rucs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rucs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx526`

   


.. conda:package:: rucs

   |downloads_rucs| |docker_rucs|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends blast: 
   :depends bwa: 
   :depends numpy: 
   :depends primer3-py: 
   :depends python: ``>=3.5``
   :depends samtools: 
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rucs

   and update with::

      conda update rucs

   or use the docker container::

      docker pull quay.io/biocontainers/rucs:<tag>

   (see `rucs/tags`_ for valid values for ``<tag>``)


.. |downloads_rucs| image:: https://img.shields.io/conda/dn/bioconda/rucs.svg?style=flat
   :target: https://anaconda.org/bioconda/rucs
   :alt:   (downloads)
.. |docker_rucs| image:: https://quay.io/repository/biocontainers/rucs/status
   :target: https://quay.io/repository/biocontainers/rucs
.. _`rucs/tags`: https://quay.io/repository/biocontainers/rucs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rucs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rucs/README.html