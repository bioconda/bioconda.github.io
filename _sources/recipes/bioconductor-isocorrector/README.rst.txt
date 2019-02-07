.. title:: Package Recipe 'bioconductor-isocorrector'
.. highlight: bash


bioconductor-isocorrector
=========================

.. conda:recipe:: bioconductor-isocorrector
   :replaces_section_title:

   IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\). See the Bioconductor package IsoCorrectoRGUI for a graphical user interface to IsoCorrectoR. IsoCorrectoRGUI is currently only available in the devel version of Bioconductor.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IsoCorrectoR.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector/meta.yaml>`_

   


.. conda:package:: bioconductor-isocorrector

   |downloads_bioconductor-isocorrector| |docker_bioconductor-isocorrector|

   :versions: 1.0.5

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-magrittr`  :conda:package:`r-pracma`  :conda:package:`r-quadprog`  :conda:package:`r-readr`  :conda:package:`r-readxl`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-writexls`  

   :required~by: |required_by_bioconductor-isocorrector|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isocorrector

   and update with::

      conda update bioconductor-isocorrector

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-isocorrector


.. |required_by_bioconductor-isocorrector| conda:required_by:: bioconductor-isocorrector
.. |downloads_bioconductor-isocorrector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrector.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isocorrector| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrector







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html

