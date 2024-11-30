:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-epic'
.. highlight: bash

r-epic
======

.. conda:recipe:: r-epic
   :replaces_section_title:
   :noindex:

   Estimate the Proportion of Immune and Cancer cells from bulk gene expression data.

   :homepage: https://github.com/GfellerLab/EPIC
   :license: other / other
   :recipe: /`r-epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epic/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.26476.001`

   


.. conda:package:: r-epic

   |downloads_r-epic| |docker_r-epic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1-5</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  </span></summary>
      

      ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-epic

   and update with::

      mamba update r-epic

  To create a new environment, run::

      mamba create --name myenvname r-epic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-epic:<tag>

   (see `r-epic/tags`_ for valid values for ``<tag>``)


.. |downloads_r-epic| image:: https://img.shields.io/conda/dn/bioconda/r-epic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-epic
   :alt:   (downloads)
.. |docker_r-epic| image:: https://quay.io/repository/biocontainers/r-epic/status
   :target: https://quay.io/repository/biocontainers/r-epic
.. _`r-epic/tags`: https://quay.io/repository/biocontainers/r-epic?tab=tags


.. raw:: html

    <script>
        var package = "r-epic";
        var versions = ["1.1.7","1.1.7","1.1.6","1.1.6","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-epic/README.html