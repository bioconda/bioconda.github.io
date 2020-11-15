:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porfast'
.. highlight: bash

porfast
=======

.. conda:recipe:: porfast
   :replaces_section_title:
   :noindex:

   Extract ORFs from paired end Illumina reads \(FASTQ\).

   :homepage: https://github.com/telatin/porfast
   :license: MIT
   :recipe: /`porfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porfast/meta.yaml>`_

   


.. conda:package:: porfast

   |downloads_porfast| |docker_porfast|

   :versions:
      
      

      ``0.8.0-1``,  ``0.8.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install porfast

   and update with::

      conda update porfast

   or use the docker container::

      docker pull quay.io/biocontainers/porfast:<tag>

   (see `porfast/tags`_ for valid values for ``<tag>``)


.. |downloads_porfast| image:: https://img.shields.io/conda/dn/bioconda/porfast.svg?style=flat
   :target: https://anaconda.org/bioconda/porfast
   :alt:   (downloads)
.. |docker_porfast| image:: https://quay.io/repository/biocontainers/porfast/status
   :target: https://quay.io/repository/biocontainers/porfast
.. _`porfast/tags`: https://quay.io/repository/biocontainers/porfast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porfast/README.html