:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bowtie2'
.. highlight: bash

bowtie2
=======

.. conda:recipe:: bowtie2
   :replaces_section_title:
   :noindex:

   A fast and sensitive gapped read aligner.

   :homepage: https://bowtie-bio.sourceforge.net/bowtie2/index.shtml
   :documentation: https://github.com/BenLangmead/bowtie2/blob/master/README.md
   
   :developer docs: https://github.com/BenLangmead/bowtie2
   :license: GPL3 / GPL-3.0-only
   :recipe: /`bowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2/meta.yaml>`_
   :links: biotools: :biotools:`bowtie2`, doi: :doi:`10.1038/nmeth.1923`, debian: :debian:`bowtie2`, usegalaxy-eu: :usegalaxy-eu:`bowtie2`

   


.. conda:package:: bowtie2

   |downloads_bowtie2| |docker_bowtie2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.4-5</code>,  <code>2.5.4-4</code>,  <code>2.5.4-3</code>,  <code>2.5.4-2</code>,  <code>2.5.4-1</code>,  <code>2.5.4-0</code>,  <code>2.5.3-1</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  </span></summary>
      

      ``2.5.4-5``,  ``2.5.4-4``,  ``2.5.4-3``,  ``2.5.4-2``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.5-4``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.5.1-0``,  ``2.3.5-0``,  ``2.3.4.3-1``,  ``2.3.4.3-0``,  ``2.3.4.2-0``,  ``2.3.4.1-1``,  ``2.3.4.1-0``,  ``2.3.4-0``,  ``2.3.3.1-0``,  ``2.3.2-1``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.8-2``,  ``2.2.8-1``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-8``,  ``2.2.5-7``,  ``2.2.5-6``,  ``2.2.5-5``,  ``2.2.5-4``,  ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-1``,  ``2.2.4-8``,  ``2.2.4-7``,  ``2.2.4-6``,  ``2.2.4-5``,  ``2.2.4-4``,  ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends python: 
   :depends zstd: ``>=1.5.6,<1.6.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bowtie2

   and update with::

      mamba update bowtie2

  To create a new environment, run::

      mamba create --name myenvname bowtie2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bowtie2:<tag>

   (see `bowtie2/tags`_ for valid values for ``<tag>``)


.. |downloads_bowtie2| image:: https://img.shields.io/conda/dn/bioconda/bowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bowtie2
   :alt:   (downloads)
.. |docker_bowtie2| image:: https://quay.io/repository/biocontainers/bowtie2/status
   :target: https://quay.io/repository/biocontainers/bowtie2
.. _`bowtie2/tags`: https://quay.io/repository/biocontainers/bowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bowtie2";
        var versions = ["2.5.4","2.5.4","2.5.4","2.5.4","2.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie2/README.html