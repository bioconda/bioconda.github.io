:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metama'
.. highlight: bash

r-metama
========

.. conda:recipe:: r-metama
   :replaces_section_title:
   :noindex:

   Combines either p\-values or modified effect sizes from different studies to find differentially expressed genes

   :homepage: https://CRAN.R-project.org/package=metaMA
   :license: GPL / GPL
   :recipe: /`r-metama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama/meta.yaml>`_

   


.. conda:package:: r-metama

   |downloads_r-metama| |docker_r-metama|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-2</code>,  <code>3.1.3-1</code>,  <code>3.1.3-0</code>,  <code>3.1.2-7</code>,  <code>3.1.2-6</code>,  <code>3.1.2-5</code>,  <code>3.1.2-4</code>,  <code>3.1.2-3</code>,  <code>3.1.2-2</code>,  </span></summary>
      

      ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-7``,  ``3.1.2-6``,  ``3.1.2-5``,  ``3.1.2-4``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-smvar: 
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

      mamba install r-metama

   and update with::

      mamba update r-metama

  To create a new environment, run::

      mamba create --name myenvname r-metama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-metama:<tag>

   (see `r-metama/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metama| image:: https://img.shields.io/conda/dn/bioconda/r-metama.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metama
   :alt:   (downloads)
.. |docker_r-metama| image:: https://quay.io/repository/biocontainers/r-metama/status
   :target: https://quay.io/repository/biocontainers/r-metama
.. _`r-metama/tags`: https://quay.io/repository/biocontainers/r-metama?tab=tags


.. raw:: html

    <script>
        var package = "r-metama";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.2","3.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metama/README.html