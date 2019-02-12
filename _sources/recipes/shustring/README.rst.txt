:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shustring'
.. highlight: bash

shustring
=========

.. conda:recipe:: shustring
   :replaces_section_title:

   Program for Computing SHortest Unique SubSTRINGs

   :homepage: http://guanine.evolbio.mpg.de/cgi-bin/shustring/shustring.cgi.pl
   :license: GPL2 / GPL-2
   :recipe: /`shustring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shustring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shustring/meta.yaml>`_

   


.. conda:package:: shustring

   |downloads_shustring| |docker_shustring|

   :versions: 2.6-1, 2.6-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shustring

   and update with::

      conda update shustring

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shustring:<tag>

   (see `shustring/tags`_ for valid values for ``<tag>``)


.. |downloads_shustring| image:: https://img.shields.io/conda/dn/bioconda/shustring.svg?style=flat
   :alt:   (downloads)
.. |docker_shustring| image:: https://quay.io/repository/biocontainers/shustring/status
   :target: https://quay.io/repository/biocontainers/shustring
.. _`shustring/tags`: https://quay.io/repository/biocontainers/shustring?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shustring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shustring/README.html