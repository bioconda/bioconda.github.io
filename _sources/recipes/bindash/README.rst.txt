:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bindash'
.. highlight: bash

bindash
=======

.. conda:recipe:: bindash
   :replaces_section_title:
   :noindex:

   Fast and precise comparison of genomes and metagenomes \(in the order of terabytes\) on a typical personal laptop.

   :homepage: https://github.com/zhaoxiaofei/bindash
   :documentation: https://github.com/jianshu93/bindash/blob/v2.3/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`bindash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindash/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty651`, doi: :doi:`10.1101/2024.03.13.584875`

   


.. conda:package:: bindash

   |downloads_bindash| |docker_bindash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-4</code>,  <code>2.3-3</code>,  <code>2.3-2</code>,  <code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.0-3</code>,  </span></summary>
      

      ``2.3-4``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends llvm-openmp: ``>=18.1.8``
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

      mamba install bindash

   and update with::

      mamba update bindash

  To create a new environment, run::

      mamba create --name myenvname bindash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bindash:<tag>

   (see `bindash/tags`_ for valid values for ``<tag>``)


.. |downloads_bindash| image:: https://img.shields.io/conda/dn/bioconda/bindash.svg?style=flat
   :target: https://anaconda.org/bioconda/bindash
   :alt:   (downloads)
.. |docker_bindash| image:: https://quay.io/repository/biocontainers/bindash/status
   :target: https://quay.io/repository/biocontainers/bindash
.. _`bindash/tags`: https://quay.io/repository/biocontainers/bindash?tab=tags


.. raw:: html

    <script>
        var package = "bindash";
        var versions = ["2.3","2.3","2.3","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bindash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bindash/README.html