:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrsfast'
.. highlight: bash

mrsfast
=======

.. conda:recipe:: mrsfast
   :replaces_section_title:
   :noindex:

   mrsFAST \- micro\-read substitution\-only Fast Alignment Search Tool.

   :homepage: https://github.com/sfu-compbio/mrsfast
   :license: BSD
   :recipe: /`mrsfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrsfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrsfast/meta.yaml>`_

   


.. conda:package:: mrsfast

   |downloads_mrsfast| |docker_mrsfast|

   :versions:
      
      

      ``3.4.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mrsfast

   and update with::

      conda update mrsfast

   or use the docker container::

      docker pull quay.io/biocontainers/mrsfast:<tag>

   (see `mrsfast/tags`_ for valid values for ``<tag>``)


.. |downloads_mrsfast| image:: https://img.shields.io/conda/dn/bioconda/mrsfast.svg?style=flat
   :target: https://anaconda.org/bioconda/mrsfast
   :alt:   (downloads)
.. |docker_mrsfast| image:: https://quay.io/repository/biocontainers/mrsfast/status
   :target: https://quay.io/repository/biocontainers/mrsfast
.. _`mrsfast/tags`: https://quay.io/repository/biocontainers/mrsfast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrsfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrsfast/README.html