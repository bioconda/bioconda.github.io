:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.pancan12'
.. highlight: bash

bioconductor-rtcga.pancan12
===========================

.. conda:recipe:: bioconductor-rtcga.pancan12
   :replaces_section_title:
   :noindex:

   PanCan 12 from Genome Cancer Browser

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/RTCGA.PANCAN12.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.pancan12 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.pancan12>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.pancan12/meta.yaml>`_

   Package provides clinical\, expression\, cnv and mutation data from Genome Cancer Browser.


.. conda:package:: bioconductor-rtcga.pancan12

   |downloads_bioconductor-rtcga.pancan12| |docker_bioconductor-rtcga.pancan12|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-rtcga: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-rtcga.pancan12

   and update with::

      mamba update bioconductor-rtcga.pancan12

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtcga.pancan12

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.pancan12:<tag>

   (see `bioconductor-rtcga.pancan12/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.pancan12| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.pancan12.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.pancan12
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.pancan12| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12
.. _`bioconductor-rtcga.pancan12/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.pancan12";
        var versions = ["1.30.0","1.28.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.pancan12/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.pancan12/README.html