:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-umi4c'
.. highlight: bash

r-umi4c
=======

.. conda:recipe:: r-umi4c
   :replaces_section_title:
   :noindex:

   Process UMI\-4C data from scratch to produce nice plots.

   :homepage: https://tanaylab.github.io/umi4cpackage
   :license: GPL
   :recipe: /`r-umi4c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c/meta.yaml>`_

   


.. conda:package:: r-umi4c

   |downloads_r-umi4c| |docker_r-umi4c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.1-3</code>,  <code>0.0.1-2</code>,  <code>0.0.1-1</code>,  <code>0.0.1-0</code>,  <code>0.0.0.9000-5</code>,  <code>0.0.0.9000-4</code>,  <code>0.0.0.9000-3</code>,  <code>0.0.0.9000-2</code>,  <code>0.0.0.9000-1</code>,  </span></summary>
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0.9000-5``,  ``0.0.0.9000-4``,  ``0.0.0.9000-3``,  ``0.0.0.9000-2``,  ``0.0.0.9000-1``,  ``0.0.0.9000-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-misha: 
   :depends r-zoo: 
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

      mamba install r-umi4c

   and update with::

      mamba update r-umi4c

  To create a new environment, run::

      mamba create --name myenvname r-umi4c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-umi4c:<tag>

   (see `r-umi4c/tags`_ for valid values for ``<tag>``)


.. |downloads_r-umi4c| image:: https://img.shields.io/conda/dn/bioconda/r-umi4c.svg?style=flat
   :target: https://anaconda.org/bioconda/r-umi4c
   :alt:   (downloads)
.. |docker_r-umi4c| image:: https://quay.io/repository/biocontainers/r-umi4c/status
   :target: https://quay.io/repository/biocontainers/r-umi4c
.. _`r-umi4c/tags`: https://quay.io/repository/biocontainers/r-umi4c?tab=tags


.. raw:: html

    <script>
        var package = "r-umi4c";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.0.9000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-umi4c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-umi4c/README.html