:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ie-helpers'
.. highlight: bash

galaxy-ie-helpers
=================

.. conda:recipe:: galaxy-ie-helpers
   :replaces_section_title:
   :noindex:

   Helper scripts to work with Galaxy\'s Interactive Environments

   :homepage: https://github.com/bgruening/galaxy_ie_helpers
   :license: MIT / MIT
   :recipe: /`galaxy-ie-helpers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ie-helpers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ie-helpers/meta.yaml>`_

   


.. conda:package:: galaxy-ie-helpers

   |downloads_galaxy-ie-helpers| |docker_galaxy-ie-helpers|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioblend: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-ie-helpers

   and update with::

      conda update galaxy-ie-helpers

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-ie-helpers:<tag>

   (see `galaxy-ie-helpers/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-ie-helpers| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ie-helpers.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ie-helpers
   :alt:   (downloads)
.. |docker_galaxy-ie-helpers| image:: https://quay.io/repository/biocontainers/galaxy-ie-helpers/status
   :target: https://quay.io/repository/biocontainers/galaxy-ie-helpers
.. _`galaxy-ie-helpers/tags`: https://quay.io/repository/biocontainers/galaxy-ie-helpers?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-ie-helpers";
        var versions = ["0.2.5","0.2.5","0.2.4","0.2.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ie-helpers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ie-helpers/README.html