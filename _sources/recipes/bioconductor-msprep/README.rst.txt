:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msprep'
.. highlight: bash

bioconductor-msprep
===================

.. conda:recipe:: bioconductor-msprep
   :replaces_section_title:
   :noindex:

   Package for Summarizing\, Filtering\, Imputing\, and Normalizing Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MSPrep.html
   :license: GPL-3
   :recipe: /`bioconductor-msprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep/meta.yaml>`_

   Package performs summarization of replicates\, filtering by frequency\, several different options for imputing missing data\, and a variety of options for transforming\, batch correcting\, and normalizing data.


.. conda:package:: bioconductor-msprep

   |downloads_bioconductor-msprep| |docker_bioconductor-msprep|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-preprocesscore: ``>=1.56.0,<1.57.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-sva: ``>=3.42.0,<3.43.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-crmn: 
   :depends r-ddpcr: 
   :depends r-dplyr: ``>=0.7``
   :depends r-magrittr: 
   :depends r-missforest: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: ``>=1.2``
   :depends r-tidyr: 
   :depends r-vim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msprep

   and update with::

      conda update bioconductor-msprep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msprep:<tag>

   (see `bioconductor-msprep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msprep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msprep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msprep
   :alt:   (downloads)
.. |docker_bioconductor-msprep| image:: https://quay.io/repository/biocontainers/bioconductor-msprep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msprep
.. _`bioconductor-msprep/tags`: https://quay.io/repository/biocontainers/bioconductor-msprep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msprep";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msprep/README.html