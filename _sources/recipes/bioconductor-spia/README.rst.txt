:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spia'
.. highlight: bash

bioconductor-spia
=================

.. conda:recipe:: bioconductor-spia
   :replaces_section_title:
   :noindex:

   Signaling Pathway Impact Analysis \(SPIA\) using combined evidence of pathway over\-representation and unusual signaling perturbations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SPIA.html
   :license: file LICENSE
   :recipe: /`bioconductor-spia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia/meta.yaml>`_
   :links: biotools: :biotools:`spia`, doi: :doi:`10.1093/bioinformatics/btn577`

   This package implements the Signaling Pathway Impact Analysis \(SPIA\) which uses the information form a list of differentially expressed genes and their log fold changes together with signaling pathways topology\, in order to identify the pathways most relevant to the condition under the study.


.. conda:package:: bioconductor-spia

   |downloads_bioconductor-spia| |docker_bioconductor-spia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  </span></summary>
      

      ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0``
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

      mamba install bioconductor-spia

   and update with::

      mamba update bioconductor-spia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spia:<tag>

   (see `bioconductor-spia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spia
   :alt:   (downloads)
.. |docker_bioconductor-spia| image:: https://quay.io/repository/biocontainers/bioconductor-spia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spia
.. _`bioconductor-spia/tags`: https://quay.io/repository/biocontainers/bioconductor-spia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spia";
        var versions = ["2.54.0","2.52.0","2.50.0","2.46.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spia/README.html