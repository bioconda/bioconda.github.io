:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meme'
.. highlight: bash

meme
====

.. conda:recipe:: meme
   :replaces_section_title:
   :noindex:

   Motif\-based sequence analysis tools.

   :homepage: https://meme-suite.org
   :documentation: https://meme-suite.org/meme/doc/overview.html
   
   :license: Custom
   :recipe: /`meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme/meta.yaml>`_
   :links: biotools: :biotools:`meme_suite`, usegalaxy-eu: :usegalaxy-eu:`meme_dreme`, doi: :doi:`10.1093/nar/gkv416`

   


.. conda:package:: meme

   |downloads_meme| |docker_meme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.5.7-3</code>,  <code>5.5.7-2</code>,  <code>5.5.7-1</code>,  <code>5.5.7-0</code>,  <code>5.5.6-0</code>,  <code>5.5.5-1</code>,  <code>5.5.5-0</code>,  <code>5.5.4-0</code>,  <code>5.5.3-0</code>,  </span></summary>
      

      ``5.5.7-3``,  ``5.5.7-2``,  ``5.5.7-1``,  ``5.5.7-0``,  ``5.5.6-0``,  ``5.5.5-1``,  ``5.5.5-0``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-1``,  ``5.5.2-0``,  ``5.4.1-2``,  ``5.4.1-1``,  ``5.4.1-0``,  ``5.3.0-2``,  ``5.3.0-0``,  ``5.1.1-3``,  ``5.1.1-2``,  ``5.1.1-1``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.5-0``,  ``5.0.2-5``,  ``5.0.2-3``,  ``5.0.2-2``,  ``4.12.0-2``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.11.2-9``,  ``4.11.2-8``,  ``4.11.2-6``,  ``4.11.2-5``,  ``4.11.2-4``,  ``4.11.2-3``,  ``4.11.2-2``,  ``4.11.2-1``,  ``4.11.2-0``,  ``4.11.1-7``,  ``4.11.1-6``,  ``4.11.1-5``,  ``4.11.1-4``,  ``4.11.1-3``,  ``4.11.1-2``,  ``4.11.1-1``,  ``4.11.1-0``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends icu: ``>=73.2,<74.0a0``
   :depends libexpat: ``>=2.7.0,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libxml2: ``>=2.12.7,<3.0a0``
   :depends libxslt: ``>=1.1.39,<2.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends nodejs: ``>=22.6.0,<23.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-cgi: 
   :depends perl-file-which: 
   :depends perl-html-parser: 
   :depends perl-html-template: 
   :depends perl-html-tree: 
   :depends perl-json: 
   :depends perl-log-log4perl: 
   :depends perl-math-cdf: 
   :depends perl-module-build: 
   :depends perl-sys-info: 
   :depends perl-xml-parser: 
   :depends perl-xml-simple: 
   :depends perl-yaml: 
   :depends python: ``>=3.7``
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

      mamba install meme

   and update with::

      mamba update meme

  To create a new environment, run::

      mamba create --name myenvname meme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meme:<tag>

   (see `meme/tags`_ for valid values for ``<tag>``)


.. |downloads_meme| image:: https://img.shields.io/conda/dn/bioconda/meme.svg?style=flat
   :target: https://anaconda.org/bioconda/meme
   :alt:   (downloads)
.. |docker_meme| image:: https://quay.io/repository/biocontainers/meme/status
   :target: https://quay.io/repository/biocontainers/meme
.. _`meme/tags`: https://quay.io/repository/biocontainers/meme?tab=tags


.. raw:: html

    <script>
        var package = "meme";
        var versions = ["5.5.7","5.5.7","5.5.7","5.5.7","5.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meme/README.html