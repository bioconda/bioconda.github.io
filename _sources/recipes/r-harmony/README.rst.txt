:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-harmony'
.. highlight: bash

r-harmony
=========

.. conda:recipe:: r-harmony
   :replaces_section_title:
   :noindex:

   Fast\, sensitive and accurate integration of single\-cell data with Harmony

   :homepage: https://github.com/immunogenomics/harmony
   :license: GPL-3.0-only
   :recipe: /`r-harmony <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-harmony>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-harmony/meta.yaml>`_

   


.. conda:package:: r-harmony

   |downloads_r-harmony| |docker_r-harmony|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends bioconductor-singlecellexperiment: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-harmony

   and update with::

      conda update r-harmony

   or use the docker container::

      docker pull quay.io/biocontainers/r-harmony:<tag>

   (see `r-harmony/tags`_ for valid values for ``<tag>``)


.. |downloads_r-harmony| image:: https://img.shields.io/conda/dn/bioconda/r-harmony.svg?style=flat
   :target: https://anaconda.org/bioconda/r-harmony
   :alt:   (downloads)
.. |docker_r-harmony| image:: https://quay.io/repository/biocontainers/r-harmony/status
   :target: https://quay.io/repository/biocontainers/r-harmony
.. _`r-harmony/tags`: https://quay.io/repository/biocontainers/r-harmony?tab=tags


.. raw:: html

    <script>
        var package = "r-harmony";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-harmony/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-harmony/README.html