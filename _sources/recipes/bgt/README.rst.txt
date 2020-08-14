:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgt'
.. highlight: bash

bgt
===

.. conda:recipe:: bgt
   :replaces_section_title:
   :noindex:

   Flexible genotype query among 30\,000\+ samples whole\-genome.

   :homepage: https://github.com/lh3/bgt
   :license: MIT
   :recipe: /`bgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt/meta.yaml>`_

   


.. conda:package:: bgt

   |downloads_bgt| |docker_bgt|

   :versions:
      
      

      ``r283-2``,  ``r283-1``,  ``r283-0``,  ``r277-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bgt

   and update with::

      conda update bgt

   or use the docker container::

      docker pull quay.io/biocontainers/bgt:<tag>

   (see `bgt/tags`_ for valid values for ``<tag>``)


.. |downloads_bgt| image:: https://img.shields.io/conda/dn/bioconda/bgt.svg?style=flat
   :target: https://anaconda.org/bioconda/bgt
   :alt:   (downloads)
.. |docker_bgt| image:: https://quay.io/repository/biocontainers/bgt/status
   :target: https://quay.io/repository/biocontainers/bgt
.. _`bgt/tags`: https://quay.io/repository/biocontainers/bgt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgt/README.html