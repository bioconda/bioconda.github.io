:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-italicsdata'
.. highlight: bash

bioconductor-italicsdata
========================

.. conda:recipe:: bioconductor-italicsdata
   :replaces_section_title:
   :noindex:

   ITALICSData

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ITALICSData.html
   :license: GPL
   :recipe: /`bioconductor-italicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata/meta.yaml>`_

   Data needed to use the ITALICS package


.. conda:package:: bioconductor-italicsdata

   |downloads_bioconductor-italicsdata| |docker_bioconductor-italicsdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.27.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-italicsdata

   and update with::

      mamba update bioconductor-italicsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-italicsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-italicsdata:<tag>

   (see `bioconductor-italicsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-italicsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italicsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-italicsdata
   :alt:   (downloads)
.. |docker_bioconductor-italicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-italicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italicsdata
.. _`bioconductor-italicsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-italicsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-italicsdata";
        var versions = ["2.40.0","2.38.0","2.36.0","2.32.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html