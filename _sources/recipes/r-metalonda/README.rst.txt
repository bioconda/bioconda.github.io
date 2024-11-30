:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metalonda'
.. highlight: bash

r-metalonda
===========

.. conda:recipe:: r-metalonda
   :replaces_section_title:
   :noindex:

   Identify time intervals of differentially abundant metagenomics features in longitudinal studies.

   :homepage: https://github.com/aametwally/MetaLonDA
   :license: MIT / MIT
   :recipe: /`r-metalonda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda/meta.yaml>`_

   


.. conda:package:: r-metalonda

   |downloads_r-metalonda| |docker_r-metalonda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.8-5</code>,  <code>1.1.8-4</code>,  <code>1.1.8-3</code>,  <code>1.1.8-2</code>,  <code>1.1.8-1</code>,  <code>1.1.8-0</code>,  <code>1.1.5-0</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  </span></summary>
      

      ``1.1.8-5``,  ``1.1.8-4``,  ``1.1.8-3``,  ``1.1.8-2``,  ``1.1.8-1``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends bioconductor-metagenomeseq: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-ggplot2: 
   :depends r-gss: 
   :depends r-plyr: 
   :depends r-pracma: 
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

      mamba install r-metalonda

   and update with::

      mamba update r-metalonda

  To create a new environment, run::

      mamba create --name myenvname r-metalonda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-metalonda:<tag>

   (see `r-metalonda/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metalonda| image:: https://img.shields.io/conda/dn/bioconda/r-metalonda.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metalonda
   :alt:   (downloads)
.. |docker_r-metalonda| image:: https://quay.io/repository/biocontainers/r-metalonda/status
   :target: https://quay.io/repository/biocontainers/r-metalonda
.. _`r-metalonda/tags`: https://quay.io/repository/biocontainers/r-metalonda?tab=tags


.. raw:: html

    <script>
        var package = "r-metalonda";
        var versions = ["1.1.8","1.1.8","1.1.8","1.1.8","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metalonda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metalonda/README.html