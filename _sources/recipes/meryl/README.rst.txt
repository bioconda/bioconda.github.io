:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meryl'
.. highlight: bash

meryl
=====

.. conda:recipe:: meryl
   :replaces_section_title:
   :noindex:

   meryl is a multi\-threaded\, multi\-process\, out\-of\-core k\-mer counter

   :homepage: https://github.com/marbl/meryl
   :license: Public Domain
   :recipe: /`meryl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl/meta.yaml>`_
   :links: biotools: :biotools:`meryl`, usegalaxy-eu: :usegalaxy-eu:`meryl`, doi: :doi:`10.1186/s13059-020-02134-9`

   


.. conda:package:: meryl

   |downloads_meryl| |docker_meryl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2013-0</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2-1</code>,  </span></summary>
      

      ``2013-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``v1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
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

      mamba install meryl

   and update with::

      mamba update meryl

  To create a new environment, run::

      mamba create --name myenvname meryl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meryl:<tag>

   (see `meryl/tags`_ for valid values for ``<tag>``)


.. |downloads_meryl| image:: https://img.shields.io/conda/dn/bioconda/meryl.svg?style=flat
   :target: https://anaconda.org/bioconda/meryl
   :alt:   (downloads)
.. |docker_meryl| image:: https://quay.io/repository/biocontainers/meryl/status
   :target: https://quay.io/repository/biocontainers/meryl
.. _`meryl/tags`: https://quay.io/repository/biocontainers/meryl?tab=tags


.. raw:: html

    <script>
        var package = "meryl";
        var versions = ["2013","1.4.1","1.4.1","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meryl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meryl/README.html