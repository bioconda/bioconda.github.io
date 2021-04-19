:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribocutter'
.. highlight: bash

ribocutter
==========

.. conda:recipe:: ribocutter
   :replaces_section_title:
   :noindex:

   Design oligos to produce sgRNAs for abundant sequences in a fastq file

   :homepage: https://github.com/Delayed-Gitification/ribocutter.git
   :license: MIT / MIT
   :recipe: /`ribocutter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocutter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocutter/meta.yaml>`_

   


.. conda:package:: ribocutter

   |downloads_ribocutter| |docker_ribocutter|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends dnaio: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribocutter

   and update with::

      conda update ribocutter

   or use the docker container::

      docker pull quay.io/biocontainers/ribocutter:<tag>

   (see `ribocutter/tags`_ for valid values for ``<tag>``)


.. |downloads_ribocutter| image:: https://img.shields.io/conda/dn/bioconda/ribocutter.svg?style=flat
   :target: https://anaconda.org/bioconda/ribocutter
   :alt:   (downloads)
.. |docker_ribocutter| image:: https://quay.io/repository/biocontainers/ribocutter/status
   :target: https://quay.io/repository/biocontainers/ribocutter
.. _`ribocutter/tags`: https://quay.io/repository/biocontainers/ribocutter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribocutter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribocutter/README.html