:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gqt'
.. highlight: bash

gqt
===

.. conda:recipe:: gqt
   :replaces_section_title:

   GQT is a genotype query interface.

   :homepage: https://github.com/ryanlayer/gqt
   :license: MIT
   :recipe: /`gqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqt/meta.yaml>`_

   


.. conda:package:: gqt

   |downloads_gqt| |docker_gqt|

   :versions: 1.1.3-4, 1.1.3-3, 1.1.3-2, 1.1.3-1, 1.1.3-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends sqlite: >=3.26.0,<4.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gqt

   and update with::

      conda update gqt

   or use the docker container::

      docker pull quay.io/biocontainers/gqt:<tag>

   (see `gqt/tags`_ for valid values for ``<tag>``)


.. |downloads_gqt| image:: https://img.shields.io/conda/dn/bioconda/gqt.svg?style=flat
   :alt:   (downloads)
.. |docker_gqt| image:: https://quay.io/repository/biocontainers/gqt/status
   :target: https://quay.io/repository/biocontainers/gqt
.. _`gqt/tags`: https://quay.io/repository/biocontainers/gqt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gqt/README.html