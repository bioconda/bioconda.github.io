:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'molpopgen-analysis'
.. highlight: bash

molpopgen-analysis
==================

.. conda:recipe:: molpopgen-analysis
   :replaces_section_title:
   :noindex:

   Deprecated and no longer maintained programs for the \(pre\-NGS\-era\) analysis of population\-genetic data. Unless you work with Sanger data\, results will be wrong. Please check the software homepage for more details.

   :homepage: https://github.com/molpopgen/analysis
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`molpopgen-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis/meta.yaml>`_

   


.. conda:package:: molpopgen-analysis

   |downloads_molpopgen-analysis| |docker_molpopgen-analysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.8-10</code>,  <code>0.8.8-9</code>,  <code>0.8.8-8</code>,  <code>0.8.8-7</code>,  <code>0.8.8-6</code>,  <code>0.8.8-5</code>,  <code>0.8.8-4</code>,  <code>0.8.8-3</code>,  <code>0.8.8-2</code>,  </span></summary>
      

      ``0.8.8-10``,  ``0.8.8-9``,  ``0.8.8-8``,  ``0.8.8-7``,  ``0.8.8-6``,  ``0.8.8-5``,  ``0.8.8-4``,  ``0.8.8-3``,  ``0.8.8-2``,  ``0.8.8-1``,  ``0.8.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libsequence: ``1.8.4.*``
   :depends libstdcxx: ``>=13``
   :depends openblas: 
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

      mamba install molpopgen-analysis

   and update with::

      mamba update molpopgen-analysis

  To create a new environment, run::

      mamba create --name myenvname molpopgen-analysis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/molpopgen-analysis:<tag>

   (see `molpopgen-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_molpopgen-analysis| image:: https://img.shields.io/conda/dn/bioconda/molpopgen-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/molpopgen-analysis
   :alt:   (downloads)
.. |docker_molpopgen-analysis| image:: https://quay.io/repository/biocontainers/molpopgen-analysis/status
   :target: https://quay.io/repository/biocontainers/molpopgen-analysis
.. _`molpopgen-analysis/tags`: https://quay.io/repository/biocontainers/molpopgen-analysis?tab=tags


.. raw:: html

    <script>
        var package = "molpopgen-analysis";
        var versions = ["0.8.8","0.8.8","0.8.8","0.8.8","0.8.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/molpopgen-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/molpopgen-analysis/README.html