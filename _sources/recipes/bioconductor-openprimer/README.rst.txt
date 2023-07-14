:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openprimer'
.. highlight: bash

bioconductor-openprimer
=======================

.. conda:recipe:: bioconductor-openprimer
   :replaces_section_title:
   :noindex:

   Multiplex PCR Primer Design and Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/openPrimeR.html
   :license: GPL-2
   :recipe: /`bioconductor-openprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimer/meta.yaml>`_

   An implementation of methods for designing\, evaluating\, and comparing primer sets for multiplex PCR. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected. A Shiny app providing a user interface for the functionalities of this package is provided by the \'openPrimeRui\' package.


.. conda:package:: bioconductor-openprimer

   |downloads_bioconductor-openprimer| |docker_bioconductor-openprimer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-decipher: ``>=2.28.0,<2.29.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends mafft: ``>=7.305``
   :depends r-ape: ``>=3.5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: ``>=0.6.9``
   :depends r-distr: ``>=2.6``
   :depends r-distrex: ``>=2.6``
   :depends r-dplyr: ``>=0.5.0``
   :depends r-fitdistrplus: ``>=1.0-7``
   :depends r-foreach: ``>=1.4.3``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-hmisc: ``>=3.17-4``
   :depends r-lpsolveapi: ``>=5.5.2.0-17``
   :depends r-magrittr: ``>=1.5``
   :depends r-openxlsx: ``>=4.0.17``
   :depends r-plyr: ``>=1.8.4``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-scales: ``>=0.4.0``
   :depends r-seqinr: ``>=3.3-3``
   :depends r-stringdist: ``>=0.9.4.1``
   :depends r-stringr: ``>=1.0.0``
   :depends r-uniqtag: ``>=1.0``
   :depends r-xml: ``>=3.98-1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-openprimer

   and update with::

      conda update bioconductor-openprimer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-openprimer:<tag>

   (see `bioconductor-openprimer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-openprimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openprimer
   :alt:   (downloads)
.. |docker_bioconductor-openprimer| image:: https://quay.io/repository/biocontainers/bioconductor-openprimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openprimer
.. _`bioconductor-openprimer/tags`: https://quay.io/repository/biocontainers/bioconductor-openprimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openprimer";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openprimer/README.html