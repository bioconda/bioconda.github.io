:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-classdiscovery'
.. highlight: bash

r-classdiscovery
================

.. conda:recipe:: r-classdiscovery
   :replaces_section_title:
   :noindex:

   Defines the classes used for \"class discovery\" problems in the OOMPA project \(\<http\:\/\/oompa.r\-forge.r\-project.org\/\>\). Class discovery primarily consists of unsupervised clustering methods with attempts to assess their statistical significance. 

   :homepage: http://oompa.r-forge.r-project.org/
   :license: APACHE / Apache (== 2.0)
   :recipe: /`r-classdiscovery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery/meta.yaml>`_

   


.. conda:package:: r-classdiscovery

   |downloads_r-classdiscovery| |docker_r-classdiscovery|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.13-2</code>,  <code>3.3.13-1</code>,  <code>3.3.13-0</code>,  <code>3.3.12-2</code>,  <code>3.3.12-1</code>,  <code>3.3.12-0</code>,  </span></summary>
      

      ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.13-2``,  ``3.3.13-1``,  ``3.3.13-0``,  ``3.3.12-2``,  ``3.3.12-1``,  ``3.3.12-0``,  ``3.3.11-0``,  ``3.3.9-1``,  ``3.3.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-mclust: 
   :depends r-oompabase: ``>=3.0.1``
   :depends r-oompadata: 
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

      mamba install r-classdiscovery

   and update with::

      mamba update r-classdiscovery

  To create a new environment, run::

      mamba create --name myenvname r-classdiscovery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-classdiscovery:<tag>

   (see `r-classdiscovery/tags`_ for valid values for ``<tag>``)


.. |downloads_r-classdiscovery| image:: https://img.shields.io/conda/dn/bioconda/r-classdiscovery.svg?style=flat
   :target: https://anaconda.org/bioconda/r-classdiscovery
   :alt:   (downloads)
.. |docker_r-classdiscovery| image:: https://quay.io/repository/biocontainers/r-classdiscovery/status
   :target: https://quay.io/repository/biocontainers/r-classdiscovery
.. _`r-classdiscovery/tags`: https://quay.io/repository/biocontainers/r-classdiscovery?tab=tags


.. raw:: html

    <script>
        var package = "r-classdiscovery";
        var versions = ["3.4.0","3.4.0","3.4.0","3.3.13","3.3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-classdiscovery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-classdiscovery/README.html