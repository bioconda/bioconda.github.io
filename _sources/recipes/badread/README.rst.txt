:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'badread'
.. highlight: bash

badread
=======

.. conda:recipe:: badread
   :replaces_section_title:
   :noindex:

   A long read simulator that can imitate many types of read problems

   :homepage: https://github.com/rrwick/Badread
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`badread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread/meta.yaml>`_

   


.. conda:package:: badread

   |downloads_badread| |docker_badread|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.5-0``

      

   
   :depends edlib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pip: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install badread

   and update with::

      conda update badread

   or use the docker container::

      docker pull quay.io/biocontainers/badread:<tag>

   (see `badread/tags`_ for valid values for ``<tag>``)


.. |downloads_badread| image:: https://img.shields.io/conda/dn/bioconda/badread.svg?style=flat
   :target: https://anaconda.org/bioconda/badread
   :alt:   (downloads)
.. |docker_badread| image:: https://quay.io/repository/biocontainers/badread/status
   :target: https://quay.io/repository/biocontainers/badread
.. _`badread/tags`: https://quay.io/repository/biocontainers/badread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/badread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/badread/README.html