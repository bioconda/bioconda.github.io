:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignoth'
.. highlight: bash

alignoth
========

.. conda:recipe:: alignoth
   :replaces_section_title:
   :noindex:

   A tool for creating alignment plots from bam files.

   :homepage: https://alignoth.github.io
   :documentation: https://github.com/alignoth/alignoth/blob/v0.16.2/README.md
   
   :developer docs: https://github.com/alignoth/alignoth
   :license: MIT / MIT
   :recipe: /`alignoth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth/meta.yaml>`_

   


.. conda:package:: alignoth

   |downloads_alignoth| |docker_alignoth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.2-0</code>,  <code>0.16.1-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.3-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-2</code>,  </span></summary>
      

      ``0.16.2-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.2-2``,  ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openssl: ``>=3.5.1,<4.0a0``
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

      mamba install alignoth

   and update with::

      mamba update alignoth

  To create a new environment, run::

      mamba create --name myenvname alignoth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alignoth:<tag>

   (see `alignoth/tags`_ for valid values for ``<tag>``)


.. |downloads_alignoth| image:: https://img.shields.io/conda/dn/bioconda/alignoth.svg?style=flat
   :target: https://anaconda.org/bioconda/alignoth
   :alt:   (downloads)
.. |docker_alignoth| image:: https://quay.io/repository/biocontainers/alignoth/status
   :target: https://quay.io/repository/biocontainers/alignoth
.. _`alignoth/tags`: https://quay.io/repository/biocontainers/alignoth?tab=tags


.. raw:: html

    <script>
        var package = "alignoth";
        var versions = ["0.16.2","0.16.1","0.16.0","0.15.0","0.14.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignoth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignoth/README.html