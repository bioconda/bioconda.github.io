:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smof'
.. highlight: bash

smof
====

.. conda:recipe:: smof
   :replaces_section_title:
   :noindex:

   UNIX\-style utilities for FASTA file exploration

   :homepage: https://github.com/incertae-sedis/smof
   :license: MIT
   :recipe: /`smof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smof/meta.yaml>`_

   


.. conda:package:: smof

   |downloads_smof| |docker_smof|

   :versions:
      
      

      ``2.18.0-0``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.14.3-0``

      

   
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smof

   and update with::

      conda update smof

   or use the docker container::

      docker pull quay.io/biocontainers/smof:<tag>

   (see `smof/tags`_ for valid values for ``<tag>``)


.. |downloads_smof| image:: https://img.shields.io/conda/dn/bioconda/smof.svg?style=flat
   :target: https://anaconda.org/bioconda/smof
   :alt:   (downloads)
.. |docker_smof| image:: https://quay.io/repository/biocontainers/smof/status
   :target: https://quay.io/repository/biocontainers/smof
.. _`smof/tags`: https://quay.io/repository/biocontainers/smof?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smof/README.html