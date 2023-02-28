:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illuminate'
.. highlight: bash

illuminate
==========

.. conda:recipe:: illuminate
   :replaces_section_title:
   :noindex:

   Analytics toolkit for Illumina sequencer metrics.

   :homepage: https://bitbucket.org/invitae/illuminate
   :license: MIT / MIT
   :recipe: /`illuminate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate/meta.yaml>`_
   :links: biotools: :biotools:`illuminate`

   


.. conda:package:: illuminate

   |downloads_illuminate| |docker_illuminate|

   :versions:
      
      

      ``0.6.3-0``

      

   
   :depends bitstring: ``>=3.1.0``
   :depends docopt: 
   :depends numpy: ``>=1.6.2``
   :depends openpyxl: ``==1.8.6``
   :depends pandas: ``>=0.14``
   :depends python: ``2.7*``
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install illuminate

   and update with::

      conda update illuminate

   or use the docker container::

      docker pull quay.io/biocontainers/illuminate:<tag>

   (see `illuminate/tags`_ for valid values for ``<tag>``)


.. |downloads_illuminate| image:: https://img.shields.io/conda/dn/bioconda/illuminate.svg?style=flat
   :target: https://anaconda.org/bioconda/illuminate
   :alt:   (downloads)
.. |docker_illuminate| image:: https://quay.io/repository/biocontainers/illuminate/status
   :target: https://quay.io/repository/biocontainers/illuminate
.. _`illuminate/tags`: https://quay.io/repository/biocontainers/illuminate?tab=tags


.. raw:: html

    <script>
        var package = "illuminate";
        var versions = ["0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illuminate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illuminate/README.html