:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam2'
.. highlight: bash

leviosam2
=========

.. conda:recipe:: leviosam2
   :replaces_section_title:
   :noindex:

   Fast and accurate coordinate conversion between assemblies.

   :homepage: https://github.com/milkschen/leviosam2
   :documentation: https://github.com/milkschen/leviosam2/blob/v0.5.0/README.md
   
   :license: MIT / MIT
   :recipe: /`leviosam2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab396`, doi: :doi:`10.1101/2022.04.27.489683`

   


.. conda:package:: leviosam2

   |downloads_leviosam2| |docker_leviosam2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.11``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.6``
   :depends sdsl-lite: ``>=2.1.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install leviosam2

   and update with::

      mamba update leviosam2

  To create a new environment, run::

      mamba create --name myenvname leviosam2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/leviosam2:<tag>

   (see `leviosam2/tags`_ for valid values for ``<tag>``)


.. |downloads_leviosam2| image:: https://img.shields.io/conda/dn/bioconda/leviosam2.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam2
   :alt:   (downloads)
.. |docker_leviosam2| image:: https://quay.io/repository/biocontainers/leviosam2/status
   :target: https://quay.io/repository/biocontainers/leviosam2
.. _`leviosam2/tags`: https://quay.io/repository/biocontainers/leviosam2?tab=tags


.. raw:: html

    <script>
        var package = "leviosam2";
        var versions = ["0.5.0","0.4.2","0.4.1","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam2/README.html