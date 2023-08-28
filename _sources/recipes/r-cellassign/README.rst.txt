:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cellassign'
.. highlight: bash

r-cellassign
============

.. conda:recipe:: r-cellassign
   :replaces_section_title:
   :noindex:

   Automated\, probabilistic assignment of cell types in scRNA\-seq data

   :homepage: https://github.com/Irrationone/cellassign
   :license: Apache-2.0
   :recipe: /`r-cellassign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellassign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellassign/meta.yaml>`_

   


.. conda:package:: r-cellassign

   |downloads_r-cellassign| |docker_r-cellassign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.2-6</code>,  <code>0.99.2-5</code>,  <code>0.99.2-4</code>,  <code>0.99.2-3</code>,  <code>0.99.2-2</code>,  <code>0.99.2-1</code>,  <code>0.99.2-0</code>,  <code>0.99.1-0</code>,  <code>0.99.0-1</code>,  </span></summary>
      

      ``0.99.2-6``,  ``0.99.2-5``,  ``0.99.2-4``,  ``0.99.2-3``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``,  ``0.99.1-0``,  ``0.99.0-1``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodbdata: 
   :depends bioconductor-scran: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glue: 
   :depends r-tensorflow: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-cellassign

   and update with::

      mamba update r-cellassign

  To create a new environment, run::

      mamba create --name myenvname r-cellassign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cellassign:<tag>

   (see `r-cellassign/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cellassign| image:: https://img.shields.io/conda/dn/bioconda/r-cellassign.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cellassign
   :alt:   (downloads)
.. |docker_r-cellassign| image:: https://quay.io/repository/biocontainers/r-cellassign/status
   :target: https://quay.io/repository/biocontainers/r-cellassign
.. _`r-cellassign/tags`: https://quay.io/repository/biocontainers/r-cellassign?tab=tags


.. raw:: html

    <script>
        var package = "r-cellassign";
        var versions = ["0.99.2","0.99.2","0.99.2","0.99.2","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cellassign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cellassign/README.html