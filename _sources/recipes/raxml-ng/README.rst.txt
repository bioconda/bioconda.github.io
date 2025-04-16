:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxml-ng'
.. highlight: bash

raxml-ng
========

.. conda:recipe:: raxml-ng
   :replaces_section_title:
   :noindex:

   RAxML Next Generation\: faster\, easier\-to\-use and more flexible

   :homepage: https://github.com/amkozlov/raxml-ng
   :license: AGPL / AGPL-3
   :recipe: /`raxml-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz305`

   


.. conda:package:: raxml-ng

   |downloads_raxml-ng| |docker_raxml-ng|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-3</code>,  <code>1.1.0-2</code>,  </span></summary>
      

      ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openmpi: ``>=4.1.6,<5.0a0``
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

      mamba install raxml-ng

   and update with::

      mamba update raxml-ng

  To create a new environment, run::

      mamba create --name myenvname raxml-ng

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/raxml-ng:<tag>

   (see `raxml-ng/tags`_ for valid values for ``<tag>``)


.. |downloads_raxml-ng| image:: https://img.shields.io/conda/dn/bioconda/raxml-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/raxml-ng
   :alt:   (downloads)
.. |docker_raxml-ng| image:: https://quay.io/repository/biocontainers/raxml-ng/status
   :target: https://quay.io/repository/biocontainers/raxml-ng
.. _`raxml-ng/tags`: https://quay.io/repository/biocontainers/raxml-ng?tab=tags


.. raw:: html

    <script>
        var package = "raxml-ng";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml-ng/README.html