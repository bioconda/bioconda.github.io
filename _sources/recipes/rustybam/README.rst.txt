:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustybam'
.. highlight: bash

rustybam
========

.. conda:recipe:: rustybam
   :replaces_section_title:
   :noindex:

   Mitchell Vollger\'s bioinformatics rust utilities.

   :homepage: https://github.com/mrvollger/rustybam
   :license: MIT
   :recipe: /`rustybam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam/meta.yaml>`_

   


.. conda:package:: rustybam

   |downloads_rustybam| |docker_rustybam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.33-2</code>,  <code>0.1.33-1</code>,  <code>0.1.33-0</code>,  <code>0.1.31-2</code>,  <code>0.1.31-1</code>,  <code>0.1.31-0</code>,  <code>0.1.30-1</code>,  <code>0.1.30-0</code>,  <code>0.1.29-1</code>,  </span></summary>
      

      ``0.1.33-2``,  ``0.1.33-1``,  ``0.1.33-0``,  ``0.1.31-2``,  ``0.1.31-1``,  ``0.1.31-0``,  ``0.1.30-1``,  ``0.1.30-0``,  ``0.1.29-1``,  ``0.1.29-0``,  ``0.1.28-1``,  ``0.1.28-0``,  ``0.1.27-1``,  ``0.1.27-0``,  ``0.1.26-1``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libcurl: ``>=8.10.1,<9.0a0``
   :depends libcxx: ``>=18``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xz: 
   :depends zlib: 
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

      mamba install rustybam

   and update with::

      mamba update rustybam

  To create a new environment, run::

      mamba create --name myenvname rustybam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rustybam:<tag>

   (see `rustybam/tags`_ for valid values for ``<tag>``)


.. |downloads_rustybam| image:: https://img.shields.io/conda/dn/bioconda/rustybam.svg?style=flat
   :target: https://anaconda.org/bioconda/rustybam
   :alt:   (downloads)
.. |docker_rustybam| image:: https://quay.io/repository/biocontainers/rustybam/status
   :target: https://quay.io/repository/biocontainers/rustybam
.. _`rustybam/tags`: https://quay.io/repository/biocontainers/rustybam?tab=tags


.. raw:: html

    <script>
        var package = "rustybam";
        var versions = ["0.1.33","0.1.33","0.1.33","0.1.31","0.1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustybam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustybam/README.html