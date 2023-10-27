:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsearch'
.. highlight: bash

vsearch
=======

.. conda:recipe:: vsearch
   :replaces_section_title:
   :noindex:

   A versatile open source tool for metagenomics \(USEARCH alternative\)

   :homepage: https://github.com/torognes/vsearch
   :license: GPL3 / GPL-3.0-or-later OR BSD-2-Clause
   :recipe: /`vsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch/meta.yaml>`_
   :links: biotools: :biotools:`vsearch`, doi: :doi:`10.7717/peerj.2584`

   


.. conda:package:: vsearch

   |downloads_vsearch| |docker_vsearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.23.0-0</code>,  <code>2.22.1-2</code>,  <code>2.22.1-1</code>,  <code>2.22.1-0</code>,  <code>2.21.2-0</code>,  <code>2.21.1-1</code>,  <code>2.21.1-0</code>,  <code>2.21.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.23.0-0``,  ``2.22.1-2``,  ``2.22.1-1``,  ``2.22.1-0``,  ``2.21.2-0``,  ``2.21.1-1``,  ``2.21.1-0``,  ``2.21.0-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.17.0-1``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.15.2-1``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15.0-0``,  ``2.14.2-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.13.7-0``,  ``2.13.6-0``,  ``2.13.4-4``,  ``2.13.4-0``,  ``2.13.3-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.11.1-0``,  ``2.10.4-1``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.5-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.11.1-0``,  ``1.10.2-0``,  ``1.9.7-0``,  ``1.9.5-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install vsearch

   and update with::

      mamba update vsearch

  To create a new environment, run::

      mamba create --name myenvname vsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vsearch:<tag>

   (see `vsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_vsearch| image:: https://img.shields.io/conda/dn/bioconda/vsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/vsearch
   :alt:   (downloads)
.. |docker_vsearch| image:: https://quay.io/repository/biocontainers/vsearch/status
   :target: https://quay.io/repository/biocontainers/vsearch
.. _`vsearch/tags`: https://quay.io/repository/biocontainers/vsearch?tab=tags


.. raw:: html

    <script>
        var package = "vsearch";
        var versions = ["2.24.0","2.23.0","2.22.1","2.22.1","2.22.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsearch/README.html