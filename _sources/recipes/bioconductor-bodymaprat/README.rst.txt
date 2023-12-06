:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bodymaprat'
.. highlight: bash

bioconductor-bodymaprat
=======================

.. conda:recipe:: bioconductor-bodymaprat
   :replaces_section_title:
   :noindex:

   Experimental dataset from the rat BodyMap project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/bodymapRat.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-bodymaprat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bodymaprat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bodymaprat/meta.yaml>`_

   This package contains a SummarizedExperiment from the Yu et al. \(2013\) paper that performed the rat BodyMap across 11 organs and 4 developmental stages. Raw FASTQ files were downloaded and mapped using STAR. Data is available on ExperimentHub as a data package.


.. conda:package:: bioconductor-bodymaprat

   |downloads_bioconductor-bodymaprat| |docker_bioconductor-bodymaprat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
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

      mamba install bioconductor-bodymaprat

   and update with::

      mamba update bioconductor-bodymaprat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bodymaprat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bodymaprat:<tag>

   (see `bioconductor-bodymaprat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bodymaprat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bodymaprat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bodymaprat
   :alt:   (downloads)
.. |docker_bioconductor-bodymaprat| image:: https://quay.io/repository/biocontainers/bioconductor-bodymaprat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bodymaprat
.. _`bioconductor-bodymaprat/tags`: https://quay.io/repository/biocontainers/bioconductor-bodymaprat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bodymaprat";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bodymaprat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bodymaprat/README.html