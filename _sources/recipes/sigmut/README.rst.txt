:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigmut'
.. highlight: bash

sigmut
======

.. conda:recipe:: sigmut
   :replaces_section_title:
   :noindex:

   Wrapper of SigProfiler \(Copyright\(c\) 2019\, Erik Bergstrom \[Alexandrov Lab\]\)

   :homepage: https://github.com/artbio/sigmut
   :license: BSD / BSD 2-Clause
   :recipe: /`sigmut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigmut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigmut/meta.yaml>`_

   


.. conda:package:: sigmut

   |downloads_sigmut| |docker_sigmut|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17.5``
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends statsmodels: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sigmut

   and update with::

      conda update sigmut

   or use the docker container::

      docker pull quay.io/biocontainers/sigmut:<tag>

   (see `sigmut/tags`_ for valid values for ``<tag>``)


.. |downloads_sigmut| image:: https://img.shields.io/conda/dn/bioconda/sigmut.svg?style=flat
   :target: https://anaconda.org/bioconda/sigmut
   :alt:   (downloads)
.. |docker_sigmut| image:: https://quay.io/repository/biocontainers/sigmut/status
   :target: https://quay.io/repository/biocontainers/sigmut
.. _`sigmut/tags`: https://quay.io/repository/biocontainers/sigmut?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigmut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigmut/README.html