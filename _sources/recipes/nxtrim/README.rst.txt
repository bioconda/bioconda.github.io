:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nxtrim'
.. highlight: bash

nxtrim
======

.. conda:recipe:: nxtrim
   :replaces_section_title:
   :noindex:

   Software to remove Nextera Mate Pair adapters and categorise reads according to the orientation implied by the adapter location.

   :homepage: https://github.com/sequencing/NxTrim
   :license: BSD-2-Clause
   :recipe: /`nxtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim/meta.yaml>`_
   :links: biotools: :biotools:`nxtrim`, doi: :doi:`10.1093/bioinformatics/btv057`

   


.. conda:package:: nxtrim

   |downloads_nxtrim| |docker_nxtrim|

   :versions:
      
      

      ``0.4.3-1``,  ``0.4.3-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nxtrim

   and update with::

      conda update nxtrim

   or use the docker container::

      docker pull quay.io/biocontainers/nxtrim:<tag>

   (see `nxtrim/tags`_ for valid values for ``<tag>``)


.. |downloads_nxtrim| image:: https://img.shields.io/conda/dn/bioconda/nxtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/nxtrim
   :alt:   (downloads)
.. |docker_nxtrim| image:: https://quay.io/repository/biocontainers/nxtrim/status
   :target: https://quay.io/repository/biocontainers/nxtrim
.. _`nxtrim/tags`: https://quay.io/repository/biocontainers/nxtrim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nxtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nxtrim/README.html