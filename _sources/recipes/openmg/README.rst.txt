:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openmg'
.. highlight: bash

openmg
======

.. conda:recipe:: openmg
   :replaces_section_title:
   :noindex:

   Exhaustive generation of chemical structures

   :homepage: https://sourceforge.net/projects/openmg
   :license: GNU General Public License
   :recipe: /`openmg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_openmg`

   


.. conda:package:: openmg

   |downloads_openmg| |docker_openmg|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=6,<=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openmg

   and update with::

      conda update openmg

   or use the docker container::

      docker pull quay.io/biocontainers/openmg:<tag>

   (see `openmg/tags`_ for valid values for ``<tag>``)


.. |downloads_openmg| image:: https://img.shields.io/conda/dn/bioconda/openmg.svg?style=flat
   :target: https://anaconda.org/bioconda/openmg
   :alt:   (downloads)
.. |docker_openmg| image:: https://quay.io/repository/biocontainers/openmg/status
   :target: https://quay.io/repository/biocontainers/openmg
.. _`openmg/tags`: https://quay.io/repository/biocontainers/openmg?tab=tags


.. raw:: html

    <script>
        var package = "openmg";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openmg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openmg/README.html