:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathwaypca'
.. highlight: bash

bioconductor-pathwaypca
=======================

.. conda:recipe:: bioconductor-pathwaypca
   :replaces_section_title:
   :noindex:

   Integrative Pathway Analysis with Modern PCA Methodology and Gene Selection

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pathwayPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-pathwaypca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaypca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaypca/meta.yaml>`_

   pathwayPCA is an integrative analysis tool that implements the principal component analysis \(PCA\) based pathway analysis approaches described in Chen et al. \(2008\)\, Chen et al. \(2010\)\, and Chen \(2011\). pathwayPCA allows users to\: \(1\) Test pathway association with binary\, continuous\, or survival phenotypes. \(2\) Extract relevant genes in the pathways using the SuperPCA and AES\-PCA approaches. \(3\) Compute principal components \(PCs\) based on the selected genes. These estimated latent variables represent pathway activities for individual subjects\, which can then be used to perform integrative pathway analysis\, such as multi\-omics analysis. \(4\) Extract relevant genes that drive pathway significance as well as data corresponding to these relevant genes for additional in\-depth analysis. \(5\) Perform analyses with enhanced computational efficiency with parallel computing and enhanced data safety with S4\-class data objects. \(6\) Analyze studies with complex experimental designs\, with multiple covariates\, and with interaction effects\, e.g.\, testing whether pathway association with clinical phenotype is different between male and female subjects. Citations\: Chen et al. \(2008\) \<https\:\/\/doi.org\/10.1093\/bioinformatics\/btn458\>\; Chen et al. \(2010\) \<https\:\/\/doi.org\/10.1002\/gepi.20532\>\; and Chen \(2011\) \<https\:\/\/doi.org\/10.2202\/1544\-6115.1697\>.


.. conda:package:: bioconductor-pathwaypca

   |downloads_bioconductor-pathwaypca| |docker_bioconductor-pathwaypca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.3-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lars: 
   :depends r-survival: 
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

      mamba install bioconductor-pathwaypca

   and update with::

      mamba update bioconductor-pathwaypca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathwaypca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathwaypca:<tag>

   (see `bioconductor-pathwaypca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathwaypca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathwaypca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathwaypca
   :alt:   (downloads)
.. |docker_bioconductor-pathwaypca| image:: https://quay.io/repository/biocontainers/bioconductor-pathwaypca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathwaypca
.. _`bioconductor-pathwaypca/tags`: https://quay.io/repository/biocontainers/bioconductor-pathwaypca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathwaypca";
        var versions = ["1.22.0","1.18.0","1.16.1","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathwaypca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathwaypca/README.html