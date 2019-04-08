:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipmir'
.. highlight: bash

pipmir
======

.. conda:recipe:: pipmir
   :replaces_section_title:

   We developed the PIPmiR algorithm to identify novel plant miRNA genes from a combination of deep sequencing data and genomic features.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Pipeline_for_the_Identification_of_Plant_miRNAs_84/
   :license: PIPmiR is provided for academic use only, if you wish to use it in another setting please contact Uwe Ohler.
   :recipe: /`pipmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir/meta.yaml>`_
   :links: biotools: :biotools:`pipmir`, doi: :doi:`10.1101/gr.123547.111`

   


.. conda:package:: pipmir

   |downloads_pipmir| |docker_pipmir|

   :versions: 1.1-3, 1.1-2, 1.1-1
   
   :depends java-jdk: 
   :depends samtools: 
   :depends viennarna: 1.8.5.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pipmir

   and update with::

      conda update pipmir

   or use the docker container::

      docker pull quay.io/biocontainers/pipmir:<tag>

   (see `pipmir/tags`_ for valid values for ``<tag>``)


.. |downloads_pipmir| image:: https://img.shields.io/conda/dn/bioconda/pipmir.svg?style=flat
   :alt:   (downloads)
.. |docker_pipmir| image:: https://quay.io/repository/biocontainers/pipmir/status
   :target: https://quay.io/repository/biocontainers/pipmir
.. _`pipmir/tags`: https://quay.io/repository/biocontainers/pipmir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipmir/README.html