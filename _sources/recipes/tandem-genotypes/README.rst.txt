:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tandem-genotypes'
.. highlight: bash

tandem-genotypes
================

.. conda:recipe:: tandem-genotypes
   :replaces_section_title:
   :noindex:

   Find tandem repeat length changes\, from \"long\" DNA reads aligned to a genome

   :homepage: https://github.com/mcfrith/tandem-genotypes
   :license: GPL-3.0-or-later
   :recipe: /`tandem-genotypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandem-genotypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandem-genotypes/meta.yaml>`_

   


.. conda:package:: tandem-genotypes

   |downloads_tandem-genotypes| |docker_tandem-genotypes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-0</code>,  <code>1.8.3-0</code>,  <code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.2-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.9.0-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends r-base: 
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

      mamba install tandem-genotypes

   and update with::

      mamba update tandem-genotypes

  To create a new environment, run::

      mamba create --name myenvname tandem-genotypes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tandem-genotypes:<tag>

   (see `tandem-genotypes/tags`_ for valid values for ``<tag>``)


.. |downloads_tandem-genotypes| image:: https://img.shields.io/conda/dn/bioconda/tandem-genotypes.svg?style=flat
   :target: https://anaconda.org/bioconda/tandem-genotypes
   :alt:   (downloads)
.. |docker_tandem-genotypes| image:: https://quay.io/repository/biocontainers/tandem-genotypes/status
   :target: https://quay.io/repository/biocontainers/tandem-genotypes
.. _`tandem-genotypes/tags`: https://quay.io/repository/biocontainers/tandem-genotypes?tab=tags


.. raw:: html

    <script>
        var package = "tandem-genotypes";
        var versions = ["1.9.0","1.8.3","1.8.2","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tandem-genotypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tandem-genotypes/README.html