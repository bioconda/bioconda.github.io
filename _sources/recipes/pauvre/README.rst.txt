:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pauvre'
.. highlight: bash

pauvre
======

.. conda:recipe:: pauvre
   :replaces_section_title:

   Tools for plotting Oxford Nanopore and other long\-read data.

   :homepage: https://github.com/conchoecia/pauvre
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`pauvre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre/meta.yaml>`_

   


.. conda:package:: pauvre

   |downloads_pauvre| |docker_pauvre|

   :versions: 0.1923-0, 0.1.86-1, 0.1.86-0, 0.1.85-0, 0.1.3-0
   
   :depends biopython: >=1.68
   :depends matplotlib: >=2.0.2
   :depends numpy: >=1.12.1
   :depends pandas: >=0.20.1
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pauvre

   and update with::

      conda update pauvre

   or use the docker container::

      docker pull quay.io/biocontainers/pauvre:<tag>

   (see `pauvre/tags`_ for valid values for ``<tag>``)


.. |downloads_pauvre| image:: https://img.shields.io/conda/dn/bioconda/pauvre.svg?style=flat
   :target: https://anaconda.org/bioconda/pauvre
   :alt:   (downloads)
.. |docker_pauvre| image:: https://quay.io/repository/biocontainers/pauvre/status
   :target: https://quay.io/repository/biocontainers/pauvre
.. _`pauvre/tags`: https://quay.io/repository/biocontainers/pauvre?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pauvre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pauvre/README.html