:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapad'
.. highlight: bash

mapad
=====

.. conda:recipe:: mapad
   :replaces_section_title:
   :noindex:

   An aDNA aware short\-read mapper

   :homepage: https://github.com/mpieva/mapAD
   :license: MIT
   :recipe: /`mapad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad/meta.yaml>`_

   


.. conda:package:: mapad

   |downloads_mapad| |docker_mapad|

   :versions:
      
      

      ``0.41.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapad

   and update with::

      conda update mapad

   or use the docker container::

      docker pull quay.io/biocontainers/mapad:<tag>

   (see `mapad/tags`_ for valid values for ``<tag>``)


.. |downloads_mapad| image:: https://img.shields.io/conda/dn/bioconda/mapad.svg?style=flat
   :target: https://anaconda.org/bioconda/mapad
   :alt:   (downloads)
.. |docker_mapad| image:: https://quay.io/repository/biocontainers/mapad/status
   :target: https://quay.io/repository/biocontainers/mapad
.. _`mapad/tags`: https://quay.io/repository/biocontainers/mapad?tab=tags


.. raw:: html

    <script>
        var package = "mapad";
        var versions = ["0.41.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapad/README.html