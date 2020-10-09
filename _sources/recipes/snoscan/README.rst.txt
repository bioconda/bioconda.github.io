:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snoscan'
.. highlight: bash

snoscan
=======

.. conda:recipe:: snoscan
   :replaces_section_title:
   :noindex:

   Search for C\/D box methylation guide snoRNA genes in a genomic sequence

   :homepage: http://lowelab.ucsc.edu/snoscan
   :license: GNU General Public License, version 2
   :recipe: /`snoscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan/meta.yaml>`_
   :links: biotools: :biotools:`snoscan`

   


.. conda:package:: snoscan

   |downloads_snoscan| |docker_snoscan|

   :versions:
      
      

      ``1.0-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9b-3``,  ``0.9b-2``,  ``0.9b-1``,  ``0.9b-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snoscan

   and update with::

      conda update snoscan

   or use the docker container::

      docker pull quay.io/biocontainers/snoscan:<tag>

   (see `snoscan/tags`_ for valid values for ``<tag>``)


.. |downloads_snoscan| image:: https://img.shields.io/conda/dn/bioconda/snoscan.svg?style=flat
   :target: https://anaconda.org/bioconda/snoscan
   :alt:   (downloads)
.. |docker_snoscan| image:: https://quay.io/repository/biocontainers/snoscan/status
   :target: https://quay.io/repository/biocontainers/snoscan
.. _`snoscan/tags`: https://quay.io/repository/biocontainers/snoscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snoscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snoscan/README.html