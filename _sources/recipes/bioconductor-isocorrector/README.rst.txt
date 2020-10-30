:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isocorrector'
.. highlight: bash

bioconductor-isocorrector
=========================

.. conda:recipe:: bioconductor-isocorrector
   :replaces_section_title:
   :noindex:

   Correction for natural isotope abundance and tracer purity in MS and MS\/MS data from stable isotope labeling experiments

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/IsoCorrectoR.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector/meta.yaml>`_

   IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\). See the Bioconductor package IsoCorrectoRGUI for a graphical user interface to IsoCorrectoR.


.. conda:package:: bioconductor-isocorrector

   |downloads_bioconductor-isocorrector| |docker_bioconductor-isocorrector|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.5-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-readr: 
   :depends r-readxl: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-writexls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isocorrector

   and update with::

      conda update bioconductor-isocorrector

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isocorrector:<tag>

   (see `bioconductor-isocorrector/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isocorrector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrector.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isocorrector
   :alt:   (downloads)
.. |docker_bioconductor-isocorrector| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrector
.. _`bioconductor-isocorrector/tags`: https://quay.io/repository/biocontainers/bioconductor-isocorrector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html