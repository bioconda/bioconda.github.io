:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fitter'
.. highlight: bash

fitter
======

.. conda:recipe:: fitter
   :replaces_section_title:
   :noindex:

   A tool to fit data to many distributions and best one\(s\)

   :homepage: https://github.com/cokelaer/fitter
   :license: GPL-3.0-only
   :recipe: /`fitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter/meta.yaml>`_

   


.. conda:package:: fitter

   |downloads_fitter| |docker_fitter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.3-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.11-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.4-1</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.11-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.4-1``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends easydev: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
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

      mamba install fitter

   and update with::

      mamba update fitter

  To create a new environment, run::

      mamba create --name myenvname fitter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fitter:<tag>

   (see `fitter/tags`_ for valid values for ``<tag>``)


.. |downloads_fitter| image:: https://img.shields.io/conda/dn/bioconda/fitter.svg?style=flat
   :target: https://anaconda.org/bioconda/fitter
   :alt:   (downloads)
.. |docker_fitter| image:: https://quay.io/repository/biocontainers/fitter/status
   :target: https://quay.io/repository/biocontainers/fitter
.. _`fitter/tags`: https://quay.io/repository/biocontainers/fitter?tab=tags


.. raw:: html

    <script>
        var package = "fitter";
        var versions = ["1.4.1","1.4.0","1.2.3","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fitter/README.html