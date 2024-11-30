:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmseqs2'
.. highlight: bash

mmseqs2
=======

.. conda:recipe:: mmseqs2
   :replaces_section_title:
   :noindex:

   MMseqs2\: ultra fast and sensitive sequence search and clustering suite

   :homepage: https://github.com/soedinglab/mmseqs2
   :license: MIT
   :recipe: /`mmseqs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2/meta.yaml>`_
   :links: doi: :doi:`10.1038/nbt.3988`, doi: :doi:`10.1038/s41467-018-04964-5`, doi: :doi:`10.1093/bioinformatics/bty1057`, doi: :doi:`10.1093/bioinformatics/btab184`, doi: :doi:`10.1101/2024.11.13.623350v1`, biotools: :biotools:`mmseqs2`, biotools: :biotools:`linclust`

   


.. conda:package:: mmseqs2

   |downloads_mmseqs2| |docker_mmseqs2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>16.747c6-0</code>,  <code>15.6f452-3</code>,  <code>15.6f452-2</code>,  <code>15.6f452-1</code>,  <code>15.6f452-0</code>,  <code>14.7e284-2</code>,  <code>14.7e284-1</code>,  <code>14.7e284-0</code>,  <code>13.45111-2</code>,  </span></summary>
      

      ``16.747c6-0``,  ``15.6f452-3``,  ``15.6f452-2``,  ``15.6f452-1``,  ``15.6f452-0``,  ``14.7e284-2``,  ``14.7e284-1``,  ``14.7e284-0``,  ``13.45111-2``,  ``13.45111-1``,  ``13.45111-0``,  ``12.113e3-2``,  ``12.113e3-1``,  ``12.113e3-0``,  ``11.e1a1c-0``,  ``10.6d92c-0``,  ``9.d36de-0``,  ``8.fac81-1``,  ``7.4e23d-1``,  ``6.f5a1c-1``,  ``5.9375b-1``,  ``4.bff50-1``,  ``4.0b8cc-1``,  ``3.be8f6-1``,  ``3.be8f6-0``,  ``2.23394-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
   :depends zlib: 
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

      mamba install mmseqs2

   and update with::

      mamba update mmseqs2

  To create a new environment, run::

      mamba create --name myenvname mmseqs2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmseqs2:<tag>

   (see `mmseqs2/tags`_ for valid values for ``<tag>``)


.. |downloads_mmseqs2| image:: https://img.shields.io/conda/dn/bioconda/mmseqs2.svg?style=flat
   :target: https://anaconda.org/bioconda/mmseqs2
   :alt:   (downloads)
.. |docker_mmseqs2| image:: https://quay.io/repository/biocontainers/mmseqs2/status
   :target: https://quay.io/repository/biocontainers/mmseqs2
.. _`mmseqs2/tags`: https://quay.io/repository/biocontainers/mmseqs2?tab=tags


.. raw:: html

    <script>
        var package = "mmseqs2";
        var versions = ["16.747c6","15.6f452","15.6f452","15.6f452","15.6f452"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmseqs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmseqs2/README.html