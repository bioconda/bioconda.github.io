:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fourdndata'
.. highlight: bash

bioconductor-fourdndata
=======================

.. conda:recipe:: bioconductor-fourdndata
   :replaces_section_title:
   :noindex:

   4DN data package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/fourDNData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fourdndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourdndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourdndata/meta.yaml>`_

   fourDNData is a data package giving programmatic access to Hi\-C contact matrices uniformly processed by the \[4DN consortium\]\(https\:\/\/www.4dnucleome.org\/\). The matrices are available in the multi\-resolution \`.mcool\` format.


.. conda:package:: bioconductor-fourdndata

   |downloads_bioconductor-fourdndata| |docker_bioconductor-fourdndata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hicexperiment: ``>=1.2.0,<1.3.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-fourdndata

   and update with::

      mamba update bioconductor-fourdndata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fourdndata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fourdndata:<tag>

   (see `bioconductor-fourdndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fourdndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fourdndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fourdndata
   :alt:   (downloads)
.. |docker_bioconductor-fourdndata| image:: https://quay.io/repository/biocontainers/bioconductor-fourdndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fourdndata
.. _`bioconductor-fourdndata/tags`: https://quay.io/repository/biocontainers/bioconductor-fourdndata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fourdndata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fourdndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fourdndata/README.html