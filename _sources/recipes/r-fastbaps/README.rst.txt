:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fastbaps'
.. highlight: bash

r-fastbaps
==========

.. conda:recipe:: r-fastbaps
   :replaces_section_title:
   :noindex:

   A fast approximation to a Dirichlet Process Mixture model \(DPM\) for clustering genetic data

   :homepage: https://github.com/gtonkinhill/fastbaps
   :license: MIT / MIT
   :recipe: /`r-fastbaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1472299`, doi: :doi:`10.1093/nar/gkz361`

   


.. conda:package:: r-fastbaps

   |downloads_r-fastbaps| |docker_r-fastbaps|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-ggtree: 
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends r-adegenet: 
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clusteval: 
   :depends r-doparallel: 
   :depends r-fastcluster: 
   :depends r-genie: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-phytools: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-fastbaps

   and update with::

      conda update r-fastbaps

   or use the docker container::

      docker pull quay.io/biocontainers/r-fastbaps:<tag>

   (see `r-fastbaps/tags`_ for valid values for ``<tag>``)


.. |downloads_r-fastbaps| image:: https://img.shields.io/conda/dn/bioconda/r-fastbaps.svg?style=flat
   :target: https://anaconda.org/bioconda/r-fastbaps
   :alt:   (downloads)
.. |docker_r-fastbaps| image:: https://quay.io/repository/biocontainers/r-fastbaps/status
   :target: https://quay.io/repository/biocontainers/r-fastbaps
.. _`r-fastbaps/tags`: https://quay.io/repository/biocontainers/r-fastbaps?tab=tags


.. raw:: html

    <script>
        var package = "r-fastbaps";
        var versions = ["1.0.6","1.0.6","1.0.4","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fastbaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fastbaps/README.html