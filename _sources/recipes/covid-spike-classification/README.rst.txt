:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covid-spike-classification'
.. highlight: bash

covid-spike-classification
==========================

.. conda:recipe:: covid-spike-classification
   :replaces_section_title:
   :noindex:

   Detect interesting SARS\-CoV\-2 spike protein variants from Sanger sequencing data.

   :homepage: https://github.com/kblin/covid-spike-classification/
   :license: APACHE / Apache Software
   :recipe: /`covid-spike-classification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification/meta.yaml>`_

   


.. conda:package:: covid-spike-classification

   |downloads_covid-spike-classification| |docker_covid-spike-classification|

   :versions:
      
      

      ``0.2.4-0``

      

   
   :depends biopython: ``>=1.78``
   :depends bowtie2: ``>=2.4.2``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.10``
   :depends tracy: ``>=0.5.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install covid-spike-classification

   and update with::

      conda update covid-spike-classification

   or use the docker container::

      docker pull quay.io/biocontainers/covid-spike-classification:<tag>

   (see `covid-spike-classification/tags`_ for valid values for ``<tag>``)


.. |downloads_covid-spike-classification| image:: https://img.shields.io/conda/dn/bioconda/covid-spike-classification.svg?style=flat
   :target: https://anaconda.org/bioconda/covid-spike-classification
   :alt:   (downloads)
.. |docker_covid-spike-classification| image:: https://quay.io/repository/biocontainers/covid-spike-classification/status
   :target: https://quay.io/repository/biocontainers/covid-spike-classification
.. _`covid-spike-classification/tags`: https://quay.io/repository/biocontainers/covid-spike-classification?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covid-spike-classification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covid-spike-classification/README.html