.. title:: Package Recipe 'bioconductor-gofuncr'
.. highlight: bash


bioconductor-gofuncr
====================

.. conda:recipe:: bioconductor-gofuncr
   :replaces_section_title:

   GOfuncR performs a gene ontology enrichment analysis based on the ontology enrichment software FUNC. GO\-annotations are obtained from OrganismDb or OrgDb packages \(\'Homo.sapiens\' by default\)\; the GO\-graph is included in the package and updated regularly \(11\-Oct\-2018\). GOfuncR provides the standard candidate vs. background enrichment analysis using the hypergeometric test\, as well as three additional tests\: \(i\) the Wilcoxon rank\-sum test that is used when genes are ranked\, \(ii\) a binomial test that is used when genes are associated with two counts and \(iii\) a Chi\-square or Fisher\'s exact test that is used in cases when genes are associated with four counts. To correct for multiple testing and interdependency of the tests\, family\-wise error rates are computed based on random permutations of the gene\-associated variables. GOfuncR also provides tools for exploring the ontology graph and the annotations\, and options to take gene\-length or spatial clustering of genes into account. It is also possible to provide custom gene coordinates\, annotations and ontologies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GOfuncR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gofuncr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofuncr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gofuncr/meta.yaml>`_

   


.. conda:package:: bioconductor-gofuncr

   |downloads_bioconductor-gofuncr| |docker_bioconductor-gofuncr|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gtools` >=3.5.0 :conda:package:`r-mapplots` >=1.5 :conda:package:`r-rcpp` >=0.11.5 :conda:package:`r-vioplot` >=0.2 

   :required~by: |required_by_bioconductor-gofuncr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gofuncr

   and update with::

      conda update bioconductor-gofuncr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gofuncr


.. |required_by_bioconductor-gofuncr| conda:required_by:: bioconductor-gofuncr
.. |downloads_bioconductor-gofuncr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gofuncr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gofuncr| image:: https://quay.io/repository/biocontainers/bioconductor-gofuncr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gofuncr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gofuncr/README.html

