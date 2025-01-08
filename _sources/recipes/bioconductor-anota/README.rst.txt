:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anota'
.. highlight: bash

bioconductor-anota
==================

.. conda:recipe:: bioconductor-anota
   :replaces_section_title:
   :noindex:

   ANalysis Of Translational Activity \(ANOTA\).

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/anota.html
   :license: GPL-3
   :recipe: /`bioconductor-anota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota/meta.yaml>`_
   :links: biotools: :biotools:`anota`, doi: :doi:`10.1093/bioinformatics/btr146`

   Genome wide studies of translational control is emerging as a tool to study verious biological conditions. The output from such analysis is both the mRNA level \(e.g. cytosolic mRNA level\) and the levl of mRNA actively involved in translation \(the actively translating mRNA level\) for each mRNA. The standard analysis of such data strives towards identifying differential translational between two or more sample classes \- i.e. differences in actively translated mRNA levels that are independent of underlying differences in cytosolic mRNA levels. This package allows for such analysis using partial variances and the random variance model. As 10s of thousands of mRNAs are analyzed in parallell the library performs a number of tests to assure that the data set is suitable for such analysis.


.. conda:package:: bioconductor-anota

   |downloads_bioconductor-anota| |docker_bioconductor-anota|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-anota

   and update with::

      mamba update bioconductor-anota

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anota

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anota:<tag>

   (see `bioconductor-anota/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anota| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anota.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anota
   :alt:   (downloads)
.. |docker_bioconductor-anota| image:: https://quay.io/repository/biocontainers/bioconductor-anota/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anota
.. _`bioconductor-anota/tags`: https://quay.io/repository/biocontainers/bioconductor-anota?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anota";
        var versions = ["1.54.0","1.50.0","1.48.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anota/README.html