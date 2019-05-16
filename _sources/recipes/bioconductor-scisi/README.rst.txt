:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scisi'
.. highlight: bash

bioconductor-scisi
==================

.. conda:recipe:: bioconductor-scisi
   :replaces_section_title:

   Package to create In Silico Interactomes

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ScISI.html
   :license: LGPL
   :recipe: /`bioconductor-scisi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scisi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scisi/meta.yaml>`_
   :links: biotools: :biotools:`scisi`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-scisi

   |downloads_bioconductor-scisi| |docker_bioconductor-scisi|

   :versions: 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-apcomplex: >=2.48.0,<2.49.0
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   :depends bioconductor-org.sc.sgd.db: >=3.7.0,<3.8.0
   :depends bioconductor-rpsixml: >=2.24.0,<2.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scisi

   and update with::

      conda update bioconductor-scisi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scisi:<tag>

   (see `bioconductor-scisi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scisi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scisi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scisi
   :alt:   (downloads)
.. |docker_bioconductor-scisi| image:: https://quay.io/repository/biocontainers/bioconductor-scisi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scisi
.. _`bioconductor-scisi/tags`: https://quay.io/repository/biocontainers/bioconductor-scisi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scisi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scisi/README.html