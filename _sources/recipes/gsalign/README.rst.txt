:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsalign'
.. highlight: bash

gsalign
=======

.. conda:recipe:: gsalign
   :replaces_section_title:

   GSAlign\: an ultra\-fast sequence alignment tool

   :homepage: https://github.com/hsinnan75/GSAlign
   :license: MIT
   :recipe: /`gsalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign/meta.yaml>`_
   :links: doi: :doi:`10.1101/782193`

   an ultra\-fast sequence alignment tool for genome sequence comparison.


.. conda:package:: gsalign

   |downloads_gsalign| |docker_gsalign|

   :versions: 1.0.20-0, 1.0.16-0, 1.0.15-0, 1.0.14-0, 1.0.13-0, 1.0.12-0, 1.0.11-0, 1.0.10-0, 1.0.9-0, 1.0.8-0, 1.0.7-1, 1.0.7-0, 1.0.6-0, 1.0.5-0, 1.0.4-0, 1.0.3-0, 1.0.2-0, 1.0.1-0, 1.0.0-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.5,<5.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gsalign

   and update with::

      conda update gsalign

   or use the docker container::

      docker pull quay.io/biocontainers/gsalign:<tag>

   (see `gsalign/tags`_ for valid values for ``<tag>``)


.. |downloads_gsalign| image:: https://img.shields.io/conda/dn/bioconda/gsalign.svg?style=flat
   :target: https://anaconda.org/bioconda/gsalign
   :alt:   (downloads)
.. |docker_gsalign| image:: https://quay.io/repository/biocontainers/gsalign/status
   :target: https://quay.io/repository/biocontainers/gsalign
.. _`gsalign/tags`: https://quay.io/repository/biocontainers/gsalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsalign/README.html