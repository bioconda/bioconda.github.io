:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-noisyr'
.. highlight: bash

r-noisyr
========

.. conda:recipe:: r-noisyr
   :replaces_section_title:
   :noindex:

   Quantifies and removes technical noise from high\-throughput sequencing data. Two approaches are used\, one based on the count matrix\, and one using the alignment BAM files directly. Contains several options for every step of the process\, as well as tools to quality check and assess the stability of output.

   :homepage: https://github.com/Core-Bioinformatics/noisyR
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-noisyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-noisyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-noisyr/meta.yaml>`_

   


.. conda:package:: r-noisyr

   |downloads_r-noisyr| |docker_r-noisyr|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-philentropy: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-noisyr

   and update with::

      conda update r-noisyr

   or use the docker container::

      docker pull quay.io/biocontainers/r-noisyr:<tag>

   (see `r-noisyr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-noisyr| image:: https://img.shields.io/conda/dn/bioconda/r-noisyr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-noisyr
   :alt:   (downloads)
.. |docker_r-noisyr| image:: https://quay.io/repository/biocontainers/r-noisyr/status
   :target: https://quay.io/repository/biocontainers/r-noisyr
.. _`r-noisyr/tags`: https://quay.io/repository/biocontainers/r-noisyr?tab=tags


.. raw:: html

    <script>
        var package = "r-noisyr";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-noisyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-noisyr/README.html