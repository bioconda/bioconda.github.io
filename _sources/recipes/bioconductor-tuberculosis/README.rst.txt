:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tuberculosis'
.. highlight: bash

bioconductor-tuberculosis
=========================

.. conda:recipe:: bioconductor-tuberculosis
   :replaces_section_title:
   :noindex:

   Tuberculosis Gene Expression Data for Machine Learning

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/tuberculosis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tuberculosis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis/meta.yaml>`_

   The tuberculosis R\/Bioconductor package features tuberculosis gene expression data for machine learning. All human samples from GEO that did not come from cell lines\, were not taken postmortem\, and did not feature recombination have been included. The package has more than 10\,000 samples from both microarray and sequencing studies that have been processed from raw data through a hyper\-standardized\, reproducible pipeline.


.. conda:package:: bioconductor-tuberculosis

   |downloads_bioconductor-tuberculosis| |docker_bioconductor-tuberculosis|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tuberculosis

   and update with::

      conda update bioconductor-tuberculosis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tuberculosis:<tag>

   (see `bioconductor-tuberculosis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tuberculosis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tuberculosis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tuberculosis
   :alt:   (downloads)
.. |docker_bioconductor-tuberculosis| image:: https://quay.io/repository/biocontainers/bioconductor-tuberculosis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tuberculosis
.. _`bioconductor-tuberculosis/tags`: https://quay.io/repository/biocontainers/bioconductor-tuberculosis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tuberculosis";
        var versions = ["1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html