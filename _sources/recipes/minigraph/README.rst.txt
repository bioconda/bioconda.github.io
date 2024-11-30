:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minigraph'
.. highlight: bash

minigraph
=========

.. conda:recipe:: minigraph
   :replaces_section_title:
   :noindex:

   Proof\-of\-concept seq\-to\-graph mapper and graph generator

   :homepage: https://github.com/lh3/minigraph
   :documentation: https://lh3.github.io/minigraph/minigraph.html
   
   :license: MIT / MIT
   :recipe: /`minigraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02168-z`

   


.. conda:package:: minigraph

   |downloads_minigraph| |docker_minigraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21-1</code>,  <code>0.21-0</code>,  <code>0.20-2</code>,  <code>0.20-1</code>,  <code>0.20-0</code>,  <code>0.19-1</code>,  <code>0.19-0</code>,  <code>0.18-0</code>,  <code>0.17-0</code>,  </span></summary>
      

      ``0.21-1``,  ``0.21-0``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``,  ``0.19-1``,  ``0.19-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-1``,  ``0.16-0``,  ``0.15-1``,  ``0.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install minigraph

   and update with::

      mamba update minigraph

  To create a new environment, run::

      mamba create --name myenvname minigraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minigraph:<tag>

   (see `minigraph/tags`_ for valid values for ``<tag>``)


.. |downloads_minigraph| image:: https://img.shields.io/conda/dn/bioconda/minigraph.svg?style=flat
   :target: https://anaconda.org/bioconda/minigraph
   :alt:   (downloads)
.. |docker_minigraph| image:: https://quay.io/repository/biocontainers/minigraph/status
   :target: https://quay.io/repository/biocontainers/minigraph
.. _`minigraph/tags`: https://quay.io/repository/biocontainers/minigraph?tab=tags


.. raw:: html

    <script>
        var package = "minigraph";
        var versions = ["0.21","0.21","0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minigraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minigraph/README.html