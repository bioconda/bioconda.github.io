:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoothxg'
.. highlight: bash

smoothxg
========

.. conda:recipe:: smoothxg
   :replaces_section_title:
   :noindex:

   Local reconstruction of variation graphs using partial order alignment

   :homepage: https://github.com/pangenome/smoothxg
   :license: MIT
   :recipe: /`smoothxg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg/meta.yaml>`_

   


.. conda:package:: smoothxg

   |downloads_smoothxg| |docker_smoothxg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.8-0</code>,  </span></summary>
      

      ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.8-0``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zstd: ``>=1.5.6,<1.6.0a0``
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

      mamba install smoothxg

   and update with::

      mamba update smoothxg

  To create a new environment, run::

      mamba create --name myenvname smoothxg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smoothxg:<tag>

   (see `smoothxg/tags`_ for valid values for ``<tag>``)


.. |downloads_smoothxg| image:: https://img.shields.io/conda/dn/bioconda/smoothxg.svg?style=flat
   :target: https://anaconda.org/bioconda/smoothxg
   :alt:   (downloads)
.. |docker_smoothxg| image:: https://quay.io/repository/biocontainers/smoothxg/status
   :target: https://quay.io/repository/biocontainers/smoothxg
.. _`smoothxg/tags`: https://quay.io/repository/biocontainers/smoothxg?tab=tags


.. raw:: html

    <script>
        var package = "smoothxg";
        var versions = ["0.8.0","0.7.4","0.7.3","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoothxg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoothxg/README.html