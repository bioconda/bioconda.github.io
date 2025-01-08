:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmagpie'
.. highlight: bash

bioconductor-rmagpie
====================

.. conda:recipe:: bioconductor-rmagpie
   :replaces_section_title:
   :noindex:

   MicroArray Gene\-expression\-based Program In Error rate estimation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rmagpie.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rmagpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie/meta.yaml>`_

   Microarray Classification is designed for both biologists and statisticians. It offers the ability to train a classifier on a labelled microarray dataset and to then use that classifier to predict the class of new observations. A range of modern classifiers are available\, including support vector machines \(SVMs\)\, nearest shrunken centroids \(NSCs\)... Advanced methods are provided to estimate the predictive error rate and to report the subset of genes which appear essential in discriminating between classes.


.. conda:package:: bioconductor-rmagpie

   |downloads_bioconductor-rmagpie| |docker_bioconductor-rmagpie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-kernlab: 
   :depends r-pamr: 
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

      mamba install bioconductor-rmagpie

   and update with::

      mamba update bioconductor-rmagpie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rmagpie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmagpie:<tag>

   (see `bioconductor-rmagpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmagpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmagpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmagpie
   :alt:   (downloads)
.. |docker_bioconductor-rmagpie| image:: https://quay.io/repository/biocontainers/bioconductor-rmagpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmagpie
.. _`bioconductor-rmagpie/tags`: https://quay.io/repository/biocontainers/bioconductor-rmagpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmagpie";
        var versions = ["1.62.0","1.58.0","1.56.0","1.54.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html