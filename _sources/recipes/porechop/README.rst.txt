:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porechop'
.. highlight: bash

porechop
========

.. conda:recipe:: porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads

   :homepage: https://github.com/rrwick/Porechop
   :documentation: https://github.com/rrwick/Porechop?tab=readme-ov-file#how-it-works
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop/meta.yaml>`_

   


.. conda:package:: porechop

   |downloads_porechop| |docker_porechop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-8</code>,  <code>0.2.4-7</code>,  <code>0.2.4-6</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3_seqan2.1.1-3</code>,  </span></summary>
      

      ``0.2.4-8``,  ``0.2.4-7``,  ``0.2.4-6``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3_seqan2.1.1-3``,  ``0.2.3_seqan2.1.1-2``,  ``0.2.3_seqan2.1.1-1``,  ``0.2.3_seqan2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install porechop

   and update with::

      mamba update porechop

  To create a new environment, run::

      mamba create --name myenvname porechop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/porechop:<tag>

   (see `porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_porechop| image:: https://img.shields.io/conda/dn/bioconda/porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/porechop
   :alt:   (downloads)
.. |docker_porechop| image:: https://quay.io/repository/biocontainers/porechop/status
   :target: https://quay.io/repository/biocontainers/porechop
.. _`porechop/tags`: https://quay.io/repository/biocontainers/porechop?tab=tags


.. raw:: html

    <script>
        var package = "porechop";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porechop/README.html