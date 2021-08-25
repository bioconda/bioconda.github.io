:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigspack'
.. highlight: bash

bioconductor-sigspack
=====================

.. conda:recipe:: bioconductor-sigspack
   :replaces_section_title:
   :noindex:

   Mutational Signature Estimation for Single Samples

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SigsPack.html
   :license: GPL-3
   :recipe: /`bioconductor-sigspack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack/meta.yaml>`_

   Single sample estimation of exposure to mutational signatures. Exposures to known mutational signatures are estimated for single samples\, based on quadratic programming algorithms. Bootstrapping the input mutational catalogues provides estimations on the stability of these exposures. The effect of the sequence composition of mutational context can be taken into account by normalising the catalogues.


.. conda:package:: bioconductor-sigspack

   |downloads_bioconductor-sigspack| |docker_bioconductor-sigspack|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-quadprog: ``>=1.5-5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigspack

   and update with::

      conda update bioconductor-sigspack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigspack:<tag>

   (see `bioconductor-sigspack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigspack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigspack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigspack
   :alt:   (downloads)
.. |docker_bioconductor-sigspack| image:: https://quay.io/repository/biocontainers/bioconductor-sigspack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigspack
.. _`bioconductor-sigspack/tags`: https://quay.io/repository/biocontainers/bioconductor-sigspack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigspack";
        var versions = ["1.6.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigspack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigspack/README.html