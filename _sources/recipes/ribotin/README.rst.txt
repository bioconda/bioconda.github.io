:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotin'
.. highlight: bash

ribotin
=======

.. conda:recipe:: ribotin
   :replaces_section_title:
   :noindex:

   Ribosomal DNA assembly tool

   :homepage: https://github.com/maickrau/ribotin
   :license: MIT
   :recipe: /`ribotin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin/meta.yaml>`_

   


.. conda:package:: ribotin

   |downloads_ribotin| |docker_ribotin|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends graphaligner: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends liftoff: 
   :depends mbg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotin

   and update with::

      conda update ribotin

   or use the docker container::

      docker pull quay.io/biocontainers/ribotin:<tag>

   (see `ribotin/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotin| image:: https://img.shields.io/conda/dn/bioconda/ribotin.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotin
   :alt:   (downloads)
.. |docker_ribotin| image:: https://quay.io/repository/biocontainers/ribotin/status
   :target: https://quay.io/repository/biocontainers/ribotin
.. _`ribotin/tags`: https://quay.io/repository/biocontainers/ribotin?tab=tags


.. raw:: html

    <script>
        var package = "ribotin";
        var versions = ["1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotin/README.html