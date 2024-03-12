:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacache'
.. highlight: bash

metacache
=========

.. conda:recipe:: metacache
   :replaces_section_title:
   :noindex:

   MetaCache is a classification system for mapping genomic sequences \(short reads\, long reads\, contigs\, ...\) from metagenomic samples to their most likely taxon of origin.

   :homepage: https://github.com/muellan/metacache
   :license: GPL-3.0
   :recipe: /`metacache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacache/meta.yaml>`_

   


.. conda:package:: metacache

   |downloads_metacache| |docker_metacache|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-0</code>,  <code>2.4.0-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-2</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.3-1</code>,  <code>2.2.3-0</code>,  </span></summary>
      

      ``2.4.2-0``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gawk: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``<3``
   :depends wget: 
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

      mamba install metacache

   and update with::

      mamba update metacache

  To create a new environment, run::

      mamba create --name myenvname metacache

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metacache:<tag>

   (see `metacache/tags`_ for valid values for ``<tag>``)


.. |downloads_metacache| image:: https://img.shields.io/conda/dn/bioconda/metacache.svg?style=flat
   :target: https://anaconda.org/bioconda/metacache
   :alt:   (downloads)
.. |docker_metacache| image:: https://quay.io/repository/biocontainers/metacache/status
   :target: https://quay.io/repository/biocontainers/metacache
.. _`metacache/tags`: https://quay.io/repository/biocontainers/metacache?tab=tags


.. raw:: html

    <script>
        var package = "metacache";
        var versions = ["2.4.2","2.4.0","2.3.2","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacache/README.html