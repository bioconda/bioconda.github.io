:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamtocov'
.. highlight: bash

bamtocov
========

.. conda:recipe:: bamtocov
   :replaces_section_title:
   :noindex:

   Extract coverage information from BAM files\, supporting stranded and physical coverage and streams.

   :homepage: https://github.com/telatin/bamtocov
   :license: MIT
   :recipe: /`bamtocov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov/meta.yaml>`_

   


.. conda:package:: bamtocov

   |downloads_bamtocov| |docker_bamtocov|

   :versions:
      
      

      ``2.0.001-0``,  ``2.0.000-0``

      

   
   :depends htslib: ``>=1.11,<1.12.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends pcre: ``>=8.44,<9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamtocov

   and update with::

      conda update bamtocov

   or use the docker container::

      docker pull quay.io/biocontainers/bamtocov:<tag>

   (see `bamtocov/tags`_ for valid values for ``<tag>``)


.. |downloads_bamtocov| image:: https://img.shields.io/conda/dn/bioconda/bamtocov.svg?style=flat
   :target: https://anaconda.org/bioconda/bamtocov
   :alt:   (downloads)
.. |docker_bamtocov| image:: https://quay.io/repository/biocontainers/bamtocov/status
   :target: https://quay.io/repository/biocontainers/bamtocov
.. _`bamtocov/tags`: https://quay.io/repository/biocontainers/bamtocov?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamtocov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamtocov/README.html