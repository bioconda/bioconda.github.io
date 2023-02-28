:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raresim'
.. highlight: bash

bioconductor-raresim
====================

.. conda:recipe:: bioconductor-raresim
   :replaces_section_title:
   :noindex:

   Simulation of Rare Variant Genetic Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RAREsim.html
   :license: GPL-3
   :recipe: /`bioconductor-raresim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raresim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raresim/meta.yaml>`_

   Haplotype simulations of rare variant genetic data that emulates real data can be performed with RAREsim. RAREsim uses the expected number of variants in MAC bins \- either as provided by default parameters or estimated from target data \- and an abundance of rare variants as simulated HAPGEN2 to probabilistically prune variants. RAREsim produces haplotypes that emulate real sequencing data with respect to the total number of variants\, allele frequency spectrum\, haplotype structure\, and variant annotation.


.. conda:package:: bioconductor-raresim

   |downloads_bioconductor-raresim| |docker_bioconductor-raresim|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-nloptr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-raresim

   and update with::

      conda update bioconductor-raresim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-raresim:<tag>

   (see `bioconductor-raresim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-raresim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raresim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raresim
   :alt:   (downloads)
.. |docker_bioconductor-raresim| image:: https://quay.io/repository/biocontainers/bioconductor-raresim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raresim
.. _`bioconductor-raresim/tags`: https://quay.io/repository/biocontainers/bioconductor-raresim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raresim";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raresim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raresim/README.html