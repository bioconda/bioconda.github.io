:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikado'
.. highlight: bash

mikado
======

.. conda:recipe:: mikado
   :replaces_section_title:
   :noindex:

   A Python3 annotation program to select the best gene model in each locus

   :homepage: https://github.com/EI-CoreBioinformatics/mikado
   :license: LGPL-3.0-or-later
   :recipe: /`mikado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado/meta.yaml>`_

   


.. conda:package:: mikado

   |downloads_mikado| |docker_mikado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  </span></summary>
      

      ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0rc2-1``,  ``2.0rc2-0``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends datrie: ``>=0.8``
   :depends drmaa: 
   :depends hypothesis: 
   :depends libcxx: ``>=14.0.4``
   :depends marshmallow: ``>=3.1.0``
   :depends marshmallow-dataclass: ``>=8.3.1``
   :depends msgpack-python: ``>=1.0.0``
   :depends networkx: ``>=2.3``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=1.0``
   :depends pyfaidx: ``>=0.5.8``
   :depends pysam: ``>=0.15.3``
   :depends pytest: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-rapidjson: ``>=1.0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: ``>=5.1.2``
   :depends scipy: ``>=1.9.1,<2.0a0``
   :depends six: ``>=1.12.0``
   :depends snakemake-minimal: ``>=5.7.0``
   :depends sqlalchemy: ``>=1.4.0``
   :depends sqlalchemy-utils: ``>=0.34.1``
   :depends sqlite: 
   :depends tabulate: ``>=0.8.5``
   :depends toml: ``>=0.10.0``
   :depends typeguard: ``>=2.9.1``
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

      mamba install mikado

   and update with::

      mamba update mikado

  To create a new environment, run::

      mamba create --name myenvname mikado

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mikado:<tag>

   (see `mikado/tags`_ for valid values for ``<tag>``)


.. |downloads_mikado| image:: https://img.shields.io/conda/dn/bioconda/mikado.svg?style=flat
   :target: https://anaconda.org/bioconda/mikado
   :alt:   (downloads)
.. |docker_mikado| image:: https://quay.io/repository/biocontainers/mikado/status
   :target: https://quay.io/repository/biocontainers/mikado
.. _`mikado/tags`: https://quay.io/repository/biocontainers/mikado?tab=tags


.. raw:: html

    <script>
        var package = "mikado";
        var versions = ["2.3.4","2.3.3","2.3.3","2.3.2","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikado/README.html