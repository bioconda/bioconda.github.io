:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifiasm_meta'
.. highlight: bash

hifiasm_meta
============

.. conda:recipe:: hifiasm_meta
   :replaces_section_title:
   :noindex:

   Metagenome assembler for Hifi reads\, based on hifiasm.

   :homepage: https://github.com/xfengnefx/hifiasm-meta
   :license: MIT
   :recipe: /`hifiasm_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta/meta.yaml>`_

   


.. conda:package:: hifiasm_meta

   |downloads_hifiasm_meta| |docker_hifiasm_meta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>hamtv0.3.1-2</code>,  <code>hamtv0.3.1-1</code>,  <code>hamtv0.3.1-0</code>,  <code>hamtv0.3-1</code>,  <code>hamtv0.3-0</code>,  <code>hamtv0.2.2-1</code>,  <code>hamtv0.2.2-0</code>,  <code>hamtv0.2-0</code>,  <code>hamtv0.1-1</code>,  </span></summary>
      

      ``hamtv0.3.1-2``,  ``hamtv0.3.1-1``,  ``hamtv0.3.1-0``,  ``hamtv0.3-1``,  ``hamtv0.3-0``,  ``hamtv0.2.2-1``,  ``hamtv0.2.2-0``,  ``hamtv0.2-0``,  ``hamtv0.1-1``,  ``hamtv0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hifiasm_meta

   and update with::

      mamba update hifiasm_meta

  To create a new environment, run::

      mamba create --name myenvname hifiasm_meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifiasm_meta:<tag>

   (see `hifiasm_meta/tags`_ for valid values for ``<tag>``)


.. |downloads_hifiasm_meta| image:: https://img.shields.io/conda/dn/bioconda/hifiasm_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/hifiasm_meta
   :alt:   (downloads)
.. |docker_hifiasm_meta| image:: https://quay.io/repository/biocontainers/hifiasm_meta/status
   :target: https://quay.io/repository/biocontainers/hifiasm_meta
.. _`hifiasm_meta/tags`: https://quay.io/repository/biocontainers/hifiasm_meta?tab=tags


.. raw:: html

    <script>
        var package = "hifiasm_meta";
        var versions = ["hamtv0.3.1","hamtv0.3.1","hamtv0.3.1","hamtv0.3","hamtv0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifiasm_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifiasm_meta/README.html