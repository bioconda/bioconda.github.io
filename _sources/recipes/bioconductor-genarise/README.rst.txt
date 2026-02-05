:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genarise'
.. highlight: bash

bioconductor-genarise
=====================

.. conda:recipe:: bioconductor-genarise
   :replaces_section_title:
   :noindex:

   Microarray Analysis tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/genArise.html
   :license: file LICENSE
   :recipe: /`bioconductor-genarise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise/meta.yaml>`_

   genArise is an easy to use tool for dual color microarray data. Its GUI\-Tk based environment let any non\-experienced user performs a basic\, but not simple\, data analysis just following a wizard. In addition it provides some tools for the developer.


.. conda:package:: bioconductor-genarise

   |downloads_bioconductor-genarise| |docker_bioconductor-genarise|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.86.0-0</code>,  <code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  </span></summary>
      

      ``1.86.0-0``,  ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-locfit: 
   :depends r-tkrplot: 
   :depends r-xtable: 
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

      mamba install bioconductor-genarise

   and update with::

      mamba update bioconductor-genarise

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genarise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genarise:<tag>

   (see `bioconductor-genarise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genarise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genarise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genarise
   :alt:   (downloads)
.. |docker_bioconductor-genarise| image:: https://quay.io/repository/biocontainers/bioconductor-genarise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genarise
.. _`bioconductor-genarise/tags`: https://quay.io/repository/biocontainers/bioconductor-genarise?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genarise";
        var versions = ["1.86.0","1.82.0","1.78.0","1.76.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genarise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genarise/README.html