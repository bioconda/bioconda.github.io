:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ropebwt2'
.. highlight: bash

ropebwt2
========

.. conda:recipe:: ropebwt2
   :replaces_section_title:
   :noindex:

   Incremental construction of FM\-index for DNA sequences.

   :homepage: https://github.com/lh3/ropebwt2
   :license: MIT / MIT
   :recipe: /`ropebwt2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2/meta.yaml>`_

   


.. conda:package:: ropebwt2

   |downloads_ropebwt2| |docker_ropebwt2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r187-11</code>,  <code>r187-10</code>,  <code>r187-9</code>,  <code>r187-8</code>,  <code>r187-7</code>,  <code>r187-6</code>,  <code>r187-5</code>,  <code>r187-4</code>,  <code>r187-3</code>,  </span></summary>
      

      ``r187-11``,  ``r187-10``,  ``r187-9``,  ``r187-8``,  ``r187-7``,  ``r187-6``,  ``r187-5``,  ``r187-4``,  ``r187-3``,  ``r187-2``,  ``r187-1``,  ``r187-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install ropebwt2

   and update with::

      mamba update ropebwt2

  To create a new environment, run::

      mamba create --name myenvname ropebwt2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ropebwt2:<tag>

   (see `ropebwt2/tags`_ for valid values for ``<tag>``)


.. |downloads_ropebwt2| image:: https://img.shields.io/conda/dn/bioconda/ropebwt2.svg?style=flat
   :target: https://anaconda.org/bioconda/ropebwt2
   :alt:   (downloads)
.. |docker_ropebwt2| image:: https://quay.io/repository/biocontainers/ropebwt2/status
   :target: https://quay.io/repository/biocontainers/ropebwt2
.. _`ropebwt2/tags`: https://quay.io/repository/biocontainers/ropebwt2?tab=tags


.. raw:: html

    <script>
        var package = "ropebwt2";
        var versions = ["r187","r187","r187","r187","r187"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ropebwt2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ropebwt2/README.html