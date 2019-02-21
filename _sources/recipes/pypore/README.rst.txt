:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypore'
.. highlight: bash

pypore
======

.. conda:recipe:: pypore
   :replaces_section_title:

   Pythonic\/Cythonic Nanopore Translocation Analysis

   :homepage: http://parkin.github.io/pypore/
   :license: Apache 2.0
   :recipe: /`pypore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore/meta.yaml>`_

   


.. conda:package:: pypore

   |downloads_pypore| |docker_pypore|

   :versions: 0.0.6.dev20180702231556-0, 0.0.6.dev20161116235131-1, 0.0.6.dev20161116235131-0, 0.0.5.dev20160304220337-1, 0.0.5.dev20160304220337-0
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypore

   and update with::

      conda update pypore

   or use the docker container::

      docker pull quay.io/biocontainers/pypore:<tag>

   (see `pypore/tags`_ for valid values for ``<tag>``)


.. |downloads_pypore| image:: https://img.shields.io/conda/dn/bioconda/pypore.svg?style=flat
   :alt:   (downloads)
.. |docker_pypore| image:: https://quay.io/repository/biocontainers/pypore/status
   :target: https://quay.io/repository/biocontainers/pypore
.. _`pypore/tags`: https://quay.io/repository/biocontainers/pypore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypore/README.html