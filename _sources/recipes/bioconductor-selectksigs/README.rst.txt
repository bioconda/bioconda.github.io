:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-selectksigs'
.. highlight: bash

bioconductor-selectksigs
========================

.. conda:recipe:: bioconductor-selectksigs
   :replaces_section_title:
   :noindex:

   Selecting the number of mutational signatures using a perplexity\-based measure and cross\-validation

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/selectKSigs.html
   :license: GPL-3
   :recipe: /`bioconductor-selectksigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selectksigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selectksigs/meta.yaml>`_

   A package to suggest the number of mutational signatures in a collection of somatic mutations using calculating the cross\-validated perplexity score.


.. conda:package:: bioconductor-selectksigs

   |downloads_bioconductor-selectksigs| |docker_bioconductor-selectksigs|

   :versions:
      
      

      ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-hilda: ``>=1.8.0,<1.9.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-selectksigs

   and update with::

      conda update bioconductor-selectksigs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-selectksigs:<tag>

   (see `bioconductor-selectksigs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-selectksigs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-selectksigs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-selectksigs
   :alt:   (downloads)
.. |docker_bioconductor-selectksigs| image:: https://quay.io/repository/biocontainers/bioconductor-selectksigs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-selectksigs
.. _`bioconductor-selectksigs/tags`: https://quay.io/repository/biocontainers/bioconductor-selectksigs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-selectksigs";
        var versions = ["1.6.0","1.6.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-selectksigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-selectksigs/README.html