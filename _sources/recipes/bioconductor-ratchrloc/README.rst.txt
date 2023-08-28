:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ratchrloc'
.. highlight: bash

bioconductor-ratchrloc
======================

.. conda:recipe:: bioconductor-ratchrloc
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for ratCHRLOC

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/ratCHRLOC.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-ratchrloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ratchrloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ratchrloc/meta.yaml>`_

   Annotation data file for ratCHRLOC assembled using data from public data repositories


.. conda:package:: bioconductor-ratchrloc

   |downloads_bioconductor-ratchrloc| |docker_bioconductor-ratchrloc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.6-11</code>,  <code>2.1.6-10</code>,  <code>2.1.6-9</code>,  <code>2.1.6-8</code>,  <code>2.1.6-7</code>,  <code>2.1.6-6</code>,  <code>2.1.6-5</code>,  <code>2.1.6-4</code>,  <code>2.1.6-3</code>,  </span></summary>
      

      ``2.1.6-11``,  ``2.1.6-10``,  ``2.1.6-9``,  ``2.1.6-8``,  ``2.1.6-7``,  ``2.1.6-6``,  ``2.1.6-5``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      
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

      mamba install bioconductor-ratchrloc

   and update with::

      mamba update bioconductor-ratchrloc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ratchrloc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ratchrloc:<tag>

   (see `bioconductor-ratchrloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ratchrloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ratchrloc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ratchrloc
   :alt:   (downloads)
.. |docker_bioconductor-ratchrloc| image:: https://quay.io/repository/biocontainers/bioconductor-ratchrloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ratchrloc
.. _`bioconductor-ratchrloc/tags`: https://quay.io/repository/biocontainers/bioconductor-ratchrloc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ratchrloc";
        var versions = ["2.1.6","2.1.6","2.1.6","2.1.6","2.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ratchrloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ratchrloc/README.html