:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastuniq'
.. highlight: bash

fastuniq
========

.. conda:recipe:: fastuniq
   :replaces_section_title:

   FastUniq\, A Fast De Novo Duplicates Removal Tool for Paired Short Reads

   :homepage: https://sourceforge.net/projects/fastuniq/
   :license: Creative Commons Attribution License
   :recipe: /`fastuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastuniq/meta.yaml>`_

   


.. conda:package:: fastuniq

   |downloads_fastuniq| |docker_fastuniq|

   :versions: 1.1-1, 1.1-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastuniq

   and update with::

      conda update fastuniq

   or use the docker container::

      docker pull quay.io/biocontainers/fastuniq:<tag>

   (see `fastuniq/tags`_ for valid values for ``<tag>``)


.. |downloads_fastuniq| image:: https://img.shields.io/conda/dn/bioconda/fastuniq.svg?style=flat
   :alt:   (downloads)
.. |docker_fastuniq| image:: https://quay.io/repository/biocontainers/fastuniq/status
   :target: https://quay.io/repository/biocontainers/fastuniq
.. _`fastuniq/tags`: https://quay.io/repository/biocontainers/fastuniq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastuniq/README.html