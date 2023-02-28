:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbmunge'
.. highlight: bash

gbmunge
=======

.. conda:recipe:: gbmunge
   :replaces_section_title:
   :noindex:

   Munge GenBank files into FASTA and tab\-separated metadata.

   :homepage: https://github.com/sdwfrost/gbmunge
   :license: MIT / MIT
   :recipe: /`gbmunge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbmunge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbmunge/meta.yaml>`_

   


.. conda:package:: gbmunge

   |downloads_gbmunge| |docker_gbmunge|

   :versions:
      
      

      ``2018.07.06-4``,  ``2018.07.06-3``,  ``2018.07.06-2``,  ``2018.07.06-1``,  ``2018.07.06-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gbmunge

   and update with::

      conda update gbmunge

   or use the docker container::

      docker pull quay.io/biocontainers/gbmunge:<tag>

   (see `gbmunge/tags`_ for valid values for ``<tag>``)


.. |downloads_gbmunge| image:: https://img.shields.io/conda/dn/bioconda/gbmunge.svg?style=flat
   :target: https://anaconda.org/bioconda/gbmunge
   :alt:   (downloads)
.. |docker_gbmunge| image:: https://quay.io/repository/biocontainers/gbmunge/status
   :target: https://quay.io/repository/biocontainers/gbmunge
.. _`gbmunge/tags`: https://quay.io/repository/biocontainers/gbmunge?tab=tags


.. raw:: html

    <script>
        var package = "gbmunge";
        var versions = ["2018.07.06","2018.07.06","2018.07.06","2018.07.06","2018.07.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbmunge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbmunge/README.html