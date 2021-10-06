:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'examine'
.. highlight: bash

examine
=======

.. conda:recipe:: examine
   :replaces_section_title:
   :noindex:

   A graphical application to visually analyze network modules.

   :homepage: https://github.com/AlBi-HHU/eXamine-stand-alone
   :license: GPL / GPL-2.0
   :recipe: /`examine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/examine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/examine/meta.yaml>`_

   


.. conda:package:: examine

   |downloads_examine| |docker_examine|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install examine

   and update with::

      conda update examine

   or use the docker container::

      docker pull quay.io/biocontainers/examine:<tag>

   (see `examine/tags`_ for valid values for ``<tag>``)


.. |downloads_examine| image:: https://img.shields.io/conda/dn/bioconda/examine.svg?style=flat
   :target: https://anaconda.org/bioconda/examine
   :alt:   (downloads)
.. |docker_examine| image:: https://quay.io/repository/biocontainers/examine/status
   :target: https://quay.io/repository/biocontainers/examine
.. _`examine/tags`: https://quay.io/repository/biocontainers/examine?tab=tags


.. raw:: html

    <script>
        var package = "examine";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/examine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/examine/README.html