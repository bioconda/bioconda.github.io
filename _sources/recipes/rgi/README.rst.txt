:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgi'
.. highlight: bash

rgi
===

.. conda:recipe:: rgi
   :replaces_section_title:
   :noindex:

   This tool provides a preliminary annotation of your DNA sequence\(s\) based upon the data available in The Comprehensive Antibiotic Resistance Database \(CARD\). Hits to genes tagged with Antibiotic Resistance ontology terms will be highlighted. As CARD expands to include more pathogens\, genomes\, plasmids\, and ontology terms this tool will grow increasingly powerful in providing first\-pass detection of antibiotic resistance associated genes. See license at CARD website

   :homepage: https://card.mcmaster.ca
   :license: https://card.mcmaster.ca/about
   :recipe: /`rgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz935`

   


.. conda:package:: rgi

   |downloads_rgi| |docker_rgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.4-0</code>,  <code>6.0.3-1</code>,  <code>6.0.3-0</code>,  <code>6.0.2-0</code>,  <code>6.0.1-1</code>,  <code>6.0.1-0</code>,  <code>6.0.0-0</code>,  <code>5.2.1-2</code>,  <code>5.2.1-1</code>,  </span></summary>
      

      ``6.0.4-0``,  ``6.0.3-1``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-1``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.2.1-2``,  ``5.2.1-1``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.0-0``,  ``4.2.2-1``,  ``4.2.2-0``,  ``4.0.3-3``,  ``4.0.3-2``,  ``4.0.3-1``,  ``4.0.3-0``,  ``3.2.1-4``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.0-1``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``2.5.2.*``
   :depends beautifulsoup4: ``>=4.9.3``
   :depends bedtools: ``>=2.31.1``
   :depends biopython: ``>=1.78``
   :depends blast: ``2.16.0``
   :depends bowtie2: ``>=2.5.4``
   :depends bwa: ``>=0.7.18``
   :depends dask: 
   :depends diamond: ``0.8.36.*``
   :depends filetype: ``>=1.0.0``
   :depends kma: ``>=1.4.17``
   :depends lxml: ``>=4.9.1``
   :depends matplotlib: ``>=2.1.2``
   :depends oligoarrayaux: ``3.8.*``
   :depends pandas: ``>=0.15.0``
   :depends prodigal: ``2.6.3.*``
   :depends pyahocorasick: ``2.1.0``
   :depends pyfaidx: ``>=0.5.4.1``
   :depends pyrodigal: ``>=3.0.0``
   :depends pysam: ``>=0.16.0.1``
   :depends pytest: ``>=3.0.0``
   :depends python: ``>=3.6``
   :depends requests: ``2.31.0``
   :depends samtools: ``1.21.*``
   :depends seaborn: ``>=0.8.1``
   :depends setuptools: ``>=47.1.0``
   :depends wget: 
   :depends zlib: 
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

      mamba install rgi

   and update with::

      mamba update rgi

  To create a new environment, run::

      mamba create --name myenvname rgi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rgi:<tag>

   (see `rgi/tags`_ for valid values for ``<tag>``)


.. |downloads_rgi| image:: https://img.shields.io/conda/dn/bioconda/rgi.svg?style=flat
   :target: https://anaconda.org/bioconda/rgi
   :alt:   (downloads)
.. |docker_rgi| image:: https://quay.io/repository/biocontainers/rgi/status
   :target: https://quay.io/repository/biocontainers/rgi
.. _`rgi/tags`: https://quay.io/repository/biocontainers/rgi?tab=tags


.. raw:: html

    <script>
        var package = "rgi";
        var versions = ["6.0.4","6.0.3","6.0.3","6.0.2","6.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgi/README.html