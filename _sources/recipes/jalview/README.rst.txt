:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jalview'
.. highlight: bash

jalview
=======

.. conda:recipe:: jalview
   :replaces_section_title:

   Jalview is a free program for multiple sequence alignment editing\, visualisation and analysis.
   Use it to view and edit sequence alignments\, analyse them with phylogenetic trees and principal
   components analysis \(PCA\) plots and explore molecular structures and annotation.


   :homepage: http://www.jalview.org/
   :license: GNU GENERAL PUBLIC LICENSE, Version 3.0
   :recipe: /`jalview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview/meta.yaml>`_

   


.. conda:package:: jalview

   |downloads_jalview| |docker_jalview|

   :versions: 2.10.5-3, 2.10.4-0, 2.10.4b1-2, 2.10.4b1-0, 2.10.3-1, 2.10.3-0, 2.10.3b1-0, 2.10.2b2-2, 2.10.2b2-1, 2.10.2b2-0
   
   :depends openjdk: >8.0.121
   :depends psutil: 
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jalview

   and update with::

      conda update jalview

   or use the docker container::

      docker pull quay.io/biocontainers/jalview:<tag>

   (see `jalview/tags`_ for valid values for ``<tag>``)


.. |downloads_jalview| image:: https://img.shields.io/conda/dn/bioconda/jalview.svg?style=flat
   :alt:   (downloads)
.. |docker_jalview| image:: https://quay.io/repository/biocontainers/jalview/status
   :target: https://quay.io/repository/biocontainers/jalview
.. _`jalview/tags`: https://quay.io/repository/biocontainers/jalview?tab=tags






Notes
-----
This wrapper and installation is primarily for commandline\-only use.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jalview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jalview/README.html