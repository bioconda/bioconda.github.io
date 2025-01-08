:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megahit'
.. highlight: bash

megahit
=======

.. conda:recipe:: megahit
   :replaces_section_title:
   :noindex:

   MEGAHIT\: An ultra\-fast single\-node solution for large and complex
   metagenomics assembly via succinct de Bruijn graph

   :homepage: https://github.com/voutcn/megahit
   :license: GPL / GPL-3.0
   :recipe: /`megahit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megahit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megahit/meta.yaml>`_
   :links: biotools: :biotools:`megahit`, doi: :doi:`10.1093/bioinformatics/btv033`

   


.. conda:package:: megahit

   |downloads_megahit| |docker_megahit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.9-6</code>,  <code>1.2.9-5</code>,  <code>1.2.9-4</code>,  <code>1.2.9-3</code>,  <code>1.2.9-2</code>,  <code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  </span></summary>
      

      ``1.2.9-6``,  ``1.2.9-5``,  ``1.2.9-4``,  ``1.2.9-3``,  ``1.2.9-2``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.6-1``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: 
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

      mamba install megahit

   and update with::

      mamba update megahit

  To create a new environment, run::

      mamba create --name myenvname megahit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megahit:<tag>

   (see `megahit/tags`_ for valid values for ``<tag>``)


.. |downloads_megahit| image:: https://img.shields.io/conda/dn/bioconda/megahit.svg?style=flat
   :target: https://anaconda.org/bioconda/megahit
   :alt:   (downloads)
.. |docker_megahit| image:: https://quay.io/repository/biocontainers/megahit/status
   :target: https://quay.io/repository/biocontainers/megahit
.. _`megahit/tags`: https://quay.io/repository/biocontainers/megahit?tab=tags


.. raw:: html

    <script>
        var package = "megahit";
        var versions = ["1.2.9","1.2.9","1.2.9","1.2.9","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megahit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megahit/README.html