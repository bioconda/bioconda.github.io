:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancervdx'
.. highlight: bash

bioconductor-breastcancervdx
============================

.. conda:recipe:: bioconductor-breastcancervdx
   :replaces_section_title:
   :noindex:

   Gene expression datasets published by Wang et al. \[2005\] and Minn et al. \[2007\] \(VDX\).

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/breastCancerVDX.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancervdx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancervdx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancervdx/meta.yaml>`_

   Gene expression data from a breast cancer study published by Wang et al. in 2005 and Minn et al. in 2007\, provided as an eSet.


.. conda:package:: bioconductor-breastcancervdx

   |downloads_bioconductor-breastcancervdx| |docker_bioconductor-breastcancervdx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-3</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-3``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-breastcancervdx

   and update with::

      mamba update bioconductor-breastcancervdx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-breastcancervdx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancervdx:<tag>

   (see `bioconductor-breastcancervdx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancervdx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancervdx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breastcancervdx
   :alt:   (downloads)
.. |docker_bioconductor-breastcancervdx| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx
.. _`bioconductor-breastcancervdx/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breastcancervdx";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancervdx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancervdx/README.html