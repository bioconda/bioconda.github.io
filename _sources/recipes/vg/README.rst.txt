:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vg'
.. highlight: bash

vg
==

.. conda:recipe:: vg
   :replaces_section_title:
   :noindex:

   Variation graph data structures\, interchange formats\, alignment\, genotyping\, and variant calling methods

   :homepage: https://github.com/vgteam/vg
   :license: MIT / MIT
   :recipe: /`vg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vg/meta.yaml>`_

   


.. conda:package:: vg

   |downloads_vg| |docker_vg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.67.0-0</code>,  <code>1.65.0-0</code>,  <code>1.63.1-0</code>,  <code>1.61.0-0</code>,  <code>1.60.0-0</code>,  <code>1.59.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.67.0-0``,  ``1.65.0-0``,  ``1.63.1-0``,  ``1.61.0-0``,  ``1.60.0-0``,  ``1.59.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.55.0-0``,  ``1.54.0-0``,  ``1.53.0-0``,  ``1.52.0-0``,  ``1.51.0-0``,  ``1.50.1-0``,  ``1.50.0-0``,  ``1.49.0-0``,  ``1.48.0-0``,  ``1.47.0-0``,  ``1.46.0-0``,  ``1.45.0-0``,  ``1.44.0-0``,  ``1.43.0-0``,  ``1.42.0-0``,  ``1.41.0-0``,  ``1.40.0-0``,  ``1.39.0-0``,  ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.35.0-0``,  ``1.34.0-0``,  ``1.33.0-0``,  ``1.32.0-0``,  ``1.31.0-1``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.27.1-0``,  ``1.27.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.23.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install vg

   and update with::

      mamba update vg

  To create a new environment, run::

      mamba create --name myenvname vg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vg:<tag>

   (see `vg/tags`_ for valid values for ``<tag>``)


.. |downloads_vg| image:: https://img.shields.io/conda/dn/bioconda/vg.svg?style=flat
   :target: https://anaconda.org/bioconda/vg
   :alt:   (downloads)
.. |docker_vg| image:: https://quay.io/repository/biocontainers/vg/status
   :target: https://quay.io/repository/biocontainers/vg
.. _`vg/tags`: https://quay.io/repository/biocontainers/vg?tab=tags


.. raw:: html

    <script>
        var package = "vg";
        var versions = ["1.70.0","1.67.0","1.65.0","1.63.1","1.61.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vg/README.html