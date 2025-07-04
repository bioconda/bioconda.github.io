:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cancerit-allelecount'
.. highlight: bash

cancerit-allelecount
====================

.. conda:recipe:: cancerit-allelecount
   :replaces_section_title:
   :noindex:

   Support code for NGS copy number algorithms

   :homepage: https://github.com/cancerit/alleleCount
   :license: GPL3 / GPL-3.0-only
   :recipe: /`cancerit-allelecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cancerit-allelecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cancerit-allelecount/meta.yaml>`_

   


.. conda:package:: cancerit-allelecount

   |downloads_cancerit-allelecount| |docker_cancerit-allelecount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-7</code>,  <code>4.3.0-6</code>,  <code>4.3.0-5</code>,  <code>4.3.0-4</code>,  <code>4.3.0-3</code>,  <code>4.3.0-2</code>,  <code>4.3.0-1</code>,  <code>4.3.0-0</code>,  <code>4.2.1-1</code>,  </span></summary>
      

      ``4.3.0-7``,  ``4.3.0-6``,  ``4.3.0-5``,  ``4.3.0-4``,  ``4.3.0-3``,  ``4.3.0-2``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.1-1``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.0.2-2``,  ``4.0.2-1``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.20,<1.23.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install cancerit-allelecount

   and update with::

      mamba update cancerit-allelecount

  To create a new environment, run::

      mamba create --name myenvname cancerit-allelecount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cancerit-allelecount:<tag>

   (see `cancerit-allelecount/tags`_ for valid values for ``<tag>``)


.. |downloads_cancerit-allelecount| image:: https://img.shields.io/conda/dn/bioconda/cancerit-allelecount.svg?style=flat
   :target: https://anaconda.org/bioconda/cancerit-allelecount
   :alt:   (downloads)
.. |docker_cancerit-allelecount| image:: https://quay.io/repository/biocontainers/cancerit-allelecount/status
   :target: https://quay.io/repository/biocontainers/cancerit-allelecount
.. _`cancerit-allelecount/tags`: https://quay.io/repository/biocontainers/cancerit-allelecount?tab=tags


.. raw:: html

    <script>
        var package = "cancerit-allelecount";
        var versions = ["4.3.0","4.3.0","4.3.0","4.3.0","4.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cancerit-allelecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cancerit-allelecount/README.html