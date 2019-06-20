:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcl'
.. highlight: bash

mcl
===

.. conda:recipe:: mcl
   :replaces_section_title:

   MCL \- a cluster algorithm for graphs

   :homepage: http://micans.org/mcl/
   :license: GPL3
   :recipe: /`mcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl/meta.yaml>`_

   


.. conda:package:: mcl

   |downloads_mcl| |docker_mcl|

   :versions: 14.137-4, 14.137-3, 14.137-2, 14.137-1, 14.137-0
   
   :depends blast: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mcl

   and update with::

      conda update mcl

   or use the docker container::

      docker pull quay.io/biocontainers/mcl:<tag>

   (see `mcl/tags`_ for valid values for ``<tag>``)


.. |downloads_mcl| image:: https://img.shields.io/conda/dn/bioconda/mcl.svg?style=flat
   :target: https://anaconda.org/bioconda/mcl
   :alt:   (downloads)
.. |docker_mcl| image:: https://quay.io/repository/biocontainers/mcl/status
   :target: https://quay.io/repository/biocontainers/mcl
.. _`mcl/tags`: https://quay.io/repository/biocontainers/mcl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcl/README.html