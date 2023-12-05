:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbmirbase'
.. highlight: bash

bioconductor-biodbmirbase
=========================

.. conda:recipe:: bioconductor-biodbmirbase
   :replaces_section_title:
   :noindex:

   biodbMirbase\, a library for connecting to miRBase mature database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biodbMirbase.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbmirbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbmirbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbmirbase/meta.yaml>`_

   The biodbMirbase library is an extension of the biodb framework package\, that provides access to miRBase mature database. It allows to retrieve entries by their accession number\, and run specific web services. Description\: The biodbMirbase library provides access to the miRBase Database\, using biodb package framework.


.. conda:package:: bioconductor-biodbmirbase

   |downloads_bioconductor-biodbmirbase| |docker_bioconductor-biodbmirbase|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chk: 
   :depends r-r6: 
   :depends r-stringr: 
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

      mamba install bioconductor-biodbmirbase

   and update with::

      mamba update bioconductor-biodbmirbase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodbmirbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbmirbase:<tag>

   (see `bioconductor-biodbmirbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbmirbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbmirbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbmirbase
   :alt:   (downloads)
.. |docker_bioconductor-biodbmirbase| image:: https://quay.io/repository/biocontainers/bioconductor-biodbmirbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbmirbase
.. _`bioconductor-biodbmirbase/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbmirbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbmirbase";
        var versions = ["1.5.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbmirbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbmirbase/README.html