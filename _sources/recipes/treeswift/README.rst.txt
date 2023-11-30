:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treeswift'
.. highlight: bash

treeswift
=========

.. conda:recipe:: treeswift
   :replaces_section_title:
   :noindex:

   TreeSwift\: Fast tree module for Python 2 and 3

   :homepage: https://github.com/niemasd/TreeSwift
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`treeswift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeswift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeswift/meta.yaml>`_

   


.. conda:package:: treeswift

   |downloads_treeswift| |docker_treeswift|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.39-0</code>,  <code>1.1.38-0</code>,  <code>1.1.37-0</code>,  <code>1.1.35-0</code>,  <code>1.1.34-0</code>,  <code>1.1.33-0</code>,  <code>1.1.30-0</code>,  <code>1.1.29-0</code>,  <code>1.1.28-0</code>,  </span></summary>
      

      ``1.1.39-0``,  ``1.1.38-0``,  ``1.1.37-0``,  ``1.1.35-0``,  ``1.1.34-0``,  ``1.1.33-0``,  ``1.1.30-0``,  ``1.1.29-0``,  ``1.1.28-0``,  ``1.1.26-0``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.16-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.12-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install treeswift

   and update with::

      mamba update treeswift

  To create a new environment, run::

      mamba create --name myenvname treeswift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treeswift:<tag>

   (see `treeswift/tags`_ for valid values for ``<tag>``)


.. |downloads_treeswift| image:: https://img.shields.io/conda/dn/bioconda/treeswift.svg?style=flat
   :target: https://anaconda.org/bioconda/treeswift
   :alt:   (downloads)
.. |docker_treeswift| image:: https://quay.io/repository/biocontainers/treeswift/status
   :target: https://quay.io/repository/biocontainers/treeswift
.. _`treeswift/tags`: https://quay.io/repository/biocontainers/treeswift?tab=tags


.. raw:: html

    <script>
        var package = "treeswift";
        var versions = ["1.1.39","1.1.38","1.1.37","1.1.35","1.1.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treeswift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treeswift/README.html