:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-meme'
.. highlight: bash

bwa-meme
========

.. conda:recipe:: bwa-meme
   :replaces_section_title:
   :noindex:

   Faster BWA\-MEM2 using learned\-index

   :homepage: https://github.com/kaist-ina/BWA-MEME
   :license: MIT
   :recipe: /`bwa-meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac137`

   


.. conda:package:: bwa-meme

   |downloads_bwa-meme| |docker_bwa-meme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install bwa-meme

   and update with::

      mamba update bwa-meme

  To create a new environment, run::

      mamba create --name myenvname bwa-meme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwa-meme:<tag>

   (see `bwa-meme/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-meme| image:: https://img.shields.io/conda/dn/bioconda/bwa-meme.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-meme
   :alt:   (downloads)
.. |docker_bwa-meme| image:: https://quay.io/repository/biocontainers/bwa-meme/status
   :target: https://quay.io/repository/biocontainers/bwa-meme
.. _`bwa-meme/tags`: https://quay.io/repository/biocontainers/bwa-meme?tab=tags


.. raw:: html

    <script>
        var package = "bwa-meme";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-meme/README.html