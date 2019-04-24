:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xvector'
.. highlight: bash

bioconductor-xvector
====================

.. conda:recipe:: bioconductor-xvector
   :replaces_section_title:

   Memory efficient S4 classes for storing sequences \"externally\" \(behind an R external pointer\, or on disk\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/XVector.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xvector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector/meta.yaml>`_
   :links: biotools: :biotools:`xvector`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-xvector

   |downloads_bioconductor-xvector| |docker_bioconductor-xvector|

   :versions: 0.22.0-0, 0.20.0-0, 0.18.0-0, 0.16.0-0, 0.14.1-0, 0.12.1-0, 0.10.0-1, 0.10.0-0, 0.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xvector

   and update with::

      conda update bioconductor-xvector

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xvector:<tag>

   (see `bioconductor-xvector/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xvector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xvector.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-xvector| image:: https://quay.io/repository/biocontainers/bioconductor-xvector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xvector
.. _`bioconductor-xvector/tags`: https://quay.io/repository/biocontainers/bioconductor-xvector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xvector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xvector/README.html