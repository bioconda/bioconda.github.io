:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabinkit'
.. highlight: bash

metabinkit
==========

.. conda:recipe:: metabinkit
   :replaces_section_title:
   :noindex:

   Set of programs to perform taxonomic binning.

   :homepage: https://github.com/envmetagen/metabinkit
   :license: GPL / GPL-3
   :recipe: /`metabinkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit/meta.yaml>`_
   :links: biotools: :biotools:`metabinkit`, doi: :doi:`10.5281/zenodo.3855032`

   


.. conda:package:: metabinkit

   |downloads_metabinkit| |docker_metabinkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-2</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-5</code>,  <code>0.2.2-4</code>,  <code>0.2.2-3</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-5``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.9.0``
   :depends bzip2: 
   :depends curl: 
   :depends entrez-direct: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends perl: 
   :depends perl-archive-tar: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-stringr: 
   :depends taxonkit: ``0.6.0.*``
   :depends zlib: 
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

      mamba install metabinkit

   and update with::

      mamba update metabinkit

  To create a new environment, run::

      mamba create --name myenvname metabinkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabinkit:<tag>

   (see `metabinkit/tags`_ for valid values for ``<tag>``)


.. |downloads_metabinkit| image:: https://img.shields.io/conda/dn/bioconda/metabinkit.svg?style=flat
   :target: https://anaconda.org/bioconda/metabinkit
   :alt:   (downloads)
.. |docker_metabinkit| image:: https://quay.io/repository/biocontainers/metabinkit/status
   :target: https://quay.io/repository/biocontainers/metabinkit
.. _`metabinkit/tags`: https://quay.io/repository/biocontainers/metabinkit?tab=tags


.. raw:: html

    <script>
        var package = "metabinkit";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabinkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabinkit/README.html