:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcxndata'
.. highlight: bash

bioconductor-pcxndata
=====================

.. conda:recipe:: bioconductor-pcxndata
   :replaces_section_title:
   :noindex:

   Correlation coefficients and p values between pre\-defined pathway\/gene sets

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/pcxnData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcxndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata/meta.yaml>`_

   PCxN database contains correlation coefficients and p values between pre\-defined gene sets within MSigDB H hallmark gene sets\, MSigDB C2 CP \(Canonical pathways\)\, MSigDB C5 GO BP gene sets and Pathprint respectively\, as well as adjusted pathway correlations to account for the shared genes between pathway pairs.


.. conda:package:: bioconductor-pcxndata

   |downloads_bioconductor-pcxndata| |docker_bioconductor-pcxndata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.19.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.11.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.19.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-pcxndata

   and update with::

      mamba update bioconductor-pcxndata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcxndata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcxndata:<tag>

   (see `bioconductor-pcxndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcxndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcxndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcxndata
   :alt:   (downloads)
.. |docker_bioconductor-pcxndata| image:: https://quay.io/repository/biocontainers/bioconductor-pcxndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcxndata
.. _`bioconductor-pcxndata/tags`: https://quay.io/repository/biocontainers/bioconductor-pcxndata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcxndata";
        var versions = ["2.22.0","2.19.0","2.16.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html