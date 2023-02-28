:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cadd-scripts'
.. highlight: bash

cadd-scripts
============

.. conda:recipe:: cadd-scripts
   :replaces_section_title:
   :noindex:

   CADD scripts release for offline scoring

   :homepage: https://github.com/kircherlab/CADD-scripts
   :license: Restricted. Free for non-commercial users.
   :recipe: /`cadd-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cadd-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cadd-scripts/meta.yaml>`_

   This package contains the CADD\-scripts.  Please note that the \"CADD.sh\"
   script is available as \"cadd.sh\" while the \"install.sh\" script is
   available as \"cadd\-install.sh\".

   The \"Prerequisite\" steps from the CADD\-scripts repository README can
   be skipped as you already have conda installed with the proper channels
   if you can install this package and this package depends on the proper
   Snakemake version.



.. conda:package:: cadd-scripts

   |downloads_cadd-scripts| |docker_cadd-scripts|

   :versions:
      
      

      ``1.6-1``,  ``1.6-0``

      

   
   :depends snakemake: ``>=4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cadd-scripts

   and update with::

      conda update cadd-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/cadd-scripts:<tag>

   (see `cadd-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_cadd-scripts| image:: https://img.shields.io/conda/dn/bioconda/cadd-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/cadd-scripts
   :alt:   (downloads)
.. |docker_cadd-scripts| image:: https://quay.io/repository/biocontainers/cadd-scripts/status
   :target: https://quay.io/repository/biocontainers/cadd-scripts
.. _`cadd-scripts/tags`: https://quay.io/repository/biocontainers/cadd-scripts?tab=tags


.. raw:: html

    <script>
        var package = "cadd-scripts";
        var versions = ["1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cadd-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cadd-scripts/README.html