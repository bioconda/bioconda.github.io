:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hsa'
.. highlight: bash

bioconductor-rmir.hsa
=====================

.. conda:recipe:: bioconductor-rmir.hsa
   :replaces_section_title:
   :noindex:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/RmiR.hsa.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa/meta.yaml>`_

   Various databases of microRNA Targets


.. conda:package:: bioconductor-rmir.hsa

   |downloads_bioconductor-rmir.hsa| |docker_bioconductor-rmir.hsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-13</code>,  <code>1.0.5-12</code>,  <code>1.0.5-11</code>,  <code>1.0.5-10</code>,  <code>1.0.5-9</code>,  <code>1.0.5-8</code>,  <code>1.0.5-7</code>,  <code>1.0.5-6</code>,  <code>1.0.5-5</code>,  </span></summary>
      

      ``1.0.5-13``,  ``1.0.5-12``,  ``1.0.5-11``,  ``1.0.5-10``,  ``1.0.5-9``,  ``1.0.5-8``,  ``1.0.5-7``,  ``1.0.5-6``,  ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
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

      mamba install bioconductor-rmir.hsa

   and update with::

      mamba update bioconductor-rmir.hsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rmir.hsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmir.hsa:<tag>

   (see `bioconductor-rmir.hsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmir.hsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir.hsa
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hsa| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa
.. _`bioconductor-rmir.hsa/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmir.hsa";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html