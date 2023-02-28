:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'involucro'
.. highlight: bash

involucro
=========

.. conda:recipe:: involucro
   :replaces_section_title:
   :noindex:

   Build and Deliver Software with Containers

   :homepage: https://github.com/involucro/involucro
   :license: Apache-2.0
   :recipe: /`involucro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/involucro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/involucro/meta.yaml>`_

   


.. conda:package:: involucro

   |downloads_involucro| |docker_involucro|

   :versions:
      
      

      ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install involucro

   and update with::

      conda update involucro

   or use the docker container::

      docker pull quay.io/biocontainers/involucro:<tag>

   (see `involucro/tags`_ for valid values for ``<tag>``)


.. |downloads_involucro| image:: https://img.shields.io/conda/dn/bioconda/involucro.svg?style=flat
   :target: https://anaconda.org/bioconda/involucro
   :alt:   (downloads)
.. |docker_involucro| image:: https://quay.io/repository/biocontainers/involucro/status
   :target: https://quay.io/repository/biocontainers/involucro
.. _`involucro/tags`: https://quay.io/repository/biocontainers/involucro?tab=tags


.. raw:: html

    <script>
        var package = "involucro";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/involucro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/involucro/README.html