:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-leidenbase'
.. highlight: bash

r-leidenbase
============

.. conda:recipe:: r-leidenbase
   :replaces_section_title:
   :noindex:

   An R to C interface that runs the Leiden community detection algorithm to find a basic partition

   :homepage: https://cole-trapnell-lab.github.io/leidenbase/
   :license: GPL-2.0-only, GPL-3.0-only, BSD
   :recipe: /`r-leidenbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leidenbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leidenbase/meta.yaml>`_

   


.. conda:package:: r-leidenbase

   |downloads_r-leidenbase| |docker_r-leidenbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.27-2</code>,  <code>0.1.27-1</code>,  <code>0.1.18-0</code>,  <code>0.1.12-0</code>,  <code>0.1.3-3</code>,  <code>0.1.3-2</code>,  <code>0.1.3-1</code>,  <code>0.1.3-0</code>,  <code>0.1.0-3</code>,  </span></summary>
      

      ``0.1.27-2``,  ``0.1.27-1``,  ``0.1.18-0``,  ``0.1.12-0``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends glpk: ``>=5.0,<6.0a0``
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libxml2: ``>=2.12.7,<3.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: ``>=1.3.4``
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

      mamba install r-leidenbase

   and update with::

      mamba update r-leidenbase

  To create a new environment, run::

      mamba create --name myenvname r-leidenbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-leidenbase:<tag>

   (see `r-leidenbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-leidenbase| image:: https://img.shields.io/conda/dn/bioconda/r-leidenbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-leidenbase
   :alt:   (downloads)
.. |docker_r-leidenbase| image:: https://quay.io/repository/biocontainers/r-leidenbase/status
   :target: https://quay.io/repository/biocontainers/r-leidenbase
.. _`r-leidenbase/tags`: https://quay.io/repository/biocontainers/r-leidenbase?tab=tags


.. raw:: html

    <script>
        var package = "r-leidenbase";
        var versions = ["0.1.27","0.1.27","0.1.18","0.1.12","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-leidenbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-leidenbase/README.html