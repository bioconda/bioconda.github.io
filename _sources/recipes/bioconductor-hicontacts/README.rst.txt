:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicontacts'
.. highlight: bash

bioconductor-hicontacts
=======================

.. conda:recipe:: bioconductor-hicontacts
   :replaces_section_title:
   :noindex:

   Analysing cool files in R with HiContacts

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HiContacts.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicontacts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts/meta.yaml>`_

   HiContacts provides a collection of tools to analyse and visualize Hi\-C datasets imported in R by HiCExperiment.


.. conda:package:: bioconductor-hicontacts

   |downloads_bioconductor-hicontacts| |docker_bioconductor-hicontacts|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocio: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hicexperiment: ``>=1.0.0,<1.1.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrastr: 
   :depends r-matrix: 
   :depends r-readr: 
   :depends r-rspectra: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicontacts

   and update with::

      conda update bioconductor-hicontacts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicontacts:<tag>

   (see `bioconductor-hicontacts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicontacts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicontacts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicontacts
   :alt:   (downloads)
.. |docker_bioconductor-hicontacts| image:: https://quay.io/repository/biocontainers/bioconductor-hicontacts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicontacts
.. _`bioconductor-hicontacts/tags`: https://quay.io/repository/biocontainers/bioconductor-hicontacts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicontacts";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html