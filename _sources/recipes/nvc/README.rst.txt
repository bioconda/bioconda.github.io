:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nvc'
.. highlight: bash

nvc
===

.. conda:recipe:: nvc
   :replaces_section_title:

   The Naive Variant Caller

   :homepage: https://github.com/blankenberg/nvc
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`nvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc/meta.yaml>`_

   


.. conda:package:: nvc

   |downloads_nvc| |docker_nvc|

   :versions: 0.0.4-2, 0.0.4-1, 0.0.4-0, 0.0.3-1, 0.0.3-0
   
   :depends numpy: 
   :depends pybamparser: 0.0.3
   :depends pybamtools: 0.0.4
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nvc

   and update with::

      conda update nvc

   or use the docker container::

      docker pull quay.io/biocontainers/nvc:<tag>

   (see `nvc/tags`_ for valid values for ``<tag>``)


.. |downloads_nvc| image:: https://img.shields.io/conda/dn/bioconda/nvc.svg?style=flat
   :target: https://anaconda.org/bioconda/nvc
   :alt:   (downloads)
.. |docker_nvc| image:: https://quay.io/repository/biocontainers/nvc/status
   :target: https://quay.io/repository/biocontainers/nvc
.. _`nvc/tags`: https://quay.io/repository/biocontainers/nvc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nvc/README.html