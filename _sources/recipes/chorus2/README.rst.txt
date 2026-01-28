:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chorus2'
.. highlight: bash

chorus2
=======

.. conda:recipe:: chorus2
   :replaces_section_title:
   :noindex:

   A pipeline to select oligonucleotides for fluorescence in situ hbridization \(Oligo\-FISH\).

   :homepage: https://github.com/zhangtaolab/Chorus2
   :documentation: https://chorus2.readthedocs.io/en/dev/
   
   :license: MIT license
   :recipe: /`chorus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2/meta.yaml>`_
   :links: biotools: :biotools:`chorus2`

   


.. conda:package:: chorus2

   |downloads_chorus2| |docker_chorus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.01-2</code>,  <code>2.01-1</code>,  <code>2.1-0</code>,  <code>2.01-0</code>,  <code>2.0.1-0</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.01-2``,  ``2.01-1``,  ``2.1-0``,  ``2.01-0``,  ``2.0.1-0``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bwa: ``>=0.7.3a,<=0.7.8``
   :depends kmer-jellyfish: ``2.*``
   :depends matplotlib-base: ``>=3``
   :depends numpy: 
   :depends pandas: 
   :depends primer3-py: ``>=0.4.2``
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pyfasta: 
   :depends pyqt: ``<5.11``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends samtools: 
   :depends sip: ``>=4``
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

      mamba install chorus2

   and update with::

      mamba update chorus2

  To create a new environment, run::

      mamba create --name myenvname chorus2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chorus2:<tag>

   (see `chorus2/tags`_ for valid values for ``<tag>``)


.. |downloads_chorus2| image:: https://img.shields.io/conda/dn/bioconda/chorus2.svg?style=flat
   :target: https://anaconda.org/bioconda/chorus2
   :alt:   (downloads)
.. |docker_chorus2| image:: https://quay.io/repository/biocontainers/chorus2/status
   :target: https://quay.io/repository/biocontainers/chorus2
.. _`chorus2/tags`: https://quay.io/repository/biocontainers/chorus2?tab=tags


.. raw:: html

    <script>
        var package = "chorus2";
        var versions = ["2.01","2.01","2.1","2.01","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chorus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chorus2/README.html