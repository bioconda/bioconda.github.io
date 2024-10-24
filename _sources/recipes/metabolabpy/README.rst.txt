:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolabpy'
.. highlight: bash

metabolabpy
===========

.. conda:recipe:: metabolabpy
   :replaces_section_title:
   :noindex:

   Python package to process 1D and 2D NMR spectroscopic data for metabolomics and tracer\-based metabolism analysis.

   :homepage: https://github.com/ludwigc/metabolabpy
   :documentation: https://ludwigc.github.io/metabolabpy
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metabolabpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy/meta.yaml>`_

   


.. conda:package:: metabolabpy

   |downloads_metabolabpy| |docker_metabolabpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.62-0</code>,  <code>0.9.61-0</code>,  <code>0.9.59-0</code>,  <code>0.9.53-0</code>,  <code>0.9.51-0</code>,  <code>0.9.50-0</code>,  <code>0.9.48-0</code>,  <code>0.9.47-0</code>,  <code>0.9.46-0</code>,  </span></summary>
      

      ``0.9.62-0``,  ``0.9.61-0``,  ``0.9.59-0``,  ``0.9.53-0``,  ``0.9.51-0``,  ``0.9.50-0``,  ``0.9.48-0``,  ``0.9.47-0``,  ``0.9.46-0``,  ``0.9.45-0``,  ``0.9.44-0``,  ``0.9.43-0``,  ``0.9.42-0``,  ``0.9.41-0``,  ``0.6.53-0``,  ``0.6.51-0``,  ``0.6.50-0``,  ``0.6.49-0``,  ``0.6.48-0``,  ``0.6.46-0``

      
      .. raw:: html

         </details>
      

   
   :depends darkdetect: 
   :depends mat73: 
   :depends matplotlib-base: 
   :depends multiprocess: 
   :depends numba: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pybaselines: 
   :depends python: ``>=3.9``
   :depends pywavelets: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metabolabpy

   and update with::

      mamba update metabolabpy

  To create a new environment, run::

      mamba create --name myenvname metabolabpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabolabpy:<tag>

   (see `metabolabpy/tags`_ for valid values for ``<tag>``)


.. |downloads_metabolabpy| image:: https://img.shields.io/conda/dn/bioconda/metabolabpy.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolabpy
   :alt:   (downloads)
.. |docker_metabolabpy| image:: https://quay.io/repository/biocontainers/metabolabpy/status
   :target: https://quay.io/repository/biocontainers/metabolabpy
.. _`metabolabpy/tags`: https://quay.io/repository/biocontainers/metabolabpy?tab=tags


.. raw:: html

    <script>
        var package = "metabolabpy";
        var versions = ["0.9.62","0.9.61","0.9.59","0.9.53","0.9.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolabpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolabpy/README.html