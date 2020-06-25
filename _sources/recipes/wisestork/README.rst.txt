:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wisestork'
.. highlight: bash

wisestork
=========

.. conda:recipe:: wisestork
   :replaces_section_title:
   :noindex:

   Within\-sample CNV calling

   :homepage: https://github.com/sndrtj/wisestork
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`wisestork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisestork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisestork/meta.yaml>`_

   


.. conda:package:: wisestork

   |downloads_wisestork| |docker_wisestork|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends progressbar2: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends scipy: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wisestork

   and update with::

      conda update wisestork

   or use the docker container::

      docker pull quay.io/biocontainers/wisestork:<tag>

   (see `wisestork/tags`_ for valid values for ``<tag>``)


.. |downloads_wisestork| image:: https://img.shields.io/conda/dn/bioconda/wisestork.svg?style=flat
   :target: https://anaconda.org/bioconda/wisestork
   :alt:   (downloads)
.. |docker_wisestork| image:: https://quay.io/repository/biocontainers/wisestork/status
   :target: https://quay.io/repository/biocontainers/wisestork
.. _`wisestork/tags`: https://quay.io/repository/biocontainers/wisestork?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wisestork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wisestork/README.html