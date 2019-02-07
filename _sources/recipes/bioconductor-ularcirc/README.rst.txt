.. title:: Package Recipe 'bioconductor-ularcirc'
.. highlight: bash


bioconductor-ularcirc
=====================

.. conda:recipe:: bioconductor-ularcirc
   :replaces_section_title:

   Ularcirc reads in STAR aligned splice junction files and provides visualisation and analysis tools for splicing analysis. Users can assess backsplice junctions and forward canonical junctions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Ularcirc.html
   :license: file LICENSE
   :recipe: /`bioconductor-ularcirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ularcirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ularcirc/meta.yaml>`_

   


.. conda:package:: bioconductor-ularcirc

   |downloads_bioconductor-ularcirc| |docker_bioconductor-ularcirc|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomeinfodbdata` >=1.2.0,<1.3.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-mirbase.db` >=1.2.0,<1.3.0 :conda:package:`bioconductor-sushi` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.9.4 :conda:package:`r-dt`  :conda:package:`r-gsubfn`  :conda:package:`r-httpuv`  :conda:package:`r-moments`  :conda:package:`r-shiny`  :conda:package:`r-shinyfiles`  :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-ularcirc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ularcirc

   and update with::

      conda update bioconductor-ularcirc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ularcirc


.. |required_by_bioconductor-ularcirc| conda:required_by:: bioconductor-ularcirc
.. |downloads_bioconductor-ularcirc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ularcirc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ularcirc| image:: https://quay.io/repository/biocontainers/bioconductor-ularcirc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ularcirc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ularcirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ularcirc/README.html

