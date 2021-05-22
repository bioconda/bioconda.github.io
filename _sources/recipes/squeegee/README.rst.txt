:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squeegee'
.. highlight: bash

squeegee
========

.. conda:recipe:: squeegee
   :replaces_section_title:
   :noindex:

   squeegee\, de novo computational contamination detection tool for metagenomic samples

   :homepage: https://gitlab.com/treangenlab/squeegee
   :license: MIT
   :recipe: /`squeegee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeegee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeegee/meta.yaml>`_

   


.. conda:package:: squeegee

   |downloads_squeegee| |docker_squeegee|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends biopython: 
   :depends bowtie2: ``>=2.3.5``
   :depends kraken: ``>=1.1.1``
   :depends mash: ``>=2.2.2``
   :depends meryl: ``>=1.2``
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squeegee

   and update with::

      conda update squeegee

   or use the docker container::

      docker pull quay.io/biocontainers/squeegee:<tag>

   (see `squeegee/tags`_ for valid values for ``<tag>``)


.. |downloads_squeegee| image:: https://img.shields.io/conda/dn/bioconda/squeegee.svg?style=flat
   :target: https://anaconda.org/bioconda/squeegee
   :alt:   (downloads)
.. |docker_squeegee| image:: https://quay.io/repository/biocontainers/squeegee/status
   :target: https://quay.io/repository/biocontainers/squeegee
.. _`squeegee/tags`: https://quay.io/repository/biocontainers/squeegee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeegee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeegee/README.html