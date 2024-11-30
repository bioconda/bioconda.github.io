:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplot'
.. highlight: bash

nanoplot
========

.. conda:recipe:: nanoplot
   :replaces_section_title:
   :noindex:

   Plotting suite for long read sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoPlot
   :license: MIT / MIT
   :recipe: /`nanoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot/meta.yaml>`_

   


.. conda:package:: nanoplot

   |downloads_nanoplot| |docker_nanoplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.43.0-1</code>,  <code>1.43.0-0</code>,  <code>1.42.0-0</code>,  <code>1.41.6-0</code>,  <code>1.41.3-0</code>,  <code>1.41.0-0</code>,  <code>1.40.2-0</code>,  <code>1.40.0-0</code>,  <code>1.39.0-0</code>,  </span></summary>
      

      ``1.43.0-1``,  ``1.43.0-0``,  ``1.42.0-0``,  ``1.41.6-0``,  ``1.41.3-0``,  ``1.41.0-0``,  ``1.40.2-0``,  ``1.40.0-0``,  ``1.39.0-0``,  ``1.38.1-0``,  ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.2-1``,  ``1.36.2-0``,  ``1.36.1-0``,  ``1.35.5-0``,  ``1.35.4-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.29.1-0``,  ``1.29.0-0``,  ``1.28.4-0``,  ``1.28.2-0``,  ``1.28.1-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.3-0``,  ``1.26.2-0``,  ``1.26.1-0``,  ``1.25.1-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.23.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.2-1``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.11.0-0``,  ``1.10.4-0``,  ``1.8.1-0``,  ``1.2.2-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.16.4-0``,  ``0.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends libpng: 
   :depends nanoget: ``>=1.19.1``
   :depends numpy: ``>=1.16.5``
   :depends pandas: ``>=1.1.0``
   :depends plotly: ``>=5.4.0``
   :depends pyarrow: 
   :depends pysam: ``>0.10.0.0``
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends python-kaleido: 
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

      mamba install nanoplot

   and update with::

      mamba update nanoplot

  To create a new environment, run::

      mamba create --name myenvname nanoplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoplot:<tag>

   (see `nanoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplot| image:: https://img.shields.io/conda/dn/bioconda/nanoplot.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplot
   :alt:   (downloads)
.. |docker_nanoplot| image:: https://quay.io/repository/biocontainers/nanoplot/status
   :target: https://quay.io/repository/biocontainers/nanoplot
.. _`nanoplot/tags`: https://quay.io/repository/biocontainers/nanoplot?tab=tags


.. raw:: html

    <script>
        var package = "nanoplot";
        var versions = ["1.43.0","1.43.0","1.42.0","1.41.6","1.41.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplot/README.html