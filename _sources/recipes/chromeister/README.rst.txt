:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromeister'
.. highlight: bash

chromeister
===========

.. conda:recipe:: chromeister
   :replaces_section_title:
   :noindex:

   An ultra fast\, heuristic approach to detect conserved signals in extremely large pairwise genome comparisons

   :homepage: https://github.com/estebanpw/chromeister
   :license: GPL / GPL-3.0
   :recipe: /`chromeister <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-019-46773-w`

   


.. conda:package:: chromeister

   |downloads_chromeister| |docker_chromeister|

   :versions:
      
      

      ``1.4-0``,  ``1.3.c-0``,  ``1.2-0``,  ``1.1.c-0``,  ``1.1.b-0``,  ``1.1.a-0``

      

   
   :depends cycler: 
   :depends kiwisolver: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends opencv: 
   :depends pillow: 
   :depends pyparsing: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends r-ape: 
   :depends r-base: 
   :depends scikit-build: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromeister

   and update with::

      conda update chromeister

   or use the docker container::

      docker pull quay.io/biocontainers/chromeister:<tag>

   (see `chromeister/tags`_ for valid values for ``<tag>``)


.. |downloads_chromeister| image:: https://img.shields.io/conda/dn/bioconda/chromeister.svg?style=flat
   :target: https://anaconda.org/bioconda/chromeister
   :alt:   (downloads)
.. |docker_chromeister| image:: https://quay.io/repository/biocontainers/chromeister/status
   :target: https://quay.io/repository/biocontainers/chromeister
.. _`chromeister/tags`: https://quay.io/repository/biocontainers/chromeister?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromeister/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromeister/README.html