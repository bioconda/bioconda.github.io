:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwapy'
.. highlight: bash

bwapy
=====

.. conda:recipe:: bwapy
   :replaces_section_title:
   :noindex:

   Bwapy provides python wrappers for bwa.

   :homepage: https://github.com/nanoporetech/bwapy
   :license: Mozilla Public License Version 2.0
   :recipe: /`bwapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy/meta.yaml>`_

   


.. conda:package:: bwapy

   |downloads_bwapy| |docker_bwapy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-10</code>,  <code>0.1.4-9</code>,  <code>0.1.4-8</code>,  <code>0.1.4-7</code>,  <code>0.1.4-5</code>,  <code>0.1.4-4</code>,  <code>0.1.4-3</code>,  <code>0.1.4-2</code>,  <code>0.1.4-1</code>,  </span></summary>
      

      ``0.1.4-10``,  ``0.1.4-9``,  ``0.1.4-8``,  ``0.1.4-7``,  ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends cffi: 
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install bwapy

   and update with::

      mamba update bwapy

  To create a new environment, run::

      mamba create --name myenvname bwapy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwapy:<tag>

   (see `bwapy/tags`_ for valid values for ``<tag>``)


.. |downloads_bwapy| image:: https://img.shields.io/conda/dn/bioconda/bwapy.svg?style=flat
   :target: https://anaconda.org/bioconda/bwapy
   :alt:   (downloads)
.. |docker_bwapy| image:: https://quay.io/repository/biocontainers/bwapy/status
   :target: https://quay.io/repository/biocontainers/bwapy
.. _`bwapy/tags`: https://quay.io/repository/biocontainers/bwapy?tab=tags


.. raw:: html

    <script>
        var package = "bwapy";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwapy/README.html