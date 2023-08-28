:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spqndata'
.. highlight: bash

bioconductor-spqndata
=====================

.. conda:recipe:: bioconductor-spqndata
   :replaces_section_title:
   :noindex:

   Data for the spqn package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/spqnData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spqndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqndata/meta.yaml>`_

   Bulk RNA\-seq from GTEx on 4\,000 randomly selected\, expressed genes. Data has been processed for co\-expression analysis.


.. conda:package:: bioconductor-spqndata

   |downloads_bioconductor-spqndata| |docker_bioconductor-spqndata|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-spqndata

   and update with::

      mamba update bioconductor-spqndata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spqndata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spqndata:<tag>

   (see `bioconductor-spqndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spqndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spqndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spqndata
   :alt:   (downloads)
.. |docker_bioconductor-spqndata| image:: https://quay.io/repository/biocontainers/bioconductor-spqndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spqndata
.. _`bioconductor-spqndata/tags`: https://quay.io/repository/biocontainers/bioconductor-spqndata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spqndata";
        var versions = ["1.12.0","1.10.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spqndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spqndata/README.html