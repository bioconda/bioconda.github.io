:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-sharepoint'
.. highlight: bash

snakemake-storage-plugin-sharepoint
===================================

.. conda:recipe:: snakemake-storage-plugin-sharepoint
   :replaces_section_title:
   :noindex:

   Snakemake storage plugin for reading and writing files on Microsoft SharePoint.

   :homepage: https://github.com/Hugovdberg/snakemake-storage-plugin-sharepoint
   :license: MIT
   :recipe: /`snakemake-storage-plugin-sharepoint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-sharepoint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-sharepoint/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-sharepoint

   |downloads_snakemake-storage-plugin-sharepoint| |docker_snakemake-storage-plugin-sharepoint|

   :versions:
      
      

      ``0.4.4-0``

      

   
   :depends python: ``>=3.11``
   :depends requests: 
   :depends snakemake-interface-common: ``>=1.14``
   :depends snakemake-interface-storage-plugins: ``>=3.0``
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

      mamba install snakemake-storage-plugin-sharepoint

   and update with::

      mamba update snakemake-storage-plugin-sharepoint

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-sharepoint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-sharepoint:<tag>

   (see `snakemake-storage-plugin-sharepoint/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-sharepoint| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-sharepoint.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-sharepoint
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-sharepoint| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sharepoint/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sharepoint
.. _`snakemake-storage-plugin-sharepoint/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sharepoint?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-sharepoint";
        var versions = ["0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-sharepoint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-sharepoint/README.html