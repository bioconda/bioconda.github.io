:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastlin'
.. highlight: bash

fastlin
=======

.. conda:recipe:: fastlin
   :replaces_section_title:
   :noindex:

   fastlin\, ultra\-fast MTBC lineage typing.

   :homepage: https://github.com/rderelle/fastlin
   :documentation: https://github.com/rderelle/fastlin/blob/0.4.2.1/README.md
   
   :license: MIT / MIT
   :recipe: /`fastlin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlin/meta.yaml>`_

   


.. conda:package:: fastlin

   |downloads_fastlin| |docker_fastlin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2.1-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2.1-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.4.2.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install fastlin

   and update with::

      mamba update fastlin

  To create a new environment, run::

      mamba create --name myenvname fastlin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastlin:<tag>

   (see `fastlin/tags`_ for valid values for ``<tag>``)


.. |downloads_fastlin| image:: https://img.shields.io/conda/dn/bioconda/fastlin.svg?style=flat
   :target: https://anaconda.org/bioconda/fastlin
   :alt:   (downloads)
.. |docker_fastlin| image:: https://quay.io/repository/biocontainers/fastlin/status
   :target: https://quay.io/repository/biocontainers/fastlin
.. _`fastlin/tags`: https://quay.io/repository/biocontainers/fastlin?tab=tags


.. raw:: html

    <script>
        var package = "fastlin";
        var versions = ["0.4.2.1","0.4.2","0.4.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastlin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastlin/README.html