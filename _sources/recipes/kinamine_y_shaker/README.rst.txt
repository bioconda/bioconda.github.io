:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinamine_y_shaker'
.. highlight: bash

kinamine_y_shaker
=================

.. conda:recipe:: kinamine_y_shaker
   :replaces_section_title:

   Kinamine is a tool to export all phospho\-peptides that were discovered by a mass spec search program

   :homepage: https://github.com/LaurieParkerLab/KinamineY-shaker
   :license: APACHE / Apache License 2.0
   :recipe: /`kinamine_y_shaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker/meta.yaml>`_
   :links: doi: :doi:`10.1021/ja507164a`

   Kinamine searches for phosphopeptides that were discovered by a mass spec search program \(in this case Peptide Shaker\) and outputs those peptides into a single file.  The peptides are centered on their phosphorylated amino acid.



.. conda:package:: kinamine_y_shaker

   |downloads_kinamine_y_shaker| |docker_kinamine_y_shaker|

   :versions: 1.0.0-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kinamine_y_shaker

   and update with::

      conda update kinamine_y_shaker

   or use the docker container::

      docker pull quay.io/biocontainers/kinamine_y_shaker:<tag>

   (see `kinamine_y_shaker/tags`_ for valid values for ``<tag>``)


.. |downloads_kinamine_y_shaker| image:: https://img.shields.io/conda/dn/bioconda/kinamine_y_shaker.svg?style=flat
   :target: https://anaconda.org/bioconda/kinamine_y_shaker
   :alt:   (downloads)
.. |docker_kinamine_y_shaker| image:: https://quay.io/repository/biocontainers/kinamine_y_shaker/status
   :target: https://quay.io/repository/biocontainers/kinamine_y_shaker
.. _`kinamine_y_shaker/tags`: https://quay.io/repository/biocontainers/kinamine_y_shaker?tab=tags






Notes
-----
Kinamine is a Java program originally written by Kevin Murray of UMN and updated by John Blankenhorn also of UMN



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinamine_y_shaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinamine_y_shaker/README.html