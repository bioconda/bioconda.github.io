:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cp4p'
.. highlight: bash

r-cp4p
======

.. conda:recipe:: r-cp4p
   :replaces_section_title:
   :noindex:

   Functions to check whether a vector of p\-values respects the assumptions of FDR \(false discovery rate\) control procedures and to compute adjusted p\-values.

   :homepage: https://CRAN.R-project.org/package=cp4p
   :license: GPL3 / GPL-3
   :recipe: /`r-cp4p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p/meta.yaml>`_

   


.. conda:package:: r-cp4p

   |downloads_r-cp4p| |docker_r-cp4p|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-7</code>,  <code>0.3.6-6</code>,  <code>0.3.6-5</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  <code>0.3.5-1</code>,  </span></summary>
      

      ``0.3.6-7``,  ``0.3.6-6``,  ``0.3.6-5``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: 
   :depends bioconductor-multtest: 
   :depends bioconductor-qvalue: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mess: 
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

      mamba install r-cp4p

   and update with::

      mamba update r-cp4p

  To create a new environment, run::

      mamba create --name myenvname r-cp4p

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cp4p:<tag>

   (see `r-cp4p/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cp4p| image:: https://img.shields.io/conda/dn/bioconda/r-cp4p.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cp4p
   :alt:   (downloads)
.. |docker_r-cp4p| image:: https://quay.io/repository/biocontainers/r-cp4p/status
   :target: https://quay.io/repository/biocontainers/r-cp4p
.. _`r-cp4p/tags`: https://quay.io/repository/biocontainers/r-cp4p?tab=tags


.. raw:: html

    <script>
        var package = "r-cp4p";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cp4p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cp4p/README.html