:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosdepth'
.. highlight: bash

mosdepth
========

.. conda:recipe:: mosdepth
   :replaces_section_title:

   Fast BAM\/CRAM depth calculation for WGS\, exome\, or targetted sequencing.

   :homepage: https://github.com/brentp/mosdepth
   :license: MIT
   :recipe: /`mosdepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosdepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosdepth/meta.yaml>`_

   


.. conda:package:: mosdepth

   |downloads_mosdepth| |docker_mosdepth|

   :versions: 0.2.5-0, 0.2.4-0, 0.2.3-1, 0.2.3-0, 0.2.2-1, 0.2.1-1, 0.2.1-0, 0.2.0-0, 0.1.9-0, 0.1.7-0, 0.1.6-0, 0.1.5-0, 0.1.4a-0, 0.1.3-0, 0.1.1-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends pcre: >=8.41,<9.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mosdepth

   and update with::

      conda update mosdepth

   or use the docker container::

      docker pull quay.io/biocontainers/mosdepth:<tag>

   (see `mosdepth/tags`_ for valid values for ``<tag>``)


.. |downloads_mosdepth| image:: https://img.shields.io/conda/dn/bioconda/mosdepth.svg?style=flat
   :alt:   (downloads)
.. |docker_mosdepth| image:: https://quay.io/repository/biocontainers/mosdepth/status
   :target: https://quay.io/repository/biocontainers/mosdepth
.. _`mosdepth/tags`: https://quay.io/repository/biocontainers/mosdepth?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosdepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosdepth/README.html