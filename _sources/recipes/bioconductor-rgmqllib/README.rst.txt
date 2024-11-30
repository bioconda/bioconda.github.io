:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgmqllib'
.. highlight: bash

bioconductor-rgmqllib
=====================

.. conda:recipe:: bioconductor-rgmqllib
   :replaces_section_title:
   :noindex:

   RGMQLlib\, java libraries to run GMQL scala API

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/RGMQLlib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgmqllib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmqllib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmqllib/meta.yaml>`_

   A package that contains scala libraries to call GMQL from R used by RGMQL package. It contains a scalable data management engine written in Scala programming language.


.. conda:package:: bioconductor-rgmqllib

   |downloads_bioconductor-rgmqllib| |docker_bioconductor-rgmqllib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rgmqllib

   and update with::

      mamba update bioconductor-rgmqllib

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgmqllib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgmqllib:<tag>

   (see `bioconductor-rgmqllib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgmqllib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgmqllib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgmqllib
   :alt:   (downloads)
.. |docker_bioconductor-rgmqllib| image:: https://quay.io/repository/biocontainers/bioconductor-rgmqllib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgmqllib
.. _`bioconductor-rgmqllib/tags`: https://quay.io/repository/biocontainers/bioconductor-rgmqllib?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgmqllib";
        var versions = ["1.22.0","1.20.0","1.18.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgmqllib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgmqllib/README.html