:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocsklearn'
.. highlight: bash

bioconductor-biocsklearn
========================

.. conda:recipe:: bioconductor-biocsklearn
   :replaces_section_title:
   :noindex:

   interface to python sklearn via Rstudio reticulate

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BiocSklearn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocsklearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn/meta.yaml>`_

   This package provides interfaces to selected sklearn elements\, and demonstrates fault tolerant use of python modules requiring extensive iteration.


.. conda:package:: bioconductor-biocsklearn

   |downloads_bioconductor-biocsklearn| |docker_bioconductor-biocsklearn|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.3-1``,  ``1.10.3-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.6.0,<1.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-knitr: 
   :depends r-rcpp: 
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocsklearn

   and update with::

      conda update bioconductor-biocsklearn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocsklearn:<tag>

   (see `bioconductor-biocsklearn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocsklearn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsklearn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocsklearn
   :alt:   (downloads)
.. |docker_bioconductor-biocsklearn| image:: https://quay.io/repository/biocontainers/bioconductor-biocsklearn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsklearn
.. _`bioconductor-biocsklearn/tags`: https://quay.io/repository/biocontainers/bioconductor-biocsklearn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocsklearn";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html