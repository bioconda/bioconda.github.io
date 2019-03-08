:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popt'
.. highlight: bash

popt
====

.. conda:recipe:: popt
   :replaces_section_title:

   Popt is a C library for parsing command line parameters.

   :homepage: http://rpm5.org/
   :license: MIT
   :recipe: /`popt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popt/meta.yaml>`_

   


.. conda:package:: popt

   |downloads_popt| |docker_popt|

   :versions: 1.16-1, 1.16-0
   
   :depends libiconv: 1.15
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install popt

   and update with::

      conda update popt

   or use the docker container::

      docker pull quay.io/biocontainers/popt:<tag>

   (see `popt/tags`_ for valid values for ``<tag>``)


.. |downloads_popt| image:: https://img.shields.io/conda/dn/bioconda/popt.svg?style=flat
   :alt:   (downloads)
.. |docker_popt| image:: https://quay.io/repository/biocontainers/popt/status
   :target: https://quay.io/repository/biocontainers/popt
.. _`popt/tags`: https://quay.io/repository/biocontainers/popt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popt/README.html