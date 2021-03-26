:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'razers3'
.. highlight: bash

razers3
=======

.. conda:recipe:: razers3
   :replaces_section_title:
   :noindex:

   RazerS 3 \- Faster\, fully sensitive read mapping

   :homepage: http://www.seqan.de/projects/razers/
   :license: GPLv3
   :recipe: /`razers3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3/meta.yaml>`_

   


.. conda:package:: razers3

   |downloads_razers3| |docker_razers3|

   :versions:
      
      

      ``3.5.8-1``,  ``3.5.8-0``,  ``3.5.3-3``,  ``3.5.3-2``,  ``3.5.3-1``,  ``3.5.3-0``,  ``3.5.0-1``,  ``3.5.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install razers3

   and update with::

      conda update razers3

   or use the docker container::

      docker pull quay.io/biocontainers/razers3:<tag>

   (see `razers3/tags`_ for valid values for ``<tag>``)


.. |downloads_razers3| image:: https://img.shields.io/conda/dn/bioconda/razers3.svg?style=flat
   :target: https://anaconda.org/bioconda/razers3
   :alt:   (downloads)
.. |docker_razers3| image:: https://quay.io/repository/biocontainers/razers3/status
   :target: https://quay.io/repository/biocontainers/razers3
.. _`razers3/tags`: https://quay.io/repository/biocontainers/razers3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/razers3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/razers3/README.html