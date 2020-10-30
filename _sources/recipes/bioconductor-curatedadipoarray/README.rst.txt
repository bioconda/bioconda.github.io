:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadipoarray'
.. highlight: bash

bioconductor-curatedadipoarray
==============================

.. conda:recipe:: bioconductor-curatedadipoarray
   :replaces_section_title:
   :noindex:

   A Curated Microarrays Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\) Under Genetic and Pharmacological Perturbations

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/curatedAdipoArray.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-curatedadipoarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipoarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipoarray/meta.yaml>`_

   A curated dataset of Microarrays samples. The samples are MDI\- induced pre\-adipocytes \(3T3\-L1\) at different time points\/stage of differentiation under different types of genetic \(knockdown\/overexpression\) and pharmacological \(drug treatment\) perturbations. The package documents the data collection and processing. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadipoarray

   |downloads_bioconductor-curatedadipoarray| |docker_bioconductor-curatedadipoarray|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedadipoarray

   and update with::

      conda update bioconductor-curatedadipoarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedadipoarray:<tag>

   (see `bioconductor-curatedadipoarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedadipoarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadipoarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadipoarray
   :alt:   (downloads)
.. |docker_bioconductor-curatedadipoarray| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray
.. _`bioconductor-curatedadipoarray/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadipoarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadipoarray/README.html