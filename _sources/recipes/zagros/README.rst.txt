:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zagros'
.. highlight: bash

zagros
======

.. conda:recipe:: zagros
   :replaces_section_title:

   zagros is a motif\-discovery tool for CLIP\-Seq data.

   :homepage: http://smithlabresearch.org/software/zagros/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`zagros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zagros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zagros/meta.yaml>`_

   


.. conda:package:: zagros

   |downloads_zagros| |docker_zagros|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libstdcxx-ng: >=4.9
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zagros

   and update with::

      conda update zagros

   or use the docker container::

      docker pull quay.io/biocontainers/zagros:<tag>

   (see `zagros/tags`_ for valid values for ``<tag>``)


.. |downloads_zagros| image:: https://img.shields.io/conda/dn/bioconda/zagros.svg?style=flat
   :alt:   (downloads)
.. |docker_zagros| image:: https://quay.io/repository/biocontainers/zagros/status
   :target: https://quay.io/repository/biocontainers/zagros
.. _`zagros/tags`: https://quay.io/repository/biocontainers/zagros?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zagros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zagros/README.html