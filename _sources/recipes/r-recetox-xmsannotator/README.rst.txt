:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-xmsannotator'
.. highlight: bash

r-recetox-xmsannotator
======================

.. conda:recipe:: r-recetox-xmsannotator
   :replaces_section_title:
   :noindex:

   Annotate peak intensity table with compounds from the compounds database. A heavily modified fork of the original xMSannotator by Karan Uppal.

   :homepage: https://github.com/RECETOX/recetox-xMSannotator
   :license: GPL2.0
   :recipe: /`r-recetox-xmsannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-xmsannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-xmsannotator/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.analchem.6b01214`

   


.. conda:package:: r-recetox-xmsannotator

   |downloads_r-recetox-xmsannotator| |docker_r-recetox-xmsannotator|

   :versions:
      
      

      ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends bioconductor-rdisop: 
   :depends boost-cpp: 
   :depends r-arrow: ``>=9.0.0,<10.0.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: ``>=1.30.16``
   :depends r-data.table: ``>=1.14.2``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-entropy: ``>=1.3.1``
   :depends r-flashclust: ``>=1.01_2``
   :depends r-gplots: 
   :depends r-pastecs: ``>=1.3.21``
   :depends r-plyr: ``>=1.8.6``
   :depends r-purrr: ``>=0.3.4``
   :depends r-rann: ``>=2.6.1``
   :depends r-rcdk: ``>=3.5.0``
   :depends r-rcpp: ``>=0.11.0``
   :depends r-readr: ``>=2.0.2``
   :depends r-rlist: ``>=0.4.6.2``
   :depends r-stringi: 
   :depends r-tibble: ``>=3.1.5``
   :depends r-tidyr: ``>=1.1.4``
   :depends r-wgcna: ``>=1.69``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-recetox-xmsannotator

   and update with::

      conda update r-recetox-xmsannotator

   or use the docker container::

      docker pull quay.io/biocontainers/r-recetox-xmsannotator:<tag>

   (see `r-recetox-xmsannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-xmsannotator| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-xmsannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-xmsannotator
   :alt:   (downloads)
.. |docker_r-recetox-xmsannotator| image:: https://quay.io/repository/biocontainers/r-recetox-xmsannotator/status
   :target: https://quay.io/repository/biocontainers/r-recetox-xmsannotator
.. _`r-recetox-xmsannotator/tags`: https://quay.io/repository/biocontainers/r-recetox-xmsannotator?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-xmsannotator";
        var versions = ["0.10.0","0.10.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-xmsannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-xmsannotator/README.html