:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yak'
.. highlight: bash

yak
===

.. conda:recipe:: yak
   :replaces_section_title:
   :noindex:

   Yet another k\-mer analyzer

   :homepage: https://github.com/lh3/yak
   :license: MIT
   :recipe: /`yak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yak/meta.yaml>`_

   


.. conda:package:: yak

   |downloads_yak| |docker_yak|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yak

   and update with::

      conda update yak

   or use the docker container::

      docker pull quay.io/biocontainers/yak:<tag>

   (see `yak/tags`_ for valid values for ``<tag>``)


.. |downloads_yak| image:: https://img.shields.io/conda/dn/bioconda/yak.svg?style=flat
   :target: https://anaconda.org/bioconda/yak
   :alt:   (downloads)
.. |docker_yak| image:: https://quay.io/repository/biocontainers/yak/status
   :target: https://quay.io/repository/biocontainers/yak
.. _`yak/tags`: https://quay.io/repository/biocontainers/yak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yak/README.html