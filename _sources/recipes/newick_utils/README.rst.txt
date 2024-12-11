:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'newick_utils'
.. highlight: bash

newick_utils
============

.. conda:recipe:: newick_utils
   :replaces_section_title:
   :noindex:

   The Newick Utilities are a suite of Unix shell tools for processing phylogenetic trees. We distribute the package under the BSD License. Functions include re\-rooting\, extracting subtrees\, trimming\, pruning\, condensing\, drawing \(ASCII graphics or SVG\).

   :homepage: http://cegg.unige.ch/newick_utils
   :license: BSD License
   :recipe: /`newick_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils/meta.yaml>`_

   


.. conda:package:: newick_utils

   |downloads_newick_utils| |docker_newick_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-9</code>,  <code>1.6-8</code>,  <code>1.6-7</code>,  <code>1.6-6</code>,  <code>1.6-5</code>,  <code>1.6-4</code>,  <code>1.6-3</code>,  <code>1.6-2</code>,  <code>1.6-1</code>,  </span></summary>
      

      ``1.6-9``,  ``1.6-8``,  ``1.6-7``,  ``1.6-6``,  ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libxml2: ``>=2.13.5,<3.0a0``
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

      mamba install newick_utils

   and update with::

      mamba update newick_utils

  To create a new environment, run::

      mamba create --name myenvname newick_utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/newick_utils:<tag>

   (see `newick_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_newick_utils| image:: https://img.shields.io/conda/dn/bioconda/newick_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/newick_utils
   :alt:   (downloads)
.. |docker_newick_utils| image:: https://quay.io/repository/biocontainers/newick_utils/status
   :target: https://quay.io/repository/biocontainers/newick_utils
.. _`newick_utils/tags`: https://quay.io/repository/biocontainers/newick_utils?tab=tags


.. raw:: html

    <script>
        var package = "newick_utils";
        var versions = ["1.6","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/newick_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/newick_utils/README.html