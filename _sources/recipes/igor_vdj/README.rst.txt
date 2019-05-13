:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igor_vdj'
.. highlight: bash

igor_vdj
========

.. conda:recipe:: igor_vdj
   :replaces_section_title:

   IGoR is a C\+\+ software designed to infer V\(D\)J recombination related processes from sequencing data.

   :homepage: https://github.com/qmarcou/IGoR
   :license: GPL3
   :recipe: /`igor_vdj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj/meta.yaml>`_

   


.. conda:package:: igor_vdj

   |downloads_igor_vdj| |docker_igor_vdj|

   :versions: 1.3.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igor_vdj

   and update with::

      conda update igor_vdj

   or use the docker container::

      docker pull quay.io/biocontainers/igor_vdj:<tag>

   (see `igor_vdj/tags`_ for valid values for ``<tag>``)


.. |downloads_igor_vdj| image:: https://img.shields.io/conda/dn/bioconda/igor_vdj.svg?style=flat
   :target: https://anaconda.org/bioconda/igor_vdj
   :alt:   (downloads)
.. |docker_igor_vdj| image:: https://quay.io/repository/biocontainers/igor_vdj/status
   :target: https://quay.io/repository/biocontainers/igor_vdj
.. _`igor_vdj/tags`: https://quay.io/repository/biocontainers/igor_vdj?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igor_vdj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igor_vdj/README.html