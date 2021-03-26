:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtrim'
.. highlight: bash

fqtrim
======

.. conda:recipe:: fqtrim
   :replaces_section_title:
   :noindex:

   fqtrim is a versatile stand\-alone utility that can be used to trim adapters\, poly\-A tails\, terminal unknown bases \(Ns\) and low quality 3\' regions in reads from high\-throughput next\-generation sequencing machines.

   :homepage: https://ccb.jhu.edu/software/fqtrim/
   :license: Artistic License 2.0
   :recipe: /`fqtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim/meta.yaml>`_

   


.. conda:package:: fqtrim

   |downloads_fqtrim| |docker_fqtrim|

   :versions:
      
      

      ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends gclib: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqtrim

   and update with::

      conda update fqtrim

   or use the docker container::

      docker pull quay.io/biocontainers/fqtrim:<tag>

   (see `fqtrim/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtrim| image:: https://img.shields.io/conda/dn/bioconda/fqtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtrim
   :alt:   (downloads)
.. |docker_fqtrim| image:: https://quay.io/repository/biocontainers/fqtrim/status
   :target: https://quay.io/repository/biocontainers/fqtrim
.. _`fqtrim/tags`: https://quay.io/repository/biocontainers/fqtrim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtrim/README.html