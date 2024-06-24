:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaeuk'
.. highlight: bash

metaeuk
=======

.. conda:recipe:: metaeuk
   :replaces_section_title:
   :noindex:

   MetaEuk \- sensitive\, high\-throughput gene discovery and annotation for large\-scale eukaryotic metagenomics

   :homepage: https://github.com/soedinglab/metaeuk
   :license: GPL / GPL-3
   :recipe: /`metaeuk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaeuk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaeuk/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-020-00808-x`, biotools: :biotools:`metaeuk`

   


.. conda:package:: metaeuk

   |downloads_metaeuk| |docker_metaeuk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.bba0d80-0</code>,  <code>6.a5d39d9-4</code>,  <code>6.a5d39d9-3</code>,  <code>6.a5d39d9-2</code>,  <code>6.a5d39d9-1</code>,  <code>6.a5d39d9-0</code>,  <code>5.34c21f2-1</code>,  <code>5.34c21f2-0</code>,  <code>4.a0f584d-2</code>,  </span></summary>
      

      ``7.bba0d80-0``,  ``6.a5d39d9-4``,  ``6.a5d39d9-3``,  ``6.a5d39d9-2``,  ``6.a5d39d9-1``,  ``6.a5d39d9-0``,  ``5.34c21f2-1``,  ``5.34c21f2-0``,  ``4.a0f584d-2``,  ``4.a0f584d-1``,  ``4.a0f584d-0``,  ``3.8dc7e0b-0``,  ``2.ddf2742-0``,  ``1.ea903e5-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
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

      mamba install metaeuk

   and update with::

      mamba update metaeuk

  To create a new environment, run::

      mamba create --name myenvname metaeuk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaeuk:<tag>

   (see `metaeuk/tags`_ for valid values for ``<tag>``)


.. |downloads_metaeuk| image:: https://img.shields.io/conda/dn/bioconda/metaeuk.svg?style=flat
   :target: https://anaconda.org/bioconda/metaeuk
   :alt:   (downloads)
.. |docker_metaeuk| image:: https://quay.io/repository/biocontainers/metaeuk/status
   :target: https://quay.io/repository/biocontainers/metaeuk
.. _`metaeuk/tags`: https://quay.io/repository/biocontainers/metaeuk?tab=tags


.. raw:: html

    <script>
        var package = "metaeuk";
        var versions = ["7.bba0d80","6.a5d39d9","6.a5d39d9","6.a5d39d9","6.a5d39d9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaeuk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaeuk/README.html