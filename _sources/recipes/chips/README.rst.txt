:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chips'
.. highlight: bash

chips
=====

.. conda:recipe:: chips
   :replaces_section_title:
   :noindex:

   ChIPs is a tool for simulating ChIP\-sequencing experiments.

   :homepage: https://github.com/gymreklab/chips
   :license: GNU General Public License v3.0
   :recipe: /`chips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips/meta.yaml>`_

   


.. conda:package:: chips

   |downloads_chips| |docker_chips|

   :versions:
      
      

      ``2.4-1``,  ``2.4-0``,  ``2.3-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chips

   and update with::

      conda update chips

   or use the docker container::

      docker pull quay.io/biocontainers/chips:<tag>

   (see `chips/tags`_ for valid values for ``<tag>``)


.. |downloads_chips| image:: https://img.shields.io/conda/dn/bioconda/chips.svg?style=flat
   :target: https://anaconda.org/bioconda/chips
   :alt:   (downloads)
.. |docker_chips| image:: https://quay.io/repository/biocontainers/chips/status
   :target: https://quay.io/repository/biocontainers/chips
.. _`chips/tags`: https://quay.io/repository/biocontainers/chips?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chips/README.html