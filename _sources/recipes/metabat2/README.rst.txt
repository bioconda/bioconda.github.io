:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabat2'
.. highlight: bash

metabat2
========

.. conda:recipe:: metabat2
   :replaces_section_title:
   :noindex:

   Metagenome binning.

   :homepage: https://bitbucket.org/berkeleylab/metabat
   :documentation: https://bitbucket.org/berkeleylab/metabat/src/v2.18/README.md
   
   :license: BSD / BSD-3-Clause-LBNL
   :recipe: /`metabat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.1165`, biotools: :biotools:`MetaBAT_2`, usegalaxy-eu: :usegalaxy-eu:`metabat2`

   


.. conda:package:: metabat2

   |downloads_metabat2| |docker_metabat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18-0</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  <code>2.15-2</code>,  <code>2.15-1</code>,  <code>2.15-0</code>,  <code>2.14-0</code>,  <code>2.13-1</code>,  <code>2.13-0</code>,  </span></summary>
      

      ``2.18-0``,  ``2.17-1``,  ``2.17-0``,  ``2.15-2``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.13-1``,  ``2.13-0``,  ``2.12.1-1``,  ``2.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metabat2

   and update with::

      mamba update metabat2

  To create a new environment, run::

      mamba create --name myenvname metabat2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabat2:<tag>

   (see `metabat2/tags`_ for valid values for ``<tag>``)


.. |downloads_metabat2| image:: https://img.shields.io/conda/dn/bioconda/metabat2.svg?style=flat
   :target: https://anaconda.org/bioconda/metabat2
   :alt:   (downloads)
.. |docker_metabat2| image:: https://quay.io/repository/biocontainers/metabat2/status
   :target: https://quay.io/repository/biocontainers/metabat2
.. _`metabat2/tags`: https://quay.io/repository/biocontainers/metabat2?tab=tags


.. raw:: html

    <script>
        var package = "metabat2";
        var versions = ["2.18","2.17","2.17","2.15","2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabat2/README.html