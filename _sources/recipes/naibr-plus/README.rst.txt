:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naibr-plus'
.. highlight: bash

naibr-plus
==========

.. conda:recipe:: naibr-plus
   :replaces_section_title:
   :noindex:

   Identify novel adjacencies created by structural variations using linked\-read data

   :homepage: https://github.com/pontushojer/NAIBR
   :license: MIT
   :recipe: /`naibr-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naibr-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naibr-plus/meta.yaml>`_

   


.. conda:package:: naibr-plus

   |downloads_naibr-plus| |docker_naibr-plus|

   :versions:
      
      

      ``0.5-0``

      

   
   :depends matplotlib-base: 
   :depends mpmath: 
   :depends numpy: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3.7``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install naibr-plus

   and update with::

      conda update naibr-plus

   or use the docker container::

      docker pull quay.io/biocontainers/naibr-plus:<tag>

   (see `naibr-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_naibr-plus| image:: https://img.shields.io/conda/dn/bioconda/naibr-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/naibr-plus
   :alt:   (downloads)
.. |docker_naibr-plus| image:: https://quay.io/repository/biocontainers/naibr-plus/status
   :target: https://quay.io/repository/biocontainers/naibr-plus
.. _`naibr-plus/tags`: https://quay.io/repository/biocontainers/naibr-plus?tab=tags


.. raw:: html

    <script>
        var package = "naibr-plus";
        var versions = ["0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naibr-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naibr-plus/README.html