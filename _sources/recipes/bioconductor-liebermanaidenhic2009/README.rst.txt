:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-liebermanaidenhic2009'
.. highlight: bash

bioconductor-liebermanaidenhic2009
==================================

.. conda:recipe:: bioconductor-liebermanaidenhic2009
   :replaces_section_title:
   :noindex:

   Selected data from the HiC paper of E. Lieberman\-Aiden et al. in Science \(2009\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/LiebermanAidenHiC2009.html
   :license: LGPL
   :recipe: /`bioconductor-liebermanaidenhic2009 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liebermanaidenhic2009>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liebermanaidenhic2009/meta.yaml>`_

   This package provides data that were presented in the article \"Comprehensive mapping of long\-range interactions reveals folding principles of the human genome\"\, Science 2009 Oct 9\;326\(5950\)\:289\-93. PMID\: 19815776


.. conda:package:: bioconductor-liebermanaidenhic2009

   |downloads_bioconductor-liebermanaidenhic2009| |docker_bioconductor-liebermanaidenhic2009|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  </span></summary>
      

      ``0.44.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-liebermanaidenhic2009

   and update with::

      mamba update bioconductor-liebermanaidenhic2009

  To create a new environment, run::

      mamba create --name myenvname bioconductor-liebermanaidenhic2009

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-liebermanaidenhic2009:<tag>

   (see `bioconductor-liebermanaidenhic2009/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-liebermanaidenhic2009| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-liebermanaidenhic2009.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-liebermanaidenhic2009
   :alt:   (downloads)
.. |docker_bioconductor-liebermanaidenhic2009| image:: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009/status
   :target: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009
.. _`bioconductor-liebermanaidenhic2009/tags`: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-liebermanaidenhic2009";
        var versions = ["0.44.0","0.40.0","0.38.0","0.35.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-liebermanaidenhic2009/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-liebermanaidenhic2009/README.html