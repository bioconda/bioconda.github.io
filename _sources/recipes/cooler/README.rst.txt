:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooler'
.. highlight: bash

cooler
======

.. conda:recipe:: cooler
   :replaces_section_title:
   :noindex:

   Sparse binary format for genomic interaction matrices.

   :homepage: https://github.com/open2c/cooler
   :documentation: https://open2c.github.io/cooler
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cooler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler/meta.yaml>`_
   :links: doi: :doi:`0.1093/bioinformatics/btz540`

   


.. conda:package:: cooler

   |downloads_cooler| |docker_cooler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.11-2</code>,  <code>0.8.11-1</code>,  </span></summary>
      

      ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.11-2``,  ``0.8.11-1``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-4``,  ``0.7.6-3``,  ``0.7.6-2``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.4-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends asciitree: 
   :depends click: ``>=7``
   :depends cytoolz: 
   :depends dask: 
   :depends h5py: ``>=2.5``
   :depends multiprocess: 
   :depends numpy: ``>=1.26``
   :depends pairix: 
   :depends pandas: ``>1.5``
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends scipy: 
   :depends simplejson: 
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

      mamba install cooler

   and update with::

      mamba update cooler

  To create a new environment, run::

      mamba create --name myenvname cooler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cooler:<tag>

   (see `cooler/tags`_ for valid values for ``<tag>``)


.. |downloads_cooler| image:: https://img.shields.io/conda/dn/bioconda/cooler.svg?style=flat
   :target: https://anaconda.org/bioconda/cooler
   :alt:   (downloads)
.. |docker_cooler| image:: https://quay.io/repository/biocontainers/cooler/status
   :target: https://quay.io/repository/biocontainers/cooler
.. _`cooler/tags`: https://quay.io/repository/biocontainers/cooler?tab=tags


.. raw:: html

    <script>
        var package = "cooler";
        var versions = ["0.10.3","0.10.2","0.10.0","0.9.3","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooler/README.html