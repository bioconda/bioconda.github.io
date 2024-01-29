:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-bits'
.. highlight: bash

ngs-bits
========

.. conda:recipe:: ngs-bits
   :replaces_section_title:
   :noindex:

   Short\-read sequencing tools

   :homepage: https://github.com/imgag/ngs-bits
   :license: MIT license
   :recipe: /`ngs-bits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits/meta.yaml>`_

   


.. conda:package:: ngs-bits

   |downloads_ngs-bits| |docker_ngs-bits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2023_11-0</code>,  <code>2023_09-0</code>,  <code>2023_06-0</code>,  <code>2023_02-2</code>,  <code>2023_02-1</code>,  <code>2023_02-0</code>,  <code>2022_12-0</code>,  <code>2022_11-0</code>,  <code>2022_10-1</code>,  </span></summary>
      

      ``2023_11-0``,  ``2023_09-0``,  ``2023_06-0``,  ``2023_02-2``,  ``2023_02-1``,  ``2023_02-0``,  ``2022_12-0``,  ``2022_11-0``,  ``2022_10-1``,  ``2022_10-0``,  ``2022_07-1``,  ``2022_07-0``,  ``2022_04-0``,  ``2021_12-2``,  ``2021_12-1``,  ``2021_12-0``,  ``2021_09-0``,  ``2021_06-0``,  ``2021_03-1``,  ``2021_03-0``,  ``2020_12-0``,  ``2020_09-0``,  ``2020_06-0``,  ``2020_03-0``,  ``2019_11-0``,  ``2019_09-0``,  ``2019_08-0``,  ``2019_07-0``,  ``2019_05-0``,  ``2019_04-0``,  ``2019_03-0``,  ``2018_11-2``,  ``2018_10-2``,  ``2018_06-2``,  ``2018_06-1``,  ``2018_04-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends qt: ``>=5.12.9,<5.13.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install ngs-bits

   and update with::

      mamba update ngs-bits

  To create a new environment, run::

      mamba create --name myenvname ngs-bits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngs-bits:<tag>

   (see `ngs-bits/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-bits| image:: https://img.shields.io/conda/dn/bioconda/ngs-bits.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-bits
   :alt:   (downloads)
.. |docker_ngs-bits| image:: https://quay.io/repository/biocontainers/ngs-bits/status
   :target: https://quay.io/repository/biocontainers/ngs-bits
.. _`ngs-bits/tags`: https://quay.io/repository/biocontainers/ngs-bits?tab=tags


.. raw:: html

    <script>
        var package = "ngs-bits";
        var versions = ["2023_11","2023_09","2023_06","2023_02","2023_02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-bits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-bits/README.html