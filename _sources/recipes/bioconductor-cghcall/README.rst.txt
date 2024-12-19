:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghcall'
.. highlight: bash

bioconductor-cghcall
====================

.. conda:recipe:: bioconductor-cghcall
   :replaces_section_title:
   :noindex:

   Calling aberrations for array CGH tumor profiles.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CGHcall.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall/meta.yaml>`_
   :links: biotools: :biotools:`cghcall`, doi: :doi:`10.1093/bioinformatics/btm030`

   Calls aberrations for array CGH data using a six state mixture model as well as several biological concepts that are ignored by existing algorithms. Visualization of profiles is also provided.


.. conda:package:: bioconductor-cghcall

   |downloads_bioconductor-cghcall| |docker_bioconductor-cghcall|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68.0-0</code>,  <code>2.64.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  </span></summary>
      

      ``2.68.0-0``,  ``2.64.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.34.1-0``,  ``2.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-cghbase: ``>=1.66.0,<1.67.0``
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-snowfall: 
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

      mamba install bioconductor-cghcall

   and update with::

      mamba update bioconductor-cghcall

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cghcall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghcall:<tag>

   (see `bioconductor-cghcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghcall
   :alt:   (downloads)
.. |docker_bioconductor-cghcall| image:: https://quay.io/repository/biocontainers/bioconductor-cghcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghcall
.. _`bioconductor-cghcall/tags`: https://quay.io/repository/biocontainers/bioconductor-cghcall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghcall";
        var versions = ["2.68.0","2.64.0","2.62.0","2.60.0","2.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghcall/README.html