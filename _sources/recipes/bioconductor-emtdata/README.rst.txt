:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-emtdata'
.. highlight: bash

bioconductor-emtdata
====================

.. conda:recipe:: bioconductor-emtdata
   :replaces_section_title:
   :noindex:

   An ExperimentHub Package for data sets with an Epithelial to Mesenchymal Transition \(EMT\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/emtdata.html
   :license: GPL-3
   :recipe: /`bioconductor-emtdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emtdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emtdata/meta.yaml>`_

   This package provides pre\-processed RNA\-seq data where the epithelial to mesenchymal transition was induced on cell lines. These data come from three publications Cursons et al. \(2015\)\, Cursons etl al. \(2018\) and Foroutan et al. \(2017\). In each of these publications\, EMT was induces across multiple cell lines following treatment by TGFb among other stimulants. This data will be useful in determining the regulatory programs modified in order to achieve an EMT. Data were processed by the Davis laboratory in the Bioinformatics division at WEHI.


.. conda:package:: bioconductor-emtdata

   |downloads_bioconductor-emtdata| |docker_bioconductor-emtdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
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

      mamba install bioconductor-emtdata

   and update with::

      mamba update bioconductor-emtdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-emtdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-emtdata:<tag>

   (see `bioconductor-emtdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-emtdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emtdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-emtdata
   :alt:   (downloads)
.. |docker_bioconductor-emtdata| image:: https://quay.io/repository/biocontainers/bioconductor-emtdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emtdata
.. _`bioconductor-emtdata/tags`: https://quay.io/repository/biocontainers/bioconductor-emtdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-emtdata";
        var versions = ["1.8.0","1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emtdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emtdata/README.html