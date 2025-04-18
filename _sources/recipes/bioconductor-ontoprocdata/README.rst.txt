:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ontoprocdata'
.. highlight: bash

bioconductor-ontoprocdata
=========================

.. conda:recipe:: bioconductor-ontoprocdata
   :replaces_section_title:
   :noindex:

   A data package for ontoProc

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ontoProcData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ontoprocdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoprocdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoprocdata/meta.yaml>`_

   This package manages rda files of multiple ontologies that are used in the ontoProc package. These ontologies were originally downloaded as owl or obo files and converted into Rda files. The files were downloaded at various times but most of them were downloaded on August 08 2022.


.. conda:package:: bioconductor-ontoprocdata

   |downloads_bioconductor-ontoprocdata| |docker_bioconductor-ontoprocdata|

   :versions:
      
      

      ``0.99.9901-3``,  ``0.99.9901-2``,  ``0.99.9901-1``,  ``0.99.9901-0``,  ``0.99.9-1``,  ``0.99.9-0``

      

   
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

      mamba install bioconductor-ontoprocdata

   and update with::

      mamba update bioconductor-ontoprocdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ontoprocdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ontoprocdata:<tag>

   (see `bioconductor-ontoprocdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ontoprocdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ontoprocdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ontoprocdata
   :alt:   (downloads)
.. |docker_bioconductor-ontoprocdata| image:: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata
.. _`bioconductor-ontoprocdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ontoprocdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ontoprocdata";
        var versions = ["0.99.9901","0.99.9901","0.99.9901","0.99.9901","0.99.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ontoprocdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ontoprocdata/README.html