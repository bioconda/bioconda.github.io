:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dxua'
.. highlight: bash

dxua
====

.. conda:recipe:: dxua
   :replaces_section_title:
   :noindex:

   command\-line tool for uploading files to the DNAnexus Platform

   :homepage: https://documentation.dnanexus.com/user/objects/uploading-and-downloading-files/batch/upload-agent
   :license: Apache / Apache 2.0
   :recipe: /`dxua <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua/meta.yaml>`_

   


.. conda:package:: dxua

   |downloads_dxua| |docker_dxua|

   :versions:
      
      

      ``1.5.31-0``,  ``1.5.26-1``,  ``1.5.26-0``,  ``1.5.11-0``

      

   
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

      mamba install dxua

   and update with::

      mamba update dxua

  To create a new environment, run::

      mamba create --name myenvname dxua

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dxua:<tag>

   (see `dxua/tags`_ for valid values for ``<tag>``)


.. |downloads_dxua| image:: https://img.shields.io/conda/dn/bioconda/dxua.svg?style=flat
   :target: https://anaconda.org/bioconda/dxua
   :alt:   (downloads)
.. |docker_dxua| image:: https://quay.io/repository/biocontainers/dxua/status
   :target: https://quay.io/repository/biocontainers/dxua
.. _`dxua/tags`: https://quay.io/repository/biocontainers/dxua?tab=tags


.. raw:: html

    <script>
        var package = "dxua";
        var versions = ["1.5.31","1.5.26","1.5.26","1.5.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxua/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxua/README.html