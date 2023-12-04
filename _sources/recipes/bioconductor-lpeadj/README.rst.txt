:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpeadj'
.. highlight: bash

bioconductor-lpeadj
===================

.. conda:recipe:: bioconductor-lpeadj
   :replaces_section_title:
   :noindex:

   A correction of the local pooled error \(LPE\) method to replace the asymptotic variance adjustment with an unbiased adjustment based on sample size.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/LPEadj.html
   :license: LGPL
   :recipe: /`bioconductor-lpeadj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj/meta.yaml>`_
   :links: biotools: :biotools:`lpeadj`, doi: :doi:`10.1038/nmeth.3252`

   Two options are added to the LPE algorithm. The original LPE method sets all variances below the max variance in the ordered distribution of variances to the maximum variance. in LPEadj this option is turned off by default.  The second option is to use a variance adjustment based on sample size rather than pi\/2.  By default the LPEadj uses the sample size based variance adjustment.


.. conda:package:: bioconductor-lpeadj

   |downloads_bioconductor-lpeadj| |docker_bioconductor-lpeadj|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-lpe: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-lpeadj

   and update with::

      mamba update bioconductor-lpeadj

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lpeadj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpeadj:<tag>

   (see `bioconductor-lpeadj/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpeadj| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpeadj.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpeadj
   :alt:   (downloads)
.. |docker_bioconductor-lpeadj| image:: https://quay.io/repository/biocontainers/bioconductor-lpeadj/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpeadj
.. _`bioconductor-lpeadj/tags`: https://quay.io/repository/biocontainers/bioconductor-lpeadj?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpeadj";
        var versions = ["1.62.0","1.60.0","1.58.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html