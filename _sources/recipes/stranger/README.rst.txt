:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stranger'
.. highlight: bash

stranger
========

.. conda:recipe:: stranger
   :replaces_section_title:
   :noindex:

   Annotate VCF files with str variants

   :homepage: https://github.com/moonso/stranger
   :license: MIT / MIT
   :recipe: /`stranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger/meta.yaml>`_

   


.. conda:package:: stranger

   |downloads_stranger| |docker_stranger|

   :versions:
      
      

      ``0.8.1-0``

      

   
   :depends click: 
   :depends coloredlogs: 
   :depends python: ``>=3.6.0``
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stranger

   and update with::

      conda update stranger

   or use the docker container::

      docker pull quay.io/biocontainers/stranger:<tag>

   (see `stranger/tags`_ for valid values for ``<tag>``)


.. |downloads_stranger| image:: https://img.shields.io/conda/dn/bioconda/stranger.svg?style=flat
   :target: https://anaconda.org/bioconda/stranger
   :alt:   (downloads)
.. |docker_stranger| image:: https://quay.io/repository/biocontainers/stranger/status
   :target: https://quay.io/repository/biocontainers/stranger
.. _`stranger/tags`: https://quay.io/repository/biocontainers/stranger?tab=tags


.. raw:: html

    <script>
        var package = "stranger";
        var versions = ["0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stranger/README.html