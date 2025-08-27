:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fibertools-rs'
.. highlight: bash

fibertools-rs
=============

.. conda:recipe:: fibertools-rs
   :replaces_section_title:
   :noindex:

   Mitchell Vollger\'s rust tools for fiberseq data.

   :homepage: https://github.com/fiberseq/fibertools-rs
   :documentation: https://fiberseq.github.io/fibertools/fibertools.html
   
   :license: MIT / MIT
   :recipe: /`fibertools-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fibertools-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fibertools-rs/meta.yaml>`_

   


.. conda:package:: fibertools-rs

   |downloads_fibertools-rs| |docker_fibertools-rs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.6.4-0</code>,  <code>0.6.2-0</code>,  <code>0.6.0-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libcxx: ``>=18``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fibertools-rs

   and update with::

      mamba update fibertools-rs

  To create a new environment, run::

      mamba create --name myenvname fibertools-rs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fibertools-rs:<tag>

   (see `fibertools-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_fibertools-rs| image:: https://img.shields.io/conda/dn/bioconda/fibertools-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/fibertools-rs
   :alt:   (downloads)
.. |docker_fibertools-rs| image:: https://quay.io/repository/biocontainers/fibertools-rs/status
   :target: https://quay.io/repository/biocontainers/fibertools-rs
.. _`fibertools-rs/tags`: https://quay.io/repository/biocontainers/fibertools-rs?tab=tags


.. raw:: html

    <script>
        var package = "fibertools-rs";
        var versions = ["0.7.1","0.6.4","0.6.2","0.6.0","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fibertools-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fibertools-rs/README.html