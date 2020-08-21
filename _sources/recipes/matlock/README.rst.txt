:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matlock'
.. highlight: bash

matlock
=======

.. conda:recipe:: matlock
   :replaces_section_title:
   :noindex:

   Simple tools for working with Hi\-C data

   :homepage: https://github.com/phasegenomics/matlock
   :license: GNU Affero General Public License v3
   :recipe: /`matlock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock/meta.yaml>`_

   


.. conda:package:: matlock

   |downloads_matlock| |docker_matlock|

   :versions:
      
      

      ``20181227-1``,  ``20181227-0``

      

   
   :depends backports.lzma: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends openblas: ``>=0.3.6,<0.3.7.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install matlock

   and update with::

      conda update matlock

   or use the docker container::

      docker pull quay.io/biocontainers/matlock:<tag>

   (see `matlock/tags`_ for valid values for ``<tag>``)


.. |downloads_matlock| image:: https://img.shields.io/conda/dn/bioconda/matlock.svg?style=flat
   :target: https://anaconda.org/bioconda/matlock
   :alt:   (downloads)
.. |docker_matlock| image:: https://quay.io/repository/biocontainers/matlock/status
   :target: https://quay.io/repository/biocontainers/matlock
.. _`matlock/tags`: https://quay.io/repository/biocontainers/matlock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matlock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matlock/README.html