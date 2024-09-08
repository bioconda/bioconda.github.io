:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobox_add_taxid'
.. highlight: bash

biobox_add_taxid
================

.. conda:recipe:: biobox_add_taxid
   :replaces_section_title:
   :noindex:

   CAMI amber utility script for adding the taxid output from GTDB and BAT

   :homepage: https://github.com/SantaMcCloud/biobox_add_taxid
   :license: MIT / MIT
   :recipe: /`biobox_add_taxid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobox_add_taxid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobox_add_taxid/meta.yaml>`_

   


.. conda:package:: biobox_add_taxid

   |downloads_biobox_add_taxid| |docker_biobox_add_taxid|

   :versions:
      
      

      ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``

      

   
   :depends python: 
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

      mamba install biobox_add_taxid

   and update with::

      mamba update biobox_add_taxid

  To create a new environment, run::

      mamba create --name myenvname biobox_add_taxid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobox_add_taxid:<tag>

   (see `biobox_add_taxid/tags`_ for valid values for ``<tag>``)


.. |downloads_biobox_add_taxid| image:: https://img.shields.io/conda/dn/bioconda/biobox_add_taxid.svg?style=flat
   :target: https://anaconda.org/bioconda/biobox_add_taxid
   :alt:   (downloads)
.. |docker_biobox_add_taxid| image:: https://quay.io/repository/biocontainers/biobox_add_taxid/status
   :target: https://quay.io/repository/biocontainers/biobox_add_taxid
.. _`biobox_add_taxid/tags`: https://quay.io/repository/biocontainers/biobox_add_taxid?tab=tags


.. raw:: html

    <script>
        var package = "biobox_add_taxid";
        var versions = ["0.6","0.5","0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobox_add_taxid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobox_add_taxid/README.html