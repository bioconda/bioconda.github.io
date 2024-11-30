:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apcomplex'
.. highlight: bash

bioconductor-apcomplex
======================

.. conda:recipe:: bioconductor-apcomplex
   :replaces_section_title:
   :noindex:

   Estimate protein complex membership using AP\-MS protein data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/apComplex.html
   :license: LGPL
   :recipe: /`bioconductor-apcomplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex/meta.yaml>`_
   :links: biotools: :biotools:`apcomplex`, doi: :doi:`10.1093/bioinformatics/bti567`

   Functions to estimate a bipartite graph of protein complex membership using AP\-MS data.


.. conda:package:: bioconductor-apcomplex

   |downloads_bioconductor-apcomplex| |docker_bioconductor-apcomplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68.0-0</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  </span></summary>
      

      ``2.68.0-0``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-org.sc.sgd.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-apcomplex

   and update with::

      mamba update bioconductor-apcomplex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-apcomplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apcomplex:<tag>

   (see `bioconductor-apcomplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apcomplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apcomplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apcomplex
   :alt:   (downloads)
.. |docker_bioconductor-apcomplex| image:: https://quay.io/repository/biocontainers/bioconductor-apcomplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apcomplex
.. _`bioconductor-apcomplex/tags`: https://quay.io/repository/biocontainers/bioconductor-apcomplex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apcomplex";
        var versions = ["2.68.0","2.66.0","2.64.0","2.60.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html