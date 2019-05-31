:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'twobitreader'
.. highlight: bash

twobitreader
============

.. conda:recipe:: twobitreader
   :replaces_section_title:

   A fast python package for reading .2bit files \(used by the UCSC genome browser\)

   :homepage: https://github.com/benjschiller/twobitreader
   :license: Artistic License
   :recipe: /`twobitreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twobitreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twobitreader/meta.yaml>`_

   


.. conda:package:: twobitreader

   |downloads_twobitreader| |docker_twobitreader|

   :versions: 3.1.7-0, 3.1.6-1, 3.1.6-0, 3.1.4-1, 3.1.4-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install twobitreader

   and update with::

      conda update twobitreader

   or use the docker container::

      docker pull quay.io/biocontainers/twobitreader:<tag>

   (see `twobitreader/tags`_ for valid values for ``<tag>``)


.. |downloads_twobitreader| image:: https://img.shields.io/conda/dn/bioconda/twobitreader.svg?style=flat
   :target: https://anaconda.org/bioconda/twobitreader
   :alt:   (downloads)
.. |docker_twobitreader| image:: https://quay.io/repository/biocontainers/twobitreader/status
   :target: https://quay.io/repository/biocontainers/twobitreader
.. _`twobitreader/tags`: https://quay.io/repository/biocontainers/twobitreader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/twobitreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/twobitreader/README.html