:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rvs'
.. highlight: bash

bioconductor-rvs
================

.. conda:recipe:: bioconductor-rvs
   :replaces_section_title:
   :noindex:

   Computes estimates of the probability of related individuals sharing a rare variant

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RVS.html
   :license: GPL-2
   :recipe: /`bioconductor-rvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs/meta.yaml>`_

   Rare Variant Sharing \(RVS\) implements tests of association and linkage between rare genetic variant genotypes and a dichotomous phenotype\, e.g. a disease status\, in family samples. The tests are based on probabilities of rare variant sharing by relatives under the null hypothesis of absence of linkage and association between the rare variants and the phenotype and apply to single variants or multiple variants in a region \(e.g. gene\-based test\).


.. conda:package:: bioconductor-rvs

   |downloads_bioconductor-rvs| |docker_bioconductor-rvs|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-snpstats: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-genlib: 
   :depends r-grain: 
   :depends r-kinship2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rvs

   and update with::

      conda update bioconductor-rvs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rvs:<tag>

   (see `bioconductor-rvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rvs
   :alt:   (downloads)
.. |docker_bioconductor-rvs| image:: https://quay.io/repository/biocontainers/bioconductor-rvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rvs
.. _`bioconductor-rvs/tags`: https://quay.io/repository/biocontainers/bioconductor-rvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rvs";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rvs/README.html