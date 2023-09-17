:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expansionhunter'
.. highlight: bash

expansionhunter
===============

.. conda:recipe:: expansionhunter
   :replaces_section_title:
   :noindex:

   A tool for estimating repeat sizes

   :homepage: https://github.com/Illumina/ExpansionHunter
   :license: APACHE
   :recipe: /`expansionhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter/meta.yaml>`_

   


.. conda:package:: expansionhunter

   |downloads_expansionhunter| |docker_expansionhunter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.0-0</code>,  <code>3.1.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``5.0.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends abseil-cpp: ``>=20210324.2,<20210324.3.0a0``
   :depends boost: ``>=1.82,<1.83.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends fmt: ``>=9.1.0,<10.0a0``
   :depends gtest: ``>=1.14.0,<1.14.1.0a0``
   :depends htslib: ``>=1.18,<1.19.0a0``
   :depends libcurl: ``>=8.3.0,<9.0a0``
   :depends libdeflate: ``>=1.18,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends spdlog: ``>=1.12.0,<1.13.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install expansionhunter

   and update with::

      mamba update expansionhunter

  To create a new environment, run::

      mamba create --name myenvname expansionhunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/expansionhunter:<tag>

   (see `expansionhunter/tags`_ for valid values for ``<tag>``)


.. |downloads_expansionhunter| image:: https://img.shields.io/conda/dn/bioconda/expansionhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/expansionhunter
   :alt:   (downloads)
.. |docker_expansionhunter| image:: https://quay.io/repository/biocontainers/expansionhunter/status
   :target: https://quay.io/repository/biocontainers/expansionhunter
.. _`expansionhunter/tags`: https://quay.io/repository/biocontainers/expansionhunter?tab=tags


.. raw:: html

    <script>
        var package = "expansionhunter";
        var versions = ["5.0.0","4.0.2","4.0.1","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunter/README.html