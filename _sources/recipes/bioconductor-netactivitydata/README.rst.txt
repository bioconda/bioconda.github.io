:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netactivitydata'
.. highlight: bash

bioconductor-netactivitydata
============================

.. conda:recipe:: bioconductor-netactivitydata
   :replaces_section_title:
   :noindex:

   Data required for getting the gene set scores with NetActivity package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/NetActivityData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netactivitydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivitydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivitydata/meta.yaml>`_

   This package contains the weights from pre\-trained shallow sparsely\-connected autoencoders. This data is required for getting the gene set scores with NetActivity package.


.. conda:package:: bioconductor-netactivitydata

   |downloads_bioconductor-netactivitydata| |docker_bioconductor-netactivitydata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``,  ``0.99.8-0``

      

   
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

      mamba install bioconductor-netactivitydata

   and update with::

      mamba update bioconductor-netactivitydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netactivitydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netactivitydata:<tag>

   (see `bioconductor-netactivitydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netactivitydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netactivitydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netactivitydata
   :alt:   (downloads)
.. |docker_bioconductor-netactivitydata| image:: https://quay.io/repository/biocontainers/bioconductor-netactivitydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netactivitydata
.. _`bioconductor-netactivitydata/tags`: https://quay.io/repository/biocontainers/bioconductor-netactivitydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netactivitydata";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","0.99.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netactivitydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netactivitydata/README.html