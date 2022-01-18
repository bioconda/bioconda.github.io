:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crumble'
.. highlight: bash

crumble
=======

.. conda:recipe:: crumble
   :replaces_section_title:
   :noindex:

   Controllable lossy compression of BAM\/CRAM files

   :homepage: https://github.com/jkbonfield/crumble
   :license: BSD / multiple BSD style licenses
   :recipe: /`crumble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crumble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crumble/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty608`

   


.. conda:package:: crumble

   |downloads_crumble| |docker_crumble|

   :versions:
      
      

      ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``

      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crumble

   and update with::

      conda update crumble

   or use the docker container::

      docker pull quay.io/biocontainers/crumble:<tag>

   (see `crumble/tags`_ for valid values for ``<tag>``)


.. |downloads_crumble| image:: https://img.shields.io/conda/dn/bioconda/crumble.svg?style=flat
   :target: https://anaconda.org/bioconda/crumble
   :alt:   (downloads)
.. |docker_crumble| image:: https://quay.io/repository/biocontainers/crumble/status
   :target: https://quay.io/repository/biocontainers/crumble
.. _`crumble/tags`: https://quay.io/repository/biocontainers/crumble?tab=tags


.. raw:: html

    <script>
        var package = "crumble";
        var versions = ["0.8.3","0.8.3","0.8.3","0.8.3","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crumble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crumble/README.html