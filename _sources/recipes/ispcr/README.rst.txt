:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ispcr'
.. highlight: bash

ispcr
=====

.. conda:recipe:: ispcr
   :replaces_section_title:
   :noindex:

   In silico PCR

   :homepage: https://users.soe.ucsc.edu/~kent/
   :license: License is hereby granted for personal, academic, and non-profit use.
   :recipe: /`ispcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr/meta.yaml>`_
   :links: biotools: :biotools:`ispcr`

   


.. conda:package:: ispcr

   |downloads_ispcr| |docker_ispcr|

   :versions:
      
      

      ``33-1``,  ``33-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ispcr

   and update with::

      conda update ispcr

   or use the docker container::

      docker pull quay.io/biocontainers/ispcr:<tag>

   (see `ispcr/tags`_ for valid values for ``<tag>``)


.. |downloads_ispcr| image:: https://img.shields.io/conda/dn/bioconda/ispcr.svg?style=flat
   :target: https://anaconda.org/bioconda/ispcr
   :alt:   (downloads)
.. |docker_ispcr| image:: https://quay.io/repository/biocontainers/ispcr/status
   :target: https://quay.io/repository/biocontainers/ispcr
.. _`ispcr/tags`: https://quay.io/repository/biocontainers/ispcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ispcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ispcr/README.html