:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrm'
.. highlight: bash

scrm
====

.. conda:recipe:: scrm
   :replaces_section_title:

   A coalescent simulator for genome\-scale sequences

   :homepage: https://scrm.github.io/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`scrm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrm/meta.yaml>`_

   


.. conda:package:: scrm

   |downloads_scrm| |docker_scrm|

   :versions: 1.7.3-0, 1.7.2-1, 1.7.2-0, 1.7.1-0, 1.6.1-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scrm

   and update with::

      conda update scrm

   or use the docker container::

      docker pull quay.io/biocontainers/scrm:<tag>

   (see `scrm/tags`_ for valid values for ``<tag>``)


.. |downloads_scrm| image:: https://img.shields.io/conda/dn/bioconda/scrm.svg?style=flat
   :target: https://anaconda.org/bioconda/scrm
   :alt:   (downloads)
.. |docker_scrm| image:: https://quay.io/repository/biocontainers/scrm/status
   :target: https://quay.io/repository/biocontainers/scrm
.. _`scrm/tags`: https://quay.io/repository/biocontainers/scrm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrm/README.html