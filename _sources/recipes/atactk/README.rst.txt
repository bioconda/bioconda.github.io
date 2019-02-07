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

   :versions: 0.1.6

   :depends: :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-levenshtein`  :conda:package:`r-base`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  :conda:package:`r-rcolorbrewer`  :conda:package:`sexpdata`  

   :required~by: |required_by_atactk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atactk

   and update with::

      conda update atactk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/atactk


.. |required_by_atactk| conda:required_by:: atactk
.. |downloads_atactk| image:: https://img.shields.io/conda/dn/bioconda/atactk.svg?style=flat
   :alt:   (downloads)
.. |docker_atactk| image:: https://quay.io/repository/biocontainers/atactk/status
   :target: https://quay.io/repository/biocontainers/atactk






Notes
-----
Adds 3 scripts\, namely \"trim\_adapters\"\, \"make\_cut\_matrix\" and \"plot\_aggregate\_matrix.R\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atactk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atactk/README.html

