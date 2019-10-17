:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitos'
.. highlight: bash

mitos
=====

.. conda:recipe:: mitos
   :replaces_section_title:

   MITOS is a tool for the annotation of metazoan mitochondrial genomes.

   :homepage: http://mitos.bioinf.uni-leipzig.de
   :developer docs: https://gitlab.com/Bernt/MITOS
   :license: MIT / MIT
   :recipe: /`mitos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitos/meta.yaml>`_

   


.. conda:package:: mitos

   |downloads_mitos| |docker_mitos|

   :versions: 2.0.2-1, 2.0.2-0, 2.0.1-0, 1.0.2-0, 1.0.1-1, 1.0.1-0
   
   :depends biopython: 1.73
   :depends blast: 2.9.*
   :depends ete2: 2.3.*
   :depends hmmer: 3.2.*
   :depends infernal: 1.1.*
   :depends openjdk: 
   :depends python: <3
   :depends r-base: 
   :depends r-ggplot2: 3.1.*
   :depends reportlab: 
   :depends viennarna: <2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mitos

   and update with::

      conda update mitos

   or use the docker container::

      docker pull quay.io/biocontainers/mitos:<tag>

   (see `mitos/tags`_ for valid values for ``<tag>``)


.. |downloads_mitos| image:: https://img.shields.io/conda/dn/bioconda/mitos.svg?style=flat
   :target: https://anaconda.org/bioconda/mitos
   :alt:   (downloads)
.. |docker_mitos| image:: https://quay.io/repository/biocontainers/mitos/status
   :target: https://quay.io/repository/biocontainers/mitos
.. _`mitos/tags`: https://quay.io/repository/biocontainers/mitos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitos/README.html