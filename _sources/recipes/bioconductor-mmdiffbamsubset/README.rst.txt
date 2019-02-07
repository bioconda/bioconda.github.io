.. title:: Package Recipe 'bioconductor-mmdiffbamsubset'
.. highlight: bash


bioconductor-mmdiffbamsubset
============================

.. conda:recipe:: bioconductor-mmdiffbamsubset
   :replaces_section_title:

   Subset of BAM files\, including WT\_2.bam\, Null\_2.bam\, Resc\_2.bam\, Input.bam from the \"Cfp1\" experiment \(see Clouaire et al.\, Genes Dev. 2012\). Data is available under ArrayExpress accession numbers E\-ERAD\-79. Additionally\, corresponding subset of peaks called by MACS

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MMDiffBamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-mmdiffbamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset/meta.yaml>`_

   


.. conda:package:: bioconductor-mmdiffbamsubset

   |downloads_bioconductor-mmdiffbamsubset| |docker_bioconductor-mmdiffbamsubset|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mmdiffbamsubset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmdiffbamsubset

   and update with::

      conda update bioconductor-mmdiffbamsubset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset


.. |required_by_bioconductor-mmdiffbamsubset| conda:required_by:: bioconductor-mmdiffbamsubset
.. |downloads_bioconductor-mmdiffbamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiffbamsubset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mmdiffbamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html

