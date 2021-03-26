:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmlrc'
.. highlight: bash

fmlrc
=====

.. conda:recipe:: fmlrc
   :replaces_section_title:
   :noindex:

   A long\-read error correction tool using the multi\-string Burrows Wheeler Transform

   :homepage: https://github.com/holtjma/fmlrc
   :license: MIT / MIT
   :recipe: /`fmlrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2051-3`

   


.. conda:package:: fmlrc

   |downloads_fmlrc| |docker_fmlrc|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.2-0``

      

   
   :depends libcxx: ``>=11.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fmlrc

   and update with::

      conda update fmlrc

   or use the docker container::

      docker pull quay.io/biocontainers/fmlrc:<tag>

   (see `fmlrc/tags`_ for valid values for ``<tag>``)


.. |downloads_fmlrc| image:: https://img.shields.io/conda/dn/bioconda/fmlrc.svg?style=flat
   :target: https://anaconda.org/bioconda/fmlrc
   :alt:   (downloads)
.. |docker_fmlrc| image:: https://quay.io/repository/biocontainers/fmlrc/status
   :target: https://quay.io/repository/biocontainers/fmlrc
.. _`fmlrc/tags`: https://quay.io/repository/biocontainers/fmlrc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmlrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmlrc/README.html