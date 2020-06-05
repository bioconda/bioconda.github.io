:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libidn'
.. highlight: bash

libidn
======

.. conda:recipe:: libidn
   :replaces_section_title:
   :noindex:

   Library for internationalized domain name support

   :homepage: https://www.gnu.org/software/libidn/
   :license: LGPLv3
   :recipe: /`libidn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn/meta.yaml>`_

   


.. conda:package:: libidn

   |downloads_libidn| |docker_libidn|

   :versions:
      
      

      ``7.45.0-2``,  ``7.45.0-1``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libidn

   and update with::

      conda update libidn

   or use the docker container::

      docker pull quay.io/biocontainers/libidn:<tag>

   (see `libidn/tags`_ for valid values for ``<tag>``)


.. |downloads_libidn| image:: https://img.shields.io/conda/dn/bioconda/libidn.svg?style=flat
   :target: https://anaconda.org/bioconda/libidn
   :alt:   (downloads)
.. |docker_libidn| image:: https://quay.io/repository/biocontainers/libidn/status
   :target: https://quay.io/repository/biocontainers/libidn
.. _`libidn/tags`: https://quay.io/repository/biocontainers/libidn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libidn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libidn/README.html