:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyexcelerator'
.. highlight: bash

pyexcelerator
=============

.. conda:recipe:: pyexcelerator
   :replaces_section_title:

   generating Excel 97\+ files\; importing Excel 95\+ files\; Excel files dumper\; OLE2 files dumper\; xls2txt\, xls2csv\, xls2html

   :homepage: http://sourceforge.net/projects/pyexcelerator/
   :license: BSD / BSD License
   :recipe: /`pyexcelerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyexcelerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyexcelerator/meta.yaml>`_

   


.. conda:package:: pyexcelerator

   |downloads_pyexcelerator| |docker_pyexcelerator|

   :versions: 0.6.4a-2, 0.6.4a-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyexcelerator

   and update with::

      conda update pyexcelerator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyexcelerator:<tag>

   (see `pyexcelerator/tags`_ for valid values for ``<tag>``)


.. |downloads_pyexcelerator| image:: https://img.shields.io/conda/dn/bioconda/pyexcelerator.svg?style=flat
   :alt:   (downloads)
.. |docker_pyexcelerator| image:: https://quay.io/repository/biocontainers/pyexcelerator/status
   :target: https://quay.io/repository/biocontainers/pyexcelerator
.. _`pyexcelerator/tags`: https://quay.io/repository/biocontainers/pyexcelerator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyexcelerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyexcelerator/README.html