:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbcan'
.. highlight: bash

dbcan
=====

.. conda:recipe:: dbcan
   :replaces_section_title:
   :noindex:

   Standalone version of dbCAN annotation tool for automated CAZyme annotation.

   :homepage: https://bcb.unl.edu/dbCAN2
   :documentation: https://run-dbcan-new.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/bcb-unl/run_dbcan_new
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dbcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx894`, doi: :doi:`10.1093/nar/gky418`, doi: :doi:`10.1093/nar/gkad328`, biotools: :biotools:`dbcan2`

   


.. conda:package:: dbcan

   |downloads_dbcan| |docker_dbcan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0-0</code>,  <code>4.1.4-1</code>,  <code>4.1.4-0</code>,  <code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.0.7-0</code>,  </span></summary>
      

      ``5.0.0-0``,  ``4.1.4-1``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.0.7-0``,  ``3.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends diamond: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends numpy: ``>1.19``
   :depends openpyxl: 
   :depends pandas: 
   :depends psutil: 
   :depends pycirclize: 
   :depends pyhmmer: 
   :depends pyrodigal: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends requests: 
   :depends rich-click: 
   :depends scipy: 
   :depends seaborn: 
   :depends session-info: 
   :depends tqdm: 
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

      mamba install dbcan

   and update with::

      mamba update dbcan

  To create a new environment, run::

      mamba create --name myenvname dbcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dbcan:<tag>

   (see `dbcan/tags`_ for valid values for ``<tag>``)


.. |downloads_dbcan| image:: https://img.shields.io/conda/dn/bioconda/dbcan.svg?style=flat
   :target: https://anaconda.org/bioconda/dbcan
   :alt:   (downloads)
.. |docker_dbcan| image:: https://quay.io/repository/biocontainers/dbcan/status
   :target: https://quay.io/repository/biocontainers/dbcan
.. _`dbcan/tags`: https://quay.io/repository/biocontainers/dbcan?tab=tags


.. raw:: html

    <script>
        var package = "dbcan";
        var versions = ["5.0.0","4.1.4","4.1.4","4.1.3","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbcan/README.html