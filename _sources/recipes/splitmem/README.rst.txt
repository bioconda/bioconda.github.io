:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitmem'
.. highlight: bash

splitmem
========

.. conda:recipe:: splitmem
   :replaces_section_title:

   Graphical pan\-genome analysis with suffix skips

   :homepage: https://sourceforge.net/projects/splitmem/
   :license: Apache License V2.0
   :recipe: /`splitmem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem/meta.yaml>`_

   


.. conda:package:: splitmem

   |downloads_splitmem| |docker_splitmem|

   :versions: 1.0-1, 1.0-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install splitmem

   and update with::

      conda update splitmem

   or use the docker container::

      docker pull quay.io/biocontainers/splitmem:<tag>

   (see `splitmem/tags`_ for valid values for ``<tag>``)


.. |downloads_splitmem| image:: https://img.shields.io/conda/dn/bioconda/splitmem.svg?style=flat
   :alt:   (downloads)
.. |docker_splitmem| image:: https://quay.io/repository/biocontainers/splitmem/status
   :target: https://quay.io/repository/biocontainers/splitmem
.. _`splitmem/tags`: https://quay.io/repository/biocontainers/splitmem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitmem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitmem/README.html