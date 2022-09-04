:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-anndata'
.. highlight: bash

r-anndata
=========

.. conda:recipe:: r-anndata
   :replaces_section_title:
   :noindex:

   A \'reticulate\' wrapper for the Python package \'anndata\'. Provides a scalable way of keeping track of data and learned annotations.  Used to read from and write to the h5ad file format.

   :homepage: https://github.com/dynverse/anndata
   :license: MIT / MIT
   :recipe: /`r-anndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1382-0`

   


.. conda:package:: r-anndata

   |downloads_r-anndata| |docker_r-anndata|

   :versions:
      
      

      ``0.7.5.4-0``,  ``0.7.5.2-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-r6: 
   :depends r-reticulate: ``>=1.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-anndata

   and update with::

      conda update r-anndata

   or use the docker container::

      docker pull quay.io/biocontainers/r-anndata:<tag>

   (see `r-anndata/tags`_ for valid values for ``<tag>``)


.. |downloads_r-anndata| image:: https://img.shields.io/conda/dn/bioconda/r-anndata.svg?style=flat
   :target: https://anaconda.org/bioconda/r-anndata
   :alt:   (downloads)
.. |docker_r-anndata| image:: https://quay.io/repository/biocontainers/r-anndata/status
   :target: https://quay.io/repository/biocontainers/r-anndata
.. _`r-anndata/tags`: https://quay.io/repository/biocontainers/r-anndata?tab=tags


.. raw:: html

    <script>
        var package = "r-anndata";
        var versions = ["0.7.5.4","0.7.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-anndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-anndata/README.html