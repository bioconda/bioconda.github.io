:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quatradis'
.. highlight: bash

quatradis
=========

.. conda:recipe:: quatradis
   :replaces_section_title:
   :noindex:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/quadram-institute-bioscience/QuaTradis
   :license: GPL3 / GPL-3.0-only
   :recipe: /`quatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw022`

   


.. conda:package:: quatradis

   |downloads_quatradis| |docker_quatradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.5.4-0``,  ``0.4.9-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bwa: 
   :depends cython: 
   :depends dendropy: ``4.6``
   :depends htslib: 
   :depends libgcc: ``>=13``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.18.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-graphviz: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: 
   :depends r-getopt: 
   :depends r-mass: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends setuptools: 
   :depends smalt: 
   :depends snakemake-minimal: 
   :depends snakeviz: 
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

      mamba install quatradis

   and update with::

      mamba update quatradis

  To create a new environment, run::

      mamba create --name myenvname quatradis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quatradis:<tag>

   (see `quatradis/tags`_ for valid values for ``<tag>``)


.. |downloads_quatradis| image:: https://img.shields.io/conda/dn/bioconda/quatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/quatradis
   :alt:   (downloads)
.. |docker_quatradis| image:: https://quay.io/repository/biocontainers/quatradis/status
   :target: https://quay.io/repository/biocontainers/quatradis
.. _`quatradis/tags`: https://quay.io/repository/biocontainers/quatradis?tab=tags


.. raw:: html

    <script>
        var package = "quatradis";
        var versions = ["1.3.2","1.3.1","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quatradis/README.html