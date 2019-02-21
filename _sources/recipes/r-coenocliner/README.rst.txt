:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-coenocliner'
.. highlight: bash

r-coenocliner
=============

.. conda:recipe:: r-coenocliner
   :replaces_section_title:

   Simulate species occurrence and abundances \(counts\) along gradients.

   :homepage: https://github.com/gavinsimpson/coenocliner/
   :license: GPL2 / GPL-2
   :recipe: /`r-coenocliner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coenocliner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coenocliner/meta.yaml>`_

   


.. conda:package:: r-coenocliner

   |downloads_r-coenocliner| |docker_r-coenocliner|

   :versions: 0.2_2-2, 0.2_2-1, 0.2_2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-coenocliner

   and update with::

      conda update r-coenocliner

   or use the docker container::

      docker pull quay.io/biocontainers/r-coenocliner:<tag>

   (see `r-coenocliner/tags`_ for valid values for ``<tag>``)


.. |downloads_r-coenocliner| image:: https://img.shields.io/conda/dn/bioconda/r-coenocliner.svg?style=flat
   :alt:   (downloads)
.. |docker_r-coenocliner| image:: https://quay.io/repository/biocontainers/r-coenocliner/status
   :target: https://quay.io/repository/biocontainers/r-coenocliner
.. _`r-coenocliner/tags`: https://quay.io/repository/biocontainers/r-coenocliner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-coenocliner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-coenocliner/README.html