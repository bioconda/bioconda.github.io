:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vphaser2'
.. highlight: bash

vphaser2
========

.. conda:recipe:: vphaser2
   :replaces_section_title:
   :noindex:

   V\-Phaser 2 is a tool to call variants in genetically heterogeneous populations from ultra\-deep sequence data

   :homepage: https://www.broadinstitute.org/scientific-community/science/projects/viral-genomics/v-phaser-2
   :license: single user license for academic non-commercial research purposes only
   :recipe: /`vphaser2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2/meta.yaml>`_

   


.. conda:package:: vphaser2

   |downloads_vphaser2| |docker_vphaser2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-15</code>,  <code>2.0-14</code>,  <code>2.0-13</code>,  <code>2.0-12</code>,  <code>2.0-11</code>,  <code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  </span></summary>
      

      ``2.0-15``,  ``2.0-14``,  ``2.0-13``,  ``2.0-12``,  ``2.0-11``,  ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.2,<2.6.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install vphaser2

   and update with::

      mamba update vphaser2

  To create a new environment, run::

      mamba create --name myenvname vphaser2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vphaser2:<tag>

   (see `vphaser2/tags`_ for valid values for ``<tag>``)


.. |downloads_vphaser2| image:: https://img.shields.io/conda/dn/bioconda/vphaser2.svg?style=flat
   :target: https://anaconda.org/bioconda/vphaser2
   :alt:   (downloads)
.. |docker_vphaser2| image:: https://quay.io/repository/biocontainers/vphaser2/status
   :target: https://quay.io/repository/biocontainers/vphaser2
.. _`vphaser2/tags`: https://quay.io/repository/biocontainers/vphaser2?tab=tags


.. raw:: html

    <script>
        var package = "vphaser2";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vphaser2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vphaser2/README.html