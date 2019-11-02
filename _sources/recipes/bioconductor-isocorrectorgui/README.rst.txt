:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isocorrectorgui'
.. highlight: bash

bioconductor-isocorrectorgui
============================

.. conda:recipe:: bioconductor-isocorrectorgui
   :replaces_section_title:

   IsoCorrectoRGUI is a Graphical User Interface for the IsoCorrectoR package. IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/IsoCorrectoRGUI.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrectorgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrectorgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrectorgui/meta.yaml>`_

   


.. conda:package:: bioconductor-isocorrectorgui

   |downloads_bioconductor-isocorrectorgui| |docker_bioconductor-isocorrectorgui|

   :versions: 1.2.0-0, 1.0.2-0
   
   :depends bioconductor-isocorrector: >=1.4.0,<1.5.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-readxl: 
   :depends r-tcltk2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isocorrectorgui

   and update with::

      conda update bioconductor-isocorrectorgui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isocorrectorgui:<tag>

   (see `bioconductor-isocorrectorgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isocorrectorgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrectorgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isocorrectorgui
   :alt:   (downloads)
.. |docker_bioconductor-isocorrectorgui| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui
.. _`bioconductor-isocorrectorgui/tags`: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrectorgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrectorgui/README.html