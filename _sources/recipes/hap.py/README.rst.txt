:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hap.py'
.. highlight: bash

hap.py
======

.. conda:recipe:: hap.py
   :replaces_section_title:
   :noindex:

   Haplotype VCF comparison tools

   :homepage: https://github.com/Illumina/hap.py
   :license: BSD / BSD-2-Clause
   :recipe: /`hap.py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap.py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap.py/meta.yaml>`_

   


.. conda:package:: hap.py

   |downloads_hap.py| |docker_hap.py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.15-0</code>,  <code>0.3.14-0</code>,  <code>0.3.13-0</code>,  <code>0.3.12-2</code>,  <code>0.3.12-1</code>,  <code>0.3.12-0</code>,  <code>0.3.10-0</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  </span></summary>
      

      ``0.3.15-0``,  ``0.3.14-0``,  ``0.3.13-0``,  ``0.3.12-2``,  ``0.3.12-1``,  ``0.3.12-0``,  ``0.3.10-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.2.9-1``,  ``0.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bx-python: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends nose: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.20.0,<1.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hap.py

   and update with::

      mamba update hap.py

  To create a new environment, run::

      mamba create --name myenvname hap.py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hap.py:<tag>

   (see `hap.py/tags`_ for valid values for ``<tag>``)


.. |downloads_hap.py| image:: https://img.shields.io/conda/dn/bioconda/hap.py.svg?style=flat
   :target: https://anaconda.org/bioconda/hap.py
   :alt:   (downloads)
.. |docker_hap.py| image:: https://quay.io/repository/biocontainers/hap.py/status
   :target: https://quay.io/repository/biocontainers/hap.py
.. _`hap.py/tags`: https://quay.io/repository/biocontainers/hap.py?tab=tags


.. raw:: html

    <script>
        var package = "hap.py";
        var versions = ["0.3.15","0.3.14","0.3.13","0.3.12","0.3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hap.py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hap.py/README.html