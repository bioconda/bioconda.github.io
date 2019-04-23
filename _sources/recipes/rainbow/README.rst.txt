:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rainbow'
.. highlight: bash

rainbow
=======

.. conda:recipe:: rainbow
   :replaces_section_title:

   Efficient tool for clustering and assembling short reads\, especially for RAD

   :homepage: https://sourceforge.net/projects/bio-rainbow/
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`rainbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow/meta.yaml>`_

   


.. conda:package:: rainbow

   |downloads_rainbow| |docker_rainbow|

   :versions: 2.0.4-3, 2.0.4-2, 2.0.4-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rainbow

   and update with::

      conda update rainbow

   or use the docker container::

      docker pull quay.io/biocontainers/rainbow:<tag>

   (see `rainbow/tags`_ for valid values for ``<tag>``)


.. |downloads_rainbow| image:: https://img.shields.io/conda/dn/bioconda/rainbow.svg?style=flat
   :alt:   (downloads)
.. |docker_rainbow| image:: https://quay.io/repository/biocontainers/rainbow/status
   :target: https://quay.io/repository/biocontainers/rainbow
.. _`rainbow/tags`: https://quay.io/repository/biocontainers/rainbow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rainbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rainbow/README.html