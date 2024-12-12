:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pblat'
.. highlight: bash

pblat
=====

.. conda:recipe:: pblat
   :replaces_section_title:
   :noindex:

   blat with multi\-threads support

   :homepage: https://icebert.github.io/pblat
   :developer docs: https://github.com/icebert/pblat
   :license: OTHER
   :recipe: /`pblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat/meta.yaml>`_
   :links: biotools: :biotools:`pblat`, doi: :doi:`10.1186/s12859-019-2597-8`

   


.. conda:package:: pblat

   |downloads_pblat| |docker_pblat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-4</code>,  <code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.5-2</code>,  <code>2.5-1</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  </span></summary>
      

      ``2.5.1-4``,  ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
   :depends zlib: 
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

      mamba install pblat

   and update with::

      mamba update pblat

  To create a new environment, run::

      mamba create --name myenvname pblat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pblat:<tag>

   (see `pblat/tags`_ for valid values for ``<tag>``)


.. |downloads_pblat| image:: https://img.shields.io/conda/dn/bioconda/pblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pblat
   :alt:   (downloads)
.. |docker_pblat| image:: https://quay.io/repository/biocontainers/pblat/status
   :target: https://quay.io/repository/biocontainers/pblat
.. _`pblat/tags`: https://quay.io/repository/biocontainers/pblat?tab=tags


.. raw:: html

    <script>
        var package = "pblat";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.5.1"];
    </script>





Notes
-----
pblat is modified from blat\, the licence is the same as blat. The source code and executables are freely available for academic\, nonprofit and personal use. Commercial licensing information is available on the Kent Informatics website. To cite\: Wang M \& Kong L. pblat\: a multithread blat algorithm speeding up aligning sequences to genomes. BMC Bioinformatics 2019\, 20\(1\).


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pblat/README.html