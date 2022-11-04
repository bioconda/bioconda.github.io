:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omixer'
.. highlight: bash

bioconductor-omixer
===================

.. conda:recipe:: bioconductor-omixer
   :replaces_section_title:
   :noindex:

   Omixer\: multivariate and reproducible sample randomization to proactively counter batch effects in omics studies

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Omixer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omixer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omixer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omixer/meta.yaml>`_

   Omixer \- an Bioconductor package for multivariate and reproducible sample randomization\, which ensures optimal sample distribution across batches with well\-documented methods. It outputs lab\-friendly sample layouts\, reducing the risk of sample mixups when manually pipetting randomized samples.


.. conda:package:: bioconductor-omixer

   |downloads_bioconductor-omixer| |docker_bioconductor-omixer|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.4-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omixer

   and update with::

      conda update bioconductor-omixer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omixer:<tag>

   (see `bioconductor-omixer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omixer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omixer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omixer
   :alt:   (downloads)
.. |docker_bioconductor-omixer| image:: https://quay.io/repository/biocontainers/bioconductor-omixer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omixer
.. _`bioconductor-omixer/tags`: https://quay.io/repository/biocontainers/bioconductor-omixer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omixer";
        var versions = ["1.8.0","1.4.0","1.2.1","1.0.4","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omixer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omixer/README.html