:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sphae'
.. highlight: bash

sphae
=====

.. conda:recipe:: sphae
   :replaces_section_title:
   :noindex:

   Phage toolkit

   :homepage: https://github.com/linsalrob/sphae/
   :documentation: https://github.com/linsalrob/sphae
   
   :developer docs: https://github.com/linsalrob/sphae
   :license: MIT / MIT
   :recipe: /`sphae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sphae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sphae/meta.yaml>`_

   Assembling and annotating pure culture phages from both Illumina and Nanopore sequencing technology


.. conda:package:: sphae

   |downloads_sphae| |docker_sphae|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.7-0</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  </span></summary>
      

      ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.1b-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrmap: ``>=0.0.7``
   :depends biopython: ``>=1.8.1``
   :depends click: ``>=8.1.3``
   :depends jinja2: ``>=3.0.2``
   :depends metasnek: ``>=0.0.4``
   :depends pandas: 
   :depends python: ``<3.12``
   :depends pyyaml: ``>=6.0``
   :depends snakemake-minimal: ``>=7.14.0``
   :depends snaketool-utils: ``>=0.0.4``
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

      mamba install sphae

   and update with::

      mamba update sphae

  To create a new environment, run::

      mamba create --name myenvname sphae

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sphae:<tag>

   (see `sphae/tags`_ for valid values for ``<tag>``)


.. |downloads_sphae| image:: https://img.shields.io/conda/dn/bioconda/sphae.svg?style=flat
   :target: https://anaconda.org/bioconda/sphae
   :alt:   (downloads)
.. |docker_sphae| image:: https://quay.io/repository/biocontainers/sphae/status
   :target: https://quay.io/repository/biocontainers/sphae
.. _`sphae/tags`: https://quay.io/repository/biocontainers/sphae?tab=tags


.. raw:: html

    <script>
        var package = "sphae";
        var versions = ["1.4.7","1.4.6","1.4.5","1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sphae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sphae/README.html