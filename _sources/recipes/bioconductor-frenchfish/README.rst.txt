:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frenchfish'
.. highlight: bash

bioconductor-frenchfish
=======================

.. conda:recipe:: bioconductor-frenchfish
   :replaces_section_title:
   :noindex:

   Poisson Models for Quantifying DNA Copy\-number from FISH Images of Tissue Sections

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/frenchFISH.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-frenchfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frenchfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frenchfish/meta.yaml>`_

   FrenchFISH comprises a nuclear volume correction method coupled with two types of Poisson models\: either a Poisson model for improved manual spot counting without the need for control probes\; or a homogenous Poisson Point Process model for automated spot counting.


.. conda:package:: bioconductor-frenchfish

   |downloads_bioconductor-frenchfish| |docker_bioconductor-frenchfish|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-mcmcpack: 
   :depends r-nhpoisson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frenchfish

   and update with::

      conda update bioconductor-frenchfish

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frenchfish:<tag>

   (see `bioconductor-frenchfish/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frenchfish| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frenchfish.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frenchfish
   :alt:   (downloads)
.. |docker_bioconductor-frenchfish| image:: https://quay.io/repository/biocontainers/bioconductor-frenchfish/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frenchfish
.. _`bioconductor-frenchfish/tags`: https://quay.io/repository/biocontainers/bioconductor-frenchfish?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-frenchfish";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frenchfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frenchfish/README.html