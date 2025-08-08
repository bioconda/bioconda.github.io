:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3'
.. highlight: bash

clair3
======

.. conda:recipe:: clair3
   :replaces_section_title:
   :noindex:

   Clair3 is a small variant caller for long\-reads. Compare to PEPPER \(r0.4\)\, Clair3 \(v0.1\) shows a better SNP F1\-score with ≤30\-fold of ONT data \(precisionFDA Truth Challenge V2\)\, and a better Indel F1\-score\, while runs generally four times faster. Clair3 makes the best of both worlds of using pileup or full\-alignment as input for deep\-learning based long\-read small variant calling. Clair3 is simple and modular for easy deployment and integration.

   :homepage: https://github.com/HKU-BAL/Clair3
   :license: BSD-3-Clause
   :recipe: /`clair3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3/meta.yaml>`_

   


.. conda:package:: clair3

   |downloads_clair3| |docker_clair3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  <code>1.0.8-2</code>,  <code>1.0.8-1</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.12-6``,  ``0.1.12-5``,  ``0.1.12-4``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-6``,  ``0.1.11-5``,  ``0.1.11-4``,  ``0.1.11-3``,  ``0.1.11-2``,  ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4.2-0``,  ``0.1.4.1-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cffi: 
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends numpy: 
   :depends openssl: ``>=3.5.1,<4.0a0``
   :depends parallel: 
   :depends pigz: 
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends tensorflow: ``<=2.16.0``
   :depends whatshap: 
   :depends zstd: 
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

      mamba install clair3

   and update with::

      mamba update clair3

  To create a new environment, run::

      mamba create --name myenvname clair3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clair3:<tag>

   (see `clair3/tags`_ for valid values for ``<tag>``)


.. |downloads_clair3| image:: https://img.shields.io/conda/dn/bioconda/clair3.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3
   :alt:   (downloads)
.. |docker_clair3| image:: https://quay.io/repository/biocontainers/clair3/status
   :target: https://quay.io/repository/biocontainers/clair3
.. _`clair3/tags`: https://quay.io/repository/biocontainers/clair3?tab=tags


.. raw:: html

    <script>
        var package = "clair3";
        var versions = ["1.2.0","1.1.2","1.1.1","1.1.0","1.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3/README.html