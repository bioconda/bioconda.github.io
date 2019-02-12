:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canvas'
.. highlight: bash

canvas
======

.. conda:recipe:: canvas
   :replaces_section_title:

   Copy number variant \(CNV\) calling from DNA sequencing data

   :homepage: https://github.com/Illumina/canvas
   :license: GPLv3
   :recipe: /`canvas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canvas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canvas/meta.yaml>`_

   


.. conda:package:: canvas

   |downloads_canvas| |docker_canvas|

   :versions: 1.35.1.1316-0, 1.25.0-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install canvas

   and update with::

      conda update canvas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/canvas:<tag>

   (see `canvas/tags`_ for valid values for ``<tag>``)


.. |downloads_canvas| image:: https://img.shields.io/conda/dn/bioconda/canvas.svg?style=flat
   :alt:   (downloads)
.. |docker_canvas| image:: https://quay.io/repository/biocontainers/canvas/status
   :target: https://quay.io/repository/biocontainers/canvas
.. _`canvas/tags`: https://quay.io/repository/biocontainers/canvas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canvas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canvas/README.html