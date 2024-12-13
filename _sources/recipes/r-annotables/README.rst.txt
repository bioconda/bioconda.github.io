:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-annotables'
.. highlight: bash

r-annotables
============

.. conda:recipe:: r-annotables
   :replaces_section_title:
   :noindex:

   Provides tables for converting and annotating Ensembl Gene IDs.

   :homepage: https://github.com/stephenturner/annotables
   :license: GPL3 / GPL-3
   :recipe: /`r-annotables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.996854`

   


.. conda:package:: r-annotables

   |downloads_r-annotables| |docker_r-annotables|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-2</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.90-4</code>,  <code>0.1.90-3</code>,  <code>0.1.90-2</code>,  <code>0.1.90-1</code>,  <code>0.1.90-0</code>,  <code>v0.1.90-3</code>,  </span></summary>
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.90-4``,  ``0.1.90-3``,  ``0.1.90-2``,  ``0.1.90-1``,  ``0.1.90-0``,  ``v0.1.90-3``,  ``v0.1.90-2``,  ``v0.1.90-1``,  ``v0.1.90-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-tibble: 
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

      mamba install r-annotables

   and update with::

      mamba update r-annotables

  To create a new environment, run::

      mamba create --name myenvname r-annotables

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-annotables:<tag>

   (see `r-annotables/tags`_ for valid values for ``<tag>``)


.. |downloads_r-annotables| image:: https://img.shields.io/conda/dn/bioconda/r-annotables.svg?style=flat
   :target: https://anaconda.org/bioconda/r-annotables
   :alt:   (downloads)
.. |docker_r-annotables| image:: https://quay.io/repository/biocontainers/r-annotables/status
   :target: https://quay.io/repository/biocontainers/r-annotables
.. _`r-annotables/tags`: https://quay.io/repository/biocontainers/r-annotables?tab=tags


.. raw:: html

    <script>
        var package = "r-annotables";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.90","0.1.90"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-annotables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-annotables/README.html