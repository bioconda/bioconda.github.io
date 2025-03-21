:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deqms'
.. highlight: bash

bioconductor-deqms
==================

.. conda:recipe:: bioconductor-deqms
   :replaces_section_title:
   :noindex:

   a tool to perform statistical analysis of differential protein expression for quantitative proteomics data.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEqMS.html
   :license: LGPL
   :recipe: /`bioconductor-deqms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deqms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deqms/meta.yaml>`_

   DEqMS is developped on top of Limma. However\, Limma assumes same prior variance for all genes. In proteomics\, the accuracy of protein abundance estimates varies by the number of peptides\/PSMs quantified in both label\-free and labelled data. Proteins quantification by multiple peptides or PSMs are more accurate. DEqMS package is able to estimate different prior variances for proteins quantified by different number of PSMs\/peptides\, therefore acchieving better accuracy. The package can be applied to analyze both label\-free and labelled proteomics data.


.. conda:package:: bioconductor-deqms

   |downloads_bioconductor-deqms| |docker_bioconductor-deqms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.11.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.11.1-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-deqms

   and update with::

      mamba update bioconductor-deqms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deqms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deqms:<tag>

   (see `bioconductor-deqms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deqms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deqms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deqms
   :alt:   (downloads)
.. |docker_bioconductor-deqms| image:: https://quay.io/repository/biocontainers/bioconductor-deqms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deqms
.. _`bioconductor-deqms/tags`: https://quay.io/repository/biocontainers/bioconductor-deqms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deqms";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deqms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deqms/README.html