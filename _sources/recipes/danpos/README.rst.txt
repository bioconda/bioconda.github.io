:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'danpos'
.. highlight: bash

danpos
======

.. conda:recipe:: danpos
   :replaces_section_title:
   :noindex:

   A toolkit for Dynamic Analysis of Nucleosome and Protein Occupancy by Sequencing\, version 2

   :homepage: https://sites.google.com/site/danposdoc/
   :license: Unknown
   :recipe: /`danpos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/danpos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/danpos/meta.yaml>`_

   


.. conda:package:: danpos

   |downloads_danpos| |docker_danpos|

   :versions:
      
      

      ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends icu: 
   :depends numpy: 
   :depends python: ``<3``
   :depends r-base: 
   :depends rpy2: 
   :depends samtools: ``<1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install danpos

   and update with::

      conda update danpos

   or use the docker container::

      docker pull quay.io/biocontainers/danpos:<tag>

   (see `danpos/tags`_ for valid values for ``<tag>``)


.. |downloads_danpos| image:: https://img.shields.io/conda/dn/bioconda/danpos.svg?style=flat
   :target: https://anaconda.org/bioconda/danpos
   :alt:   (downloads)
.. |docker_danpos| image:: https://quay.io/repository/biocontainers/danpos/status
   :target: https://quay.io/repository/biocontainers/danpos
.. _`danpos/tags`: https://quay.io/repository/biocontainers/danpos?tab=tags


.. raw:: html

    <script>
        var package = "danpos";
        var versions = ["2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/danpos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/danpos/README.html