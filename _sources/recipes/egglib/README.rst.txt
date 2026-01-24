:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'egglib'
.. highlight: bash

egglib
======

.. conda:recipe:: egglib
   :replaces_section_title:
   :noindex:

   Evolutionary Genetics and Genomics Library. EggLib is a C\+\+\/Python library and program package for evolutionary genetics and genomics. Main features are sequence data management\, sequence polymorphism analysis\, and coalescent simulations. EggLib is a flexible Python module with a performant underlying C\+\+ library and allows fast and intuitive development of Python programs and scripts.

   :homepage: https://egglib.org
   :documentation: https://www.egglib.org/index.html
   
   :developer docs: https://gitlab.com/demita/egglib
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`egglib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib/meta.yaml>`_
   :links: doi: :doi:`10.1111/1755-0998.13672`, biotools: :biotools:`egglib`

   


.. conda:package:: egglib

   |downloads_egglib| |docker_egglib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.5.2-0</code>,  <code>3.3.5-0</code>,  <code>3.3.4-1</code>,  <code>3.3.4-0</code>,  <code>3.3.3-1</code>,  <code>3.3.3-0</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.5.2-0``,  ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.1.0-3``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0b21-1``,  ``3.0.0b21-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends htslib: ``>=1.23,<1.24.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends platformdirs: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install egglib

   and update with::

      mamba update egglib

  To create a new environment, run::

      mamba create --name myenvname egglib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/egglib:<tag>

   (see `egglib/tags`_ for valid values for ``<tag>``)


.. |downloads_egglib| image:: https://img.shields.io/conda/dn/bioconda/egglib.svg?style=flat
   :target: https://anaconda.org/bioconda/egglib
   :alt:   (downloads)
.. |docker_egglib| image:: https://quay.io/repository/biocontainers/egglib/status
   :target: https://quay.io/repository/biocontainers/egglib
.. _`egglib/tags`: https://quay.io/repository/biocontainers/egglib?tab=tags


.. raw:: html

    <script>
        var package = "egglib";
        var versions = ["3.6.0","3.5.2","3.3.5","3.3.4","3.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/egglib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/egglib/README.html