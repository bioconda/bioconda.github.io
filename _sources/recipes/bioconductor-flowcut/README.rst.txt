:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcut'
.. highlight: bash

bioconductor-flowcut
====================

.. conda:recipe:: bioconductor-flowcut
   :replaces_section_title:
   :noindex:

   Automated Removal of Outlier Events and Flagging of Files Based on Time Versus Fluorescence Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowCut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcut/meta.yaml>`_

   Common techinical complications such as clogging can result in spurious events and fluorescence intensity shifting\, flowCut is designed to detect and remove technical artifacts from your data by removing segments that show statistical differences from other segments.


.. conda:package:: bioconductor-flowcut

   |downloads_bioconductor-flowcut| |docker_bioconductor-flowcut|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowdensity: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cairo: 
   :depends r-e1071: 
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

      mamba install bioconductor-flowcut

   and update with::

      mamba update bioconductor-flowcut

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowcut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcut:<tag>

   (see `bioconductor-flowcut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcut
   :alt:   (downloads)
.. |docker_bioconductor-flowcut| image:: https://quay.io/repository/biocontainers/bioconductor-flowcut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcut
.. _`bioconductor-flowcut/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcut";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcut/README.html