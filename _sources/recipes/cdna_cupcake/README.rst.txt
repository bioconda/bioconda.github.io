:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdna_cupcake'
.. highlight: bash

cdna_cupcake
============

.. conda:recipe:: cdna_cupcake
   :replaces_section_title:
   :noindex:

   cDNA\_Cupcake is a miscellaneous collection of Python and R scripts used for analyzing sequencing data.

   :homepage: https://github.com/Magdoll/cDNA_Cupcake
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`cdna_cupcake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake/meta.yaml>`_

   


.. conda:package:: cdna_cupcake

   |downloads_cdna_cupcake| |docker_cdna_cupcake|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>29.0.0-0</code>,  <code>28.0.0-1</code>,  <code>28.0.0-0</code>,  <code>22.0.0-1</code>,  <code>22.0.0-0</code>,  <code>19.0.0-0</code>,  <code>18.1.0-0</code>,  <code>18.0.0-0</code>,  <code>17.0.0-0</code>,  </span></summary>
      

      ``29.0.0-0``,  ``28.0.0-1``,  ``28.0.0-0``,  ``22.0.0-1``,  ``22.0.0-0``,  ``19.0.0-0``,  ``18.1.0-0``,  ``18.0.0-0``,  ``17.0.0-0``,  ``16.0.0-0``,  ``15.1.0-0``,  ``14.2.0-0``,  ``14.0.0-0``,  ``13.0.0-0``,  ``12.5-0``,  ``12.4.0-1``,  ``12.4.0-0``,  ``12.3.0-0``,  ``12.1.0-1``,  ``12.1.0-0``,  ``12.0.0-0``,  ``11.0.0-0``,  ``10.0.1-0``,  ``9.1.1-0``,  ``9.0.3-0``,  ``8.7.3-0``,  ``5.8-0``,  ``5.3-1``,  ``5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends bx-python: ``>=0.7.3``
   :depends graphviz: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: 
   :depends samtools: ``>=1.10``
   :depends scikit-learn: 
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

      mamba install cdna_cupcake

   and update with::

      mamba update cdna_cupcake

  To create a new environment, run::

      mamba create --name myenvname cdna_cupcake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cdna_cupcake:<tag>

   (see `cdna_cupcake/tags`_ for valid values for ``<tag>``)


.. |downloads_cdna_cupcake| image:: https://img.shields.io/conda/dn/bioconda/cdna_cupcake.svg?style=flat
   :target: https://anaconda.org/bioconda/cdna_cupcake
   :alt:   (downloads)
.. |docker_cdna_cupcake| image:: https://quay.io/repository/biocontainers/cdna_cupcake/status
   :target: https://quay.io/repository/biocontainers/cdna_cupcake
.. _`cdna_cupcake/tags`: https://quay.io/repository/biocontainers/cdna_cupcake?tab=tags


.. raw:: html

    <script>
        var package = "cdna_cupcake";
        var versions = ["29.0.0","28.0.0","28.0.0","22.0.0","22.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdna_cupcake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdna_cupcake/README.html