:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken2'
.. highlight: bash

kraken2
=======

.. conda:recipe:: kraken2
   :replaces_section_title:
   :noindex:

   Kraken2 is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: https://ccb.jhu.edu/software/kraken2
   :documentation: https://github.com/DerrickWood/kraken2/blob/v2.1.6/docs/MANUAL.markdown
   
   :developer docs: https://github.com/DerrickWood/kraken2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kraken2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2/meta.yaml>`_
   :links: biotools: :biotools:`kraken2`, usegalaxy-eu: :usegalaxy-eu:`kraken2`, doi: :doi:`10.1186/gb-2014-15-3-r46`, doi: :doi:`10.1186/s13059-019-1891-0`

   


.. conda:package:: kraken2

   |downloads_kraken2| |docker_kraken2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.3-4</code>,  <code>2.1.3-3</code>,  <code>2.1.3-2</code>,  <code>2.1.3-1</code>,  <code>2.1.3-0</code>,  <code>2.1.2-4</code>,  <code>2.1.2-3</code>,  </span></summary>
      

      ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9beta-0``,  ``2.0.8_beta-2``,  ``2.0.8_beta-1``,  ``2.0.8_beta-0``,  ``2.0.7_beta-3``,  ``2.0.7_beta-2``,  ``2.0.7_beta-1``,  ``2.0.7_beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends blast: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: 
   :depends rsync: 
   :depends tar: 
   :depends wget: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kraken2

   and update with::

      mamba update kraken2

  To create a new environment, run::

      mamba create --name myenvname kraken2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kraken2:<tag>

   (see `kraken2/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken2| image:: https://img.shields.io/conda/dn/bioconda/kraken2.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken2
   :alt:   (downloads)
.. |docker_kraken2| image:: https://quay.io/repository/biocontainers/kraken2/status
   :target: https://quay.io/repository/biocontainers/kraken2
.. _`kraken2/tags`: https://quay.io/repository/biocontainers/kraken2?tab=tags


.. raw:: html

    <script>
        var package = "kraken2";
        var versions = ["2.1.6","2.1.5","2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken2/README.html