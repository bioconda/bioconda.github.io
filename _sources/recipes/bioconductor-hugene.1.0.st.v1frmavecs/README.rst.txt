:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hugene.1.0.st.v1frmavecs'
.. highlight: bash

bioconductor-hugene.1.0.st.v1frmavecs
=====================================

.. conda:recipe:: bioconductor-hugene.1.0.st.v1frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type hugene.1.0.st.v1frmavecs

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hugene.1.0.st.v1frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hugene.1.0.st.v1frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene.1.0.st.v1frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene.1.0.st.v1frmavecs/meta.yaml>`_

   This package was created by frmaTools version 1.13.0.


.. conda:package:: bioconductor-hugene.1.0.st.v1frmavecs

   |downloads_bioconductor-hugene.1.0.st.v1frmavecs| |docker_bioconductor-hugene.1.0.st.v1frmavecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-11</code>,  <code>1.1.0-10</code>,  <code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  <code>1.1.0-3</code>,  </span></summary>
      

      ``1.1.0-11``,  ``1.1.0-10``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hugene.1.0.st.v1frmavecs

   and update with::

      mamba update bioconductor-hugene.1.0.st.v1frmavecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hugene.1.0.st.v1frmavecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hugene.1.0.st.v1frmavecs:<tag>

   (see `bioconductor-hugene.1.0.st.v1frmavecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hugene.1.0.st.v1frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hugene.1.0.st.v1frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hugene.1.0.st.v1frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-hugene.1.0.st.v1frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-hugene.1.0.st.v1frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hugene.1.0.st.v1frmavecs
.. _`bioconductor-hugene.1.0.st.v1frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-hugene.1.0.st.v1frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hugene.1.0.st.v1frmavecs";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hugene.1.0.st.v1frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hugene.1.0.st.v1frmavecs/README.html