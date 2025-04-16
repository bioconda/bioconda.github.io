:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdbtools'
.. highlight: bash

cdbtools
========

.. conda:recipe:: cdbtools
   :replaces_section_title:
   :noindex:

   CDB \(Constant DataBase\) indexing and retrieval tools for FASTA files.

   :homepage: http://compbio.dfci.harvard.edu/tgi
   :license: Public Domain
   :recipe: /`cdbtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools/meta.yaml>`_

   


.. conda:package:: cdbtools

   |downloads_cdbtools| |docker_cdbtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99-12</code>,  <code>0.99-10</code>,  <code>0.99-9</code>,  <code>0.99-8</code>,  <code>0.99-7</code>,  <code>0.99-6</code>,  <code>0.99-5</code>,  <code>0.99-4</code>,  <code>0.99-3</code>,  </span></summary>
      

      ``0.99-12``,  ``0.99-10``,  ``0.99-9``,  ``0.99-8``,  ``0.99-7``,  ``0.99-6``,  ``0.99-5``,  ``0.99-4``,  ``0.99-3``,  ``0.99-2``,  ``0.99-1``,  ``0.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install cdbtools

   and update with::

      mamba update cdbtools

  To create a new environment, run::

      mamba create --name myenvname cdbtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cdbtools:<tag>

   (see `cdbtools/tags`_ for valid values for ``<tag>``)


.. |downloads_cdbtools| image:: https://img.shields.io/conda/dn/bioconda/cdbtools.svg?style=flat
   :target: https://anaconda.org/bioconda/cdbtools
   :alt:   (downloads)
.. |docker_cdbtools| image:: https://quay.io/repository/biocontainers/cdbtools/status
   :target: https://quay.io/repository/biocontainers/cdbtools
.. _`cdbtools/tags`: https://quay.io/repository/biocontainers/cdbtools?tab=tags


.. raw:: html

    <script>
        var package = "cdbtools";
        var versions = ["0.99","0.99","0.99","0.99","0.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdbtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdbtools/README.html