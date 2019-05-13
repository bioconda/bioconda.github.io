:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atactk'
.. highlight: bash

atactk
======

.. conda:recipe:: atactk
   :replaces_section_title:

   A toolkit for working with ATAC\-seq data.

   :homepage: http://theparkerlab.org/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`atactk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk/meta.yaml>`_

   


.. conda:package:: atactk

   |downloads_atactk| |docker_atactk|

   :versions: 0.1.6-1, 0.1.6-0
   
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :depends python-levenshtein: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
   :depends sexpdata: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atactk

   and update with::

      conda update atactk

   or use the docker container::

      docker pull quay.io/biocontainers/atactk:<tag>

   (see `atactk/tags`_ for valid values for ``<tag>``)


.. |downloads_atactk| image:: https://img.shields.io/conda/dn/bioconda/atactk.svg?style=flat
   :target: https://anaconda.org/bioconda/atactk
   :alt:   (downloads)
.. |docker_atactk| image:: https://quay.io/repository/biocontainers/atactk/status
   :target: https://quay.io/repository/biocontainers/atactk
.. _`atactk/tags`: https://quay.io/repository/biocontainers/atactk?tab=tags






Notes
-----
Adds 3 scripts\, namely \"trim\_adapters\"\, \"make\_cut\_matrix\" and \"plot\_aggregate\_matrix.R\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atactk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atactk/README.html