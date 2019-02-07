.. title:: Package Recipe 'das_tool'
.. highlight: bash


das_tool
========

.. conda:recipe:: das_tool
   :replaces_section_title:

   Recovery of genomes from metagenomes via a dereplication\,
   aggregation and scoring strategy.


   :homepage: https://github.com/cmks/DAS_Tool
   :license: BSD
   :recipe: /`das_tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41564-018-0171-1`

   DAS Tool is an automated method that integrates the results of a
   flexible number of binning algorithms to calculate an optimized\,
   non\-redundant set of bins from a single assembly.



.. conda:package:: das_tool

   |downloads_das_tool| |docker_das_tool|

   :versions: 1.1.1

   :depends: :conda:package:`blast` 2.7.1.* :conda:package:`diamond` 0.9.22.* :conda:package:`gawk`  :conda:package:`numpy` 1.15.0.* :conda:package:`prodigal` 2.6.3.* :conda:package:`pullseq` 1.0.2.* :conda:package:`python` 3.6.* :conda:package:`r` 3.5.1.* :conda:package:`r-data.table` 1.11.4.* :conda:package:`r-domc` 1.3.5.* :conda:package:`r-ggplot2` 3.1.* :conda:package:`ruby` 2.4.4.* :conda:package:`unzip`  

   :required~by: |required_by_das_tool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install das_tool

   and update with::

      conda update das_tool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/das_tool


.. |required_by_das_tool| conda:required_by:: das_tool
.. |downloads_das_tool| image:: https://img.shields.io/conda/dn/bioconda/das_tool.svg?style=flat
   :alt:   (downloads)
.. |docker_das_tool| image:: https://quay.io/repository/biocontainers/das_tool/status
   :target: https://quay.io/repository/biocontainers/das_tool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/das_tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/das_tool/README.html

