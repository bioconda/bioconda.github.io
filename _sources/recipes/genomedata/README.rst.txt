:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomedata'
.. highlight: bash

genomedata
==========

.. conda:recipe:: genomedata
   :replaces_section_title:
   :noindex:

   Tools for accessing large amounts of genomic data

   :homepage: http://genomedata.hoffmanlab.org/
   :documentation: https://genomedata.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/hoffmangroup/genomedata
   :license: GPL2 / GPL-2.0
   :recipe: /`genomedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata/meta.yaml>`_
   :links: biotools: :biotools:`genomedata`, doi: :doi:`10.1093/bioinformatics/btq164`

   


.. conda:package:: genomedata

   |downloads_genomedata| |docker_genomedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.3-0</code>,  <code>1.7.2-2</code>,  <code>1.7.2-1</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-3</code>,  </span></summary>
      

      ``1.7.3-0``,  ``1.7.2-2``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends path.py: 
   :depends pybigwig: 
   :depends pytables: ``>=3.4.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :depends six: 
   :depends textinput: 
   :depends ucsc-bigwigtobedgraph: ``>=377``
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

      mamba install genomedata

   and update with::

      mamba update genomedata

  To create a new environment, run::

      mamba create --name myenvname genomedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomedata:<tag>

   (see `genomedata/tags`_ for valid values for ``<tag>``)


.. |downloads_genomedata| image:: https://img.shields.io/conda/dn/bioconda/genomedata.svg?style=flat
   :target: https://anaconda.org/bioconda/genomedata
   :alt:   (downloads)
.. |docker_genomedata| image:: https://quay.io/repository/biocontainers/genomedata/status
   :target: https://quay.io/repository/biocontainers/genomedata
.. _`genomedata/tags`: https://quay.io/repository/biocontainers/genomedata?tab=tags


.. raw:: html

    <script>
        var package = "genomedata";
        var versions = ["1.7.3","1.7.2","1.7.2","1.7.2","1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomedata/README.html