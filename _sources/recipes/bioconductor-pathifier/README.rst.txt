:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathifier'
.. highlight: bash

bioconductor-pathifier
======================

.. conda:recipe:: bioconductor-pathifier
   :replaces_section_title:
   :noindex:

   Quantify deregulation of pathways in cancer

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pathifier.html
   :license: Artistic-1.0
   :recipe: /`bioconductor-pathifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier/meta.yaml>`_
   :links: biotools: :biotools:`pathifier`, doi: :doi:`10.1073/pnas.1219651110`

   Pathifier is an algorithm that infers pathway deregulation scores for each tumor sample on the basis of expression data. This score is determined\, in a context\-specific manner\, for every particular dataset and type of cancer that is being investigated. The algorithm transforms gene\-level information into pathway\-level information\, generating a compact and biologically relevant representation of each sample.


.. conda:package:: bioconductor-pathifier

   |downloads_bioconductor-pathifier| |docker_bioconductor-pathifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-princurve: ``>=2.0.4``
   :depends r-r.oo: 
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

      mamba install bioconductor-pathifier

   and update with::

      mamba update bioconductor-pathifier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathifier:<tag>

   (see `bioconductor-pathifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathifier
   :alt:   (downloads)
.. |docker_bioconductor-pathifier| image:: https://quay.io/repository/biocontainers/bioconductor-pathifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathifier
.. _`bioconductor-pathifier/tags`: https://quay.io/repository/biocontainers/bioconductor-pathifier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathifier";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathifier/README.html