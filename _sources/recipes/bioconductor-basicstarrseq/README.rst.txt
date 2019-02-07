.. title:: Package Recipe 'bioconductor-basicstarrseq'
.. highlight: bash


bioconductor-basicstarrseq
==========================

.. conda:recipe:: bioconductor-basicstarrseq
   :replaces_section_title:

   Basic peak calling on STARR\-seq data based on a method introduced in \"Genome\-Wide Quantitative Enhancer Activity Maps Identified by STARR\-seq\" Arnold et al. Science. 2013 Mar 1\;339\(6123\)\:1074\-7. doi\: 10.1126\/science. 1232542. Epub 2013 Jan 17.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BasicSTARRseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basicstarrseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq/meta.yaml>`_

   


.. conda:package:: bioconductor-basicstarrseq

   |downloads_bioconductor-basicstarrseq| |docker_bioconductor-basicstarrseq|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-basicstarrseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basicstarrseq

   and update with::

      conda update bioconductor-basicstarrseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-basicstarrseq


.. |required_by_bioconductor-basicstarrseq| conda:required_by:: bioconductor-basicstarrseq
.. |downloads_bioconductor-basicstarrseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstarrseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-basicstarrseq| image:: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html

