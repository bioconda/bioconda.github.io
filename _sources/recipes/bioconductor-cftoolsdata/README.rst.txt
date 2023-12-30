:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cftoolsdata'
.. highlight: bash

bioconductor-cftoolsdata
========================

.. conda:recipe:: bioconductor-cftoolsdata
   :replaces_section_title:
   :noindex:

   ExperimentHub data for the cfTools package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/cfToolsData.html
   :license: file LICENSE
   :recipe: /`bioconductor-cftoolsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cftoolsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cftoolsdata/meta.yaml>`_

   The cfToolsData package supplies the data for the cfTools package. It contains two pre\-trained deep neural network \(DNN\) models for the cfSort function. Additionally\, it includes the shape parameters of beta distribution characterizing methylation markers associated with four tumor types for the CancerDetector function\, as well as the parameters characterizing methylation markers specific to 29 primary human tissue types for the cfDeconvolve function.


.. conda:package:: bioconductor-cftoolsdata

   |downloads_bioconductor-cftoolsdata| |docker_bioconductor-cftoolsdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
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

      mamba install bioconductor-cftoolsdata

   and update with::

      mamba update bioconductor-cftoolsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cftoolsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cftoolsdata:<tag>

   (see `bioconductor-cftoolsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cftoolsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cftoolsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cftoolsdata
   :alt:   (downloads)
.. |docker_bioconductor-cftoolsdata| image:: https://quay.io/repository/biocontainers/bioconductor-cftoolsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cftoolsdata
.. _`bioconductor-cftoolsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-cftoolsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cftoolsdata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cftoolsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cftoolsdata/README.html