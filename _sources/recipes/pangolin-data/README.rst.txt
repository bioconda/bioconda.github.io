:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin-data'
.. highlight: bash

pangolin-data
=============

.. conda:recipe:: pangolin-data
   :replaces_section_title:
   :noindex:

   Repository for storing latest model\, protobuf\, designation hash and alias files for pangolin assignments

   :homepage: https://github.com/cov-lineages/pangolin-data
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pangolin-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data/meta.yaml>`_

   


.. conda:package:: pangolin-data

   |downloads_pangolin-data| |docker_pangolin-data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.30-0</code>,  <code>1.29-0</code>,  <code>1.28.1-0</code>,  <code>1.28-0</code>,  <code>1.27-0</code>,  <code>1.26-0</code>,  </span></summary>
      

      ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.30-0``,  ``1.29-0``,  ``1.28.1-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25.1-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23.1-0``,  ``1.23-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18.1.1-0``,  ``1.18.1-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-1``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.6-0``,  ``1.3-0``,  ``1.2.133.2-0``,  ``1.2.133-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install pangolin-data

   and update with::

      mamba update pangolin-data

  To create a new environment, run::

      mamba create --name myenvname pangolin-data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangolin-data:<tag>

   (see `pangolin-data/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolin-data| image:: https://img.shields.io/conda/dn/bioconda/pangolin-data.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin-data
   :alt:   (downloads)
.. |docker_pangolin-data| image:: https://quay.io/repository/biocontainers/pangolin-data/status
   :target: https://quay.io/repository/biocontainers/pangolin-data
.. _`pangolin-data/tags`: https://quay.io/repository/biocontainers/pangolin-data?tab=tags


.. raw:: html

    <script>
        var package = "pangolin-data";
        var versions = ["1.33","1.32","1.31","1.30","1.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin-data/README.html