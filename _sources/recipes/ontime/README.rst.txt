:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ontime'
.. highlight: bash

ontime
======

.. conda:recipe:: ontime
   :replaces_section_title:
   :noindex:

   Extract subsets of ONT \(Nanopore\) reads based on time

   :homepage: https://github.com/mbhall88/ontime
   :license: MIT
   :recipe: /`ontime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ontime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ontime/meta.yaml>`_

   


.. conda:package:: ontime

   |downloads_ontime| |docker_ontime|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ontime

   and update with::

      conda update ontime

   or use the docker container::

      docker pull quay.io/biocontainers/ontime:<tag>

   (see `ontime/tags`_ for valid values for ``<tag>``)


.. |downloads_ontime| image:: https://img.shields.io/conda/dn/bioconda/ontime.svg?style=flat
   :target: https://anaconda.org/bioconda/ontime
   :alt:   (downloads)
.. |docker_ontime| image:: https://quay.io/repository/biocontainers/ontime/status
   :target: https://quay.io/repository/biocontainers/ontime
.. _`ontime/tags`: https://quay.io/repository/biocontainers/ontime?tab=tags


.. raw:: html

    <script>
        var package = "ontime";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ontime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ontime/README.html