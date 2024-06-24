:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntjoin'
.. highlight: bash

ntjoin
======

.. conda:recipe:: ntjoin
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using minimizer graphs

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/ntjoin
   :license: GPL-3.0
   :recipe: /`ntjoin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin/meta.yaml>`_

   


.. conda:package:: ntjoin

   |downloads_ntjoin| |docker_ntjoin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.8-1</code>,  </span></summary>
      

      ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.21.0``
   :depends btllib: 
   :depends make: 
   :depends pybedtools: 
   :depends pymannkendall: 
   :depends pysam: ``>=0.16.0``
   :depends python: 
   :depends python-igraph: 
   :depends samtools: ``>=1.10``
   :depends zlib: 
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

      mamba install ntjoin

   and update with::

      mamba update ntjoin

  To create a new environment, run::

      mamba create --name myenvname ntjoin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntjoin:<tag>

   (see `ntjoin/tags`_ for valid values for ``<tag>``)


.. |downloads_ntjoin| image:: https://img.shields.io/conda/dn/bioconda/ntjoin.svg?style=flat
   :target: https://anaconda.org/bioconda/ntjoin
   :alt:   (downloads)
.. |docker_ntjoin| image:: https://quay.io/repository/biocontainers/ntjoin/status
   :target: https://quay.io/repository/biocontainers/ntjoin
.. _`ntjoin/tags`: https://quay.io/repository/biocontainers/ntjoin?tab=tags


.. raw:: html

    <script>
        var package = "ntjoin";
        var versions = ["1.1.4","1.1.4","1.1.3","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntjoin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntjoin/README.html