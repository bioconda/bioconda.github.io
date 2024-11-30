:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'khmer'
.. highlight: bash

khmer
=====

.. conda:recipe:: khmer
   :replaces_section_title:
   :noindex:

   khmer k\-mer counting library

   :homepage: https://khmer.readthedocs.io/
   :developer docs: https://github.com/dib-lab/khmer
   :license: BSD / BSD License
   :recipe: /`khmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer/meta.yaml>`_
   :links: biotools: :biotools:`khmer`, doi: :doi:`10.12688/f1000research.6924.1`

   


.. conda:package:: khmer

   |downloads_khmer| |docker_khmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0a3-3</code>,  <code>3.0.0a3-2</code>,  <code>3.0.0a3-1</code>,  <code>3.0.0a3-0</code>,  <code>3.0.0a2-1</code>,  <code>3.0.0a2-0</code>,  <code>3.0.0a1-0</code>,  <code>2.1.2-0</code>,  <code>2.1-0</code>,  </span></summary>
      

      ``3.0.0a3-3``,  ``3.0.0a3-2``,  ``3.0.0a3-1``,  ``3.0.0a3-0``,  ``3.0.0a2-1``,  ``3.0.0a2-0``,  ``3.0.0a1-0``,  ``2.1.2-0``,  ``2.1-0``,  ``2.1rc1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bz2file: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends screed: ``>=1.0``
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

      mamba install khmer

   and update with::

      mamba update khmer

  To create a new environment, run::

      mamba create --name myenvname khmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/khmer:<tag>

   (see `khmer/tags`_ for valid values for ``<tag>``)


.. |downloads_khmer| image:: https://img.shields.io/conda/dn/bioconda/khmer.svg?style=flat
   :target: https://anaconda.org/bioconda/khmer
   :alt:   (downloads)
.. |docker_khmer| image:: https://quay.io/repository/biocontainers/khmer/status
   :target: https://quay.io/repository/biocontainers/khmer
.. _`khmer/tags`: https://quay.io/repository/biocontainers/khmer?tab=tags


.. raw:: html

    <script>
        var package = "khmer";
        var versions = ["3.0.0a3","3.0.0a3","3.0.0a3","3.0.0a3","3.0.0a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/khmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/khmer/README.html