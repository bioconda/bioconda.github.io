:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrdpdata'
.. highlight: bash

bioconductor-rrdpdata
=====================

.. conda:recipe:: bioconductor-rrdpdata
   :replaces_section_title:
   :noindex:

   Database for the Default RDP Classifier

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/rRDPData.html
   :license: GPL-2
   :recipe: /`bioconductor-rrdpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata/meta.yaml>`_

   Database used by the default RDP Classifier


.. conda:package:: bioconductor-rrdpdata

   |downloads_bioconductor-rrdpdata| |docker_bioconductor-rrdpdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-rrdp: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends openjdk: 
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

      mamba install bioconductor-rrdpdata

   and update with::

      mamba update bioconductor-rrdpdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rrdpdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrdpdata:<tag>

   (see `bioconductor-rrdpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrdpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrdpdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrdpdata
   :alt:   (downloads)
.. |docker_bioconductor-rrdpdata| image:: https://quay.io/repository/biocontainers/bioconductor-rrdpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrdpdata
.. _`bioconductor-rrdpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rrdpdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rrdpdata";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html