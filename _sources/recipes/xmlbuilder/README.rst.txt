:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xmlbuilder'
.. highlight: bash

xmlbuilder
==========

.. conda:recipe:: xmlbuilder
   :replaces_section_title:

   pythonic way to crate xml\/\(x\)html files

   :homepage: https://pypi.python.org/pypi/xmlbuilder/1.0
   :license: LGPL / LGPL v3
   :recipe: /`xmlbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder/meta.yaml>`_

   


.. conda:package:: xmlbuilder

   |downloads_xmlbuilder| |docker_xmlbuilder|

   :versions: 1.0-1, 1.0-0
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xmlbuilder

   and update with::

      conda update xmlbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/xmlbuilder:<tag>

   (see `xmlbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_xmlbuilder| image:: https://img.shields.io/conda/dn/bioconda/xmlbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_xmlbuilder| image:: https://quay.io/repository/biocontainers/xmlbuilder/status
   :target: https://quay.io/repository/biocontainers/xmlbuilder
.. _`xmlbuilder/tags`: https://quay.io/repository/biocontainers/xmlbuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmlbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmlbuilder/README.html