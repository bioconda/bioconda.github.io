:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gat'
.. highlight: bash

gat
===

.. conda:recipe:: gat
   :replaces_section_title:
   :noindex:

   Genomic Association Tester

   :homepage: https://github.com/AndreasHeger/gat
   :license: MIT
   :recipe: /`gat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat/meta.yaml>`_
   :links: biotools: :biotools:`gat`, doi: :doi:`10.1093/bioinformatics/btt343`

   


.. conda:package:: gat

   |downloads_gat| |docker_gat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.6-4</code>,  <code>1.3.6-3</code>,  <code>1.3.6-2</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-3</code>,  <code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  </span></summary>
      

      ``1.3.6-4``,  ``1.3.6-3``,  ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends matplotlib: ``>=1.3.0``
   :depends numpy: ``>=1.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: ``>=0.11``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install gat

   and update with::

      mamba update gat

  To create a new environment, run::

      mamba create --name myenvname gat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gat:<tag>

   (see `gat/tags`_ for valid values for ``<tag>``)


.. |downloads_gat| image:: https://img.shields.io/conda/dn/bioconda/gat.svg?style=flat
   :target: https://anaconda.org/bioconda/gat
   :alt:   (downloads)
.. |docker_gat| image:: https://quay.io/repository/biocontainers/gat/status
   :target: https://quay.io/repository/biocontainers/gat
.. _`gat/tags`: https://quay.io/repository/biocontainers/gat?tab=tags


.. raw:: html

    <script>
        var package = "gat";
        var versions = ["1.3.6","1.3.6","1.3.6","1.3.6","1.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gat/README.html