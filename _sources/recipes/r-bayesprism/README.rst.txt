:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bayesprism'
.. highlight: bash

r-bayesprism
============

.. conda:recipe:: r-bayesprism
   :replaces_section_title:
   :noindex:

   BayesPrism\: Bayesian cell type and gene expression deconvolution

   :homepage: https://github.com/omnideconv/BayesPrism
   :license: GPL / GPL-3
   :recipe: /`r-bayesprism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bayesprism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bayesprism/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s43018-022-00356-3`

   


.. conda:package:: r-bayesprism

   |downloads_r-bayesprism| |docker_r-bayesprism|

   :versions:
      
      

      ``0-0``

      

   
   :depends bioconductor-biocparallel: 
   :depends bioconductor-scran: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-nmf: 
   :depends r-r.utils: 
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bayesprism

   and update with::

      conda update r-bayesprism

   or use the docker container::

      docker pull quay.io/biocontainers/r-bayesprism:<tag>

   (see `r-bayesprism/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bayesprism| image:: https://img.shields.io/conda/dn/bioconda/r-bayesprism.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bayesprism
   :alt:   (downloads)
.. |docker_r-bayesprism| image:: https://quay.io/repository/biocontainers/r-bayesprism/status
   :target: https://quay.io/repository/biocontainers/r-bayesprism
.. _`r-bayesprism/tags`: https://quay.io/repository/biocontainers/r-bayesprism?tab=tags


.. raw:: html

    <script>
        var package = "r-bayesprism";
        var versions = ["0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bayesprism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bayesprism/README.html