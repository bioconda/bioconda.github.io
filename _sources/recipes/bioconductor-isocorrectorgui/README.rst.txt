:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isocorrectorgui'
.. highlight: bash

bioconductor-isocorrectorgui
============================

.. conda:recipe:: bioconductor-isocorrectorgui
   :replaces_section_title:
   :noindex:

   Graphical User Interface for IsoCorrectoR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IsoCorrectoRGUI.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrectorgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrectorgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrectorgui/meta.yaml>`_

   IsoCorrectoRGUI is a Graphical User Interface for the IsoCorrectoR package. IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\).


.. conda:package:: bioconductor-isocorrectorgui

   |downloads_bioconductor-isocorrectorgui| |docker_bioconductor-isocorrectorgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-isocorrector: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readxl: 
   :depends r-tcltk2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-isocorrectorgui

   and update with::

      mamba update bioconductor-isocorrectorgui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isocorrectorgui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isocorrectorgui:<tag>

   (see `bioconductor-isocorrectorgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isocorrectorgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrectorgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isocorrectorgui
   :alt:   (downloads)
.. |docker_bioconductor-isocorrectorgui| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui
.. _`bioconductor-isocorrectorgui/tags`: https://quay.io/repository/biocontainers/bioconductor-isocorrectorgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isocorrectorgui";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrectorgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrectorgui/README.html