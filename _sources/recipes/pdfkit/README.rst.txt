:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdfkit'
.. highlight: bash

pdfkit
======

.. conda:recipe:: pdfkit
   :replaces_section_title:

   Wkhtmltopdf python wrapper to convert html to pdf using the webkit rendering engine and qt

   :homepage: https://pypi.python.org/pypi/pdfkit
   :license: MIT License
   :recipe: /`pdfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit/meta.yaml>`_

   


.. conda:package:: pdfkit

   |downloads_pdfkit| |docker_pdfkit|

   :versions: 0.6.1-0, 0.5.0-1, 0.5.0-0
   
   :depends python: >=2.7,<2.8.0a0
   :depends wkhtmltopdf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pdfkit

   and update with::

      conda update pdfkit

   or use the docker container::

      docker pull quay.io/biocontainers/pdfkit:<tag>

   (see `pdfkit/tags`_ for valid values for ``<tag>``)


.. |downloads_pdfkit| image:: https://img.shields.io/conda/dn/bioconda/pdfkit.svg?style=flat
   :alt:   (downloads)
.. |docker_pdfkit| image:: https://quay.io/repository/biocontainers/pdfkit/status
   :target: https://quay.io/repository/biocontainers/pdfkit
.. _`pdfkit/tags`: https://quay.io/repository/biocontainers/pdfkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdfkit/README.html