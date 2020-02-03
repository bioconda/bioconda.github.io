:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yapc'
.. highlight: bash

yapc
====

.. conda:recipe:: yapc
   :replaces_section_title:

   Yapc is a \(yet another\) peak caller for genomic high\-throughput sequencing data

   :homepage: https://github.com/jurgjn/yapc
   :license: GPL / GPLv3
   :recipe: /`yapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yapc/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.37344`

   


.. conda:package:: yapc

   |downloads_yapc| |docker_yapc|

   :versions: 0.1-0
   
   :depends idr: 
   :depends numpy: 
   :depends pandas: 
   :depends pybigwig: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yapc

   and update with::

      conda update yapc

   or use the docker container::

      docker pull quay.io/biocontainers/yapc:<tag>

   (see `yapc/tags`_ for valid values for ``<tag>``)


.. |downloads_yapc| image:: https://img.shields.io/conda/dn/bioconda/yapc.svg?style=flat
   :target: https://anaconda.org/bioconda/yapc
   :alt:   (downloads)
.. |docker_yapc| image:: https://quay.io/repository/biocontainers/yapc/status
   :target: https://quay.io/repository/biocontainers/yapc
.. _`yapc/tags`: https://quay.io/repository/biocontainers/yapc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yapc/README.html