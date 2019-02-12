.. title:: Package Recipe 'bioconductor-rbowtie2'
.. highlight: bash


bioconductor-rbowtie2
=====================

.. conda:recipe:: bioconductor-rbowtie2
   :replaces_section_title:

   This package provides an R wrapper of the popular bowtie2 sequencing reads aligner and AdapterRemoval\, a convenient tool for rapid adapter trimming\, identification\, and read merging.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rbowtie2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rbowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2/meta.yaml>`_

   


.. conda:package:: bioconductor-rbowtie2

   |downloads_bioconductor-rbowtie2| |docker_bioconductor-rbowtie2|

   :versions: 1.4.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rbowtie2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbowtie2

   and update with::

      conda update bioconductor-rbowtie2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rbowtie2


.. |required_by_bioconductor-rbowtie2| conda:required_by:: bioconductor-rbowtie2
.. |downloads_bioconductor-rbowtie2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie2| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html

