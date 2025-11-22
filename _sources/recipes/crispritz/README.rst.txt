:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispritz'
.. highlight: bash

crispritz
=========

.. conda:recipe:: crispritz
   :replaces_section_title:
   :noindex:

   CRISPRitz\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/pinellolab/CRISPRitz
   :license: GPL3
   :recipe: /`crispritz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz/meta.yaml>`_

   


.. conda:package:: crispritz

   |downloads_crispritz| |docker_crispritz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-2</code>,  <code>2.7.0-0</code>,  <code>2.6.6-4</code>,  <code>2.6.6-3</code>,  <code>2.6.6-2</code>,  <code>2.6.6-1</code>,  <code>2.6.6-0</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  </span></summary>
      

      ``2.7.0-2``,  ``2.7.0-0``,  ``2.6.6-4``,  ``2.6.6-3``,  ``2.6.6-2``,  ``2.6.6-1``,  ``2.6.6-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.9-0``,  ``2.5.8-0``,  ``2.5.7-1``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.9-0``,  ``2.4.8-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.8-0``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.3.6-2``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bcftools: 
   :depends bedops: 
   :depends bedtools: 
   :depends biopython: 
   :depends boost-cpp: 
   :depends htslib: 
   :depends intervaltree: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends more-itertools: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``0.22.1.*``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends rename: 
   :depends scikit-learn: ``0.23.2.*``
   :depends scipy: 
   :depends statsmodels: 
   :depends tk: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install crispritz

   and update with::

      mamba update crispritz

  To create a new environment, run::

      mamba create --name myenvname crispritz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispritz:<tag>

   (see `crispritz/tags`_ for valid values for ``<tag>``)


.. |downloads_crispritz| image:: https://img.shields.io/conda/dn/bioconda/crispritz.svg?style=flat
   :target: https://anaconda.org/bioconda/crispritz
   :alt:   (downloads)
.. |docker_crispritz| image:: https://quay.io/repository/biocontainers/crispritz/status
   :target: https://quay.io/repository/biocontainers/crispritz
.. _`crispritz/tags`: https://quay.io/repository/biocontainers/crispritz?tab=tags


.. raw:: html

    <script>
        var package = "crispritz";
        var versions = ["2.7.0","2.7.0","2.6.6","2.6.6","2.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispritz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispritz/README.html