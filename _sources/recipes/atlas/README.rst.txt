:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas'
.. highlight: bash

atlas
=====

.. conda:recipe:: atlas
   :replaces_section_title:
   :noindex:

   ATLAS\: Analysis Tools for Ancient and Low\-depth Samples

   :homepage: https://atlaswiki.netlify.app
   :license: MPL-2.0
   :recipe: /`atlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas/meta.yaml>`_

   


.. conda:package:: atlas

   |downloads_atlas| |docker_atlas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-6</code>,  <code>2.0.0-5</code>,  <code>2.0.0-4</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>0.9.9-3</code>,  <code>0.9.9-2</code>,  </span></summary>
      

      ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``0.9.9-3``,  ``0.9.9-2``,  ``0.9.9-1``,  ``0.9.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends armadillo: ``>=14.4,<15.0a0``
   :depends fmt: ``>=10.2.1,<11.0a0``
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends jsoncpp: ``>=1.9.6,<1.9.7.0a0``
   :depends lapack: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends nlohmann_json: 
   :depends openblas: 
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

      mamba install atlas

   and update with::

      mamba update atlas

  To create a new environment, run::

      mamba create --name myenvname atlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atlas:<tag>

   (see `atlas/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas| image:: https://img.shields.io/conda/dn/bioconda/atlas.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas
   :alt:   (downloads)
.. |docker_atlas| image:: https://quay.io/repository/biocontainers/atlas/status
   :target: https://quay.io/repository/biocontainers/atlas
.. _`atlas/tags`: https://quay.io/repository/biocontainers/atlas?tab=tags


.. raw:: html

    <script>
        var package = "atlas";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas/README.html