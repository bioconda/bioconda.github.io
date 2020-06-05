:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpomatic'
.. highlight: bash

snpomatic
=========

.. conda:recipe:: snpomatic
   :replaces_section_title:
   :noindex:

   SNP\-o\-matic is a fast\, stringent short\-read mapping software.

   :homepage: https://github.com/magnusmanske/snpomatic
   :license: GPL3
   :recipe: /`snpomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpomatic/meta.yaml>`_

   


.. conda:package:: snpomatic

   |downloads_snpomatic| |docker_snpomatic|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpomatic

   and update with::

      conda update snpomatic

   or use the docker container::

      docker pull quay.io/biocontainers/snpomatic:<tag>

   (see `snpomatic/tags`_ for valid values for ``<tag>``)


.. |downloads_snpomatic| image:: https://img.shields.io/conda/dn/bioconda/snpomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/snpomatic
   :alt:   (downloads)
.. |docker_snpomatic| image:: https://quay.io/repository/biocontainers/snpomatic/status
   :target: https://quay.io/repository/biocontainers/snpomatic
.. _`snpomatic/tags`: https://quay.io/repository/biocontainers/snpomatic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpomatic/README.html