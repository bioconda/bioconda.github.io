:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scitrack'
.. highlight: bash

scitrack
========

.. conda:recipe:: scitrack
   :replaces_section_title:
   :noindex:

   SciTrack provides basic logging capabilities to track scientific computations.

   :homepage: https://github.com/HuttleyLab/scitrack
   :license: BSD-3-Clause
   :recipe: /`scitrack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scitrack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scitrack/meta.yaml>`_

   


.. conda:package:: scitrack

   |downloads_scitrack| |docker_scitrack|

   :versions:
      
      

      ``2021.5.3-0``

      

   
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scitrack

   and update with::

      conda update scitrack

   or use the docker container::

      docker pull quay.io/biocontainers/scitrack:<tag>

   (see `scitrack/tags`_ for valid values for ``<tag>``)


.. |downloads_scitrack| image:: https://img.shields.io/conda/dn/bioconda/scitrack.svg?style=flat
   :target: https://anaconda.org/bioconda/scitrack
   :alt:   (downloads)
.. |docker_scitrack| image:: https://quay.io/repository/biocontainers/scitrack/status
   :target: https://quay.io/repository/biocontainers/scitrack
.. _`scitrack/tags`: https://quay.io/repository/biocontainers/scitrack?tab=tags


.. raw:: html

    <script>
        var package = "scitrack";
        var versions = ["2021.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scitrack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scitrack/README.html