:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calcs'
.. highlight: bash

calcs
=====

.. conda:recipe:: calcs
   :replaces_section_title:
   :noindex:

   Append minimap2\'s CS tag to a SAM file.

   :homepage: https://github.com/akikuno/calcs
   :license: MIT / MIT
   :recipe: /`calcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calcs/meta.yaml>`_

   


.. conda:package:: calcs

   |downloads_calcs| |docker_calcs|

   :versions:
      
      

      ``0.0.0.9999-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install calcs

   and update with::

      conda update calcs

   or use the docker container::

      docker pull quay.io/biocontainers/calcs:<tag>

   (see `calcs/tags`_ for valid values for ``<tag>``)


.. |downloads_calcs| image:: https://img.shields.io/conda/dn/bioconda/calcs.svg?style=flat
   :target: https://anaconda.org/bioconda/calcs
   :alt:   (downloads)
.. |docker_calcs| image:: https://quay.io/repository/biocontainers/calcs/status
   :target: https://quay.io/repository/biocontainers/calcs
.. _`calcs/tags`: https://quay.io/repository/biocontainers/calcs?tab=tags


.. raw:: html

    <script>
        var package = "calcs";
        var versions = ["0.0.0.9999"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calcs/README.html