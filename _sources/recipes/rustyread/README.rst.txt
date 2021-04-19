:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustyread'
.. highlight: bash

rustyread
=========

.. conda:recipe:: rustyread
   :replaces_section_title:
   :noindex:

   Rustyread\, a long\-read simulator

   :homepage: https://github.com/natir/rustyread
   :license: MIT / MIT
   :recipe: /`rustyread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustyread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustyread/meta.yaml>`_

   


.. conda:package:: rustyread

   |downloads_rustyread| |docker_rustyread|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rustyread

   and update with::

      conda update rustyread

   or use the docker container::

      docker pull quay.io/biocontainers/rustyread:<tag>

   (see `rustyread/tags`_ for valid values for ``<tag>``)


.. |downloads_rustyread| image:: https://img.shields.io/conda/dn/bioconda/rustyread.svg?style=flat
   :target: https://anaconda.org/bioconda/rustyread
   :alt:   (downloads)
.. |docker_rustyread| image:: https://quay.io/repository/biocontainers/rustyread/status
   :target: https://quay.io/repository/biocontainers/rustyread
.. _`rustyread/tags`: https://quay.io/repository/biocontainers/rustyread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustyread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustyread/README.html