:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqbias'
.. highlight: bash

bioconductor-seqbias
====================

.. conda:recipe:: bioconductor-seqbias
   :replaces_section_title:
   :noindex:

   Estimation of per\-position bias in high\-throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/seqbias.html
   :license: LGPL-3
   :recipe: /`bioconductor-seqbias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias/meta.yaml>`_

   This package implements a model of per\-position sequencing bias in high\-throughput sequencing data using a simple Bayesian network\, the structure and parameters of which are trained on a set of aligned reads and a reference genome sequence.


.. conda:package:: bioconductor-seqbias

   |downloads_bioconductor-seqbias| |docker_bioconductor-seqbias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqbias

   and update with::

      conda update bioconductor-seqbias

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqbias:<tag>

   (see `bioconductor-seqbias/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqbias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqbias.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqbias
   :alt:   (downloads)
.. |docker_bioconductor-seqbias| image:: https://quay.io/repository/biocontainers/bioconductor-seqbias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqbias
.. _`bioconductor-seqbias/tags`: https://quay.io/repository/biocontainers/bioconductor-seqbias?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqbias";
        var versions = ["1.42.0","1.42.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqbias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqbias/README.html