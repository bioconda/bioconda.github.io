:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapsembler2'
.. highlight: bash

mapsembler2
===========

.. conda:recipe:: mapsembler2
   :replaces_section_title:
   :noindex:

   Targeted assembly software

   :homepage: https://colibread.inria.fr/software/mapsembler2/
   :license: GNU Affero General Public License
   :recipe: /`mapsembler2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2/meta.yaml>`_

   


.. conda:package:: mapsembler2

   |downloads_mapsembler2| |docker_mapsembler2|

   :versions:
      
      

      ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapsembler2

   and update with::

      conda update mapsembler2

   or use the docker container::

      docker pull quay.io/biocontainers/mapsembler2:<tag>

   (see `mapsembler2/tags`_ for valid values for ``<tag>``)


.. |downloads_mapsembler2| image:: https://img.shields.io/conda/dn/bioconda/mapsembler2.svg?style=flat
   :target: https://anaconda.org/bioconda/mapsembler2
   :alt:   (downloads)
.. |docker_mapsembler2| image:: https://quay.io/repository/biocontainers/mapsembler2/status
   :target: https://quay.io/repository/biocontainers/mapsembler2
.. _`mapsembler2/tags`: https://quay.io/repository/biocontainers/mapsembler2?tab=tags


.. raw:: html

    <script>
        var package = "mapsembler2";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsembler2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsembler2/README.html