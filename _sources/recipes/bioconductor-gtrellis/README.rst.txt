.. title:: Package Recipe 'bioconductor-gtrellis'
.. highlight: bash


bioconductor-gtrellis
=====================

.. conda:recipe:: bioconductor-gtrellis
   :replaces_section_title:

   Genome level Trellis graph visualizes genomic data conditioned by genomic categories \(e.g. chromosomes\). For each genomic category\, multiple dimensional data which are represented as tracks describe different features from different aspects. This package provides high flexibility to arrange genomic categories and to add self\-defined graphics in the plot.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gtrellis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gtrellis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gtrellis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gtrellis/meta.yaml>`_
   :links: biotools: :biotools:`gtrellis`

   


.. conda:package:: bioconductor-gtrellis

   |downloads_bioconductor-gtrellis| |docker_bioconductor-gtrellis|

   :versions: 1.14.0, 1.12.1, 1.11.1

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize` >=0.3.3 :conda:package:`r-getoptlong`  

   :required~by: |required_by_bioconductor-gtrellis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gtrellis

   and update with::

      conda update bioconductor-gtrellis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gtrellis


.. |required_by_bioconductor-gtrellis| conda:required_by:: bioconductor-gtrellis
.. |downloads_bioconductor-gtrellis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gtrellis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gtrellis| image:: https://quay.io/repository/biocontainers/bioconductor-gtrellis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gtrellis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gtrellis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gtrellis/README.html

