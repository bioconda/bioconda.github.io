:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-metro'
.. highlight: bash

nf-metro
========

.. conda:recipe:: nf-metro
   :replaces_section_title:
   :noindex:

   Metromap\-style pipeline workflow components

   :homepage: https://github.com/pinin4fjords/nf-metro
   :license: MIT
   :recipe: /`nf-metro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-metro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-metro/meta.yaml>`_

   


.. conda:package:: nf-metro

   |downloads_nf-metro| |docker_nf-metro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=8.0``
   :depends drawsvg: ``>=2.0``
   :depends networkx: ``>=3.0``
   :depends pillow: ``>=9.0``
   :depends python: ``>=3.10``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nf-metro

   and update with::

      mamba update nf-metro

  To create a new environment, run::

      mamba create --name myenvname nf-metro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nf-metro:<tag>

   (see `nf-metro/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-metro| image:: https://img.shields.io/conda/dn/bioconda/nf-metro.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-metro
   :alt:   (downloads)
.. |docker_nf-metro| image:: https://quay.io/repository/biocontainers/nf-metro/status
   :target: https://quay.io/repository/biocontainers/nf-metro
.. _`nf-metro/tags`: https://quay.io/repository/biocontainers/nf-metro?tab=tags


.. raw:: html

    <script>
        var package = "nf-metro";
        var versions = ["0.5.2","0.5.1","0.5.0","0.4.7","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-metro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-metro/README.html