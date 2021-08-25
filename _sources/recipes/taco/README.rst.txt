:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taco'
.. highlight: bash

taco
====

.. conda:recipe:: taco
   :replaces_section_title:
   :noindex:

   A tool for multi\-sample transcriptome assembly from RNA\-Seq

   :homepage: https://github.com/tacorna/taco
   :license: MIT / MIT
   :recipe: /`taco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco/meta.yaml>`_

   


.. conda:package:: taco

   |downloads_taco| |docker_taco|

   :versions:
      
      

      ``0.7.3-2``,  ``0.7.3-0``,  ``v0.7.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends pyinstaller: 
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taco

   and update with::

      conda update taco

   or use the docker container::

      docker pull quay.io/biocontainers/taco:<tag>

   (see `taco/tags`_ for valid values for ``<tag>``)


.. |downloads_taco| image:: https://img.shields.io/conda/dn/bioconda/taco.svg?style=flat
   :target: https://anaconda.org/bioconda/taco
   :alt:   (downloads)
.. |docker_taco| image:: https://quay.io/repository/biocontainers/taco/status
   :target: https://quay.io/repository/biocontainers/taco
.. _`taco/tags`: https://quay.io/repository/biocontainers/taco?tab=tags


.. raw:: html

    <script>
        var package = "taco";
        var versions = ["0.7.3","0.7.3","v0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taco/README.html