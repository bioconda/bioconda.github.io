:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbioportaldata'
.. highlight: bash

bioconductor-cbioportaldata
===========================

.. conda:recipe:: bioconductor-cbioportaldata
   :replaces_section_title:
   :noindex:

   Exposes and makes available data from the cBioPortal web resources

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cBioPortalData.html
   :license: AGPL-3
   :recipe: /`bioconductor-cbioportaldata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbioportaldata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbioportaldata/meta.yaml>`_

   The cBioPortalData R package accesses study datasets from the cBio Cancer Genomics Portal. It accesses the data either from the pre\-packaged zip \/ tar files or from the API interface that was recently implemented by the cBioPortal Data Team. The package can provide data in either tabular format or with MultiAssayExperiment object that uses familiar Bioconductor data representations.


.. conda:package:: bioconductor-cbioportaldata

   |downloads_bioconductor-cbioportaldata| |docker_bioconductor-cbioportaldata|

   :versions:
      
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.8-0``,  ``2.2.3-0``,  ``2.0.3-0``

      

   
   :depends bioconductor-anvil: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-raggedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rtcgatoolbox: ``>=2.30.0,<2.31.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tcgautils: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-readr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cbioportaldata

   and update with::

      conda update bioconductor-cbioportaldata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cbioportaldata:<tag>

   (see `bioconductor-cbioportaldata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cbioportaldata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbioportaldata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbioportaldata
   :alt:   (downloads)
.. |docker_bioconductor-cbioportaldata| image:: https://quay.io/repository/biocontainers/bioconductor-cbioportaldata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbioportaldata
.. _`bioconductor-cbioportaldata/tags`: https://quay.io/repository/biocontainers/bioconductor-cbioportaldata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbioportaldata";
        var versions = ["2.12.0","2.10.0","2.6.0","2.4.0","2.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbioportaldata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbioportaldata/README.html