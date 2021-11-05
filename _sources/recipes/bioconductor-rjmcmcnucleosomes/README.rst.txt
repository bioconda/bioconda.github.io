:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rjmcmcnucleosomes'
.. highlight: bash

bioconductor-rjmcmcnucleosomes
==============================

.. conda:recipe:: bioconductor-rjmcmcnucleosomes
   :replaces_section_title:
   :noindex:

   Bayesian hierarchical model for genome\-wide nucleosome positioning with high\-throughput short\-read data \(MNase\-Seq\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RJMCMCNucleosomes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rjmcmcnucleosomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rjmcmcnucleosomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rjmcmcnucleosomes/meta.yaml>`_

   This package does nucleosome positioning using informative Multinomial\-Dirichlet prior in a t\-mixture with reversible jump estimation of nucleosome positions for genome\-wide profiling.


.. conda:package:: bioconductor-rjmcmcnucleosomes

   |downloads_bioconductor-rjmcmcnucleosomes| |docker_bioconductor-rjmcmcnucleosomes|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-consensusseeker: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.12.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rjmcmcnucleosomes

   and update with::

      conda update bioconductor-rjmcmcnucleosomes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rjmcmcnucleosomes:<tag>

   (see `bioconductor-rjmcmcnucleosomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rjmcmcnucleosomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rjmcmcnucleosomes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rjmcmcnucleosomes
   :alt:   (downloads)
.. |docker_bioconductor-rjmcmcnucleosomes| image:: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes
.. _`bioconductor-rjmcmcnucleosomes/tags`: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rjmcmcnucleosomes";
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rjmcmcnucleosomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rjmcmcnucleosomes/README.html