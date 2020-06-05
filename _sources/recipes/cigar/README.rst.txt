:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cigar'
.. highlight: bash

cigar
=====

.. conda:recipe:: cigar
   :replaces_section_title:
   :noindex:

   manipulate SAM cigar strings

   :homepage: https://github.com/brentp/cigar
   :license: MIT / MIT
   :recipe: /`cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cigar/meta.yaml>`_

   


.. conda:package:: cigar

   |downloads_cigar| |docker_cigar|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cigar

   and update with::

      conda update cigar

   or use the docker container::

      docker pull quay.io/biocontainers/cigar:<tag>

   (see `cigar/tags`_ for valid values for ``<tag>``)


.. |downloads_cigar| image:: https://img.shields.io/conda/dn/bioconda/cigar.svg?style=flat
   :target: https://anaconda.org/bioconda/cigar
   :alt:   (downloads)
.. |docker_cigar| image:: https://quay.io/repository/biocontainers/cigar/status
   :target: https://quay.io/repository/biocontainers/cigar
.. _`cigar/tags`: https://quay.io/repository/biocontainers/cigar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cigar/README.html