:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgsa'
.. highlight: bash

pgsa
====

.. conda:recipe:: pgsa
   :replaces_section_title:
   :noindex:

   Pseudogenome Suffix Array is a compact index for collections of reads from sequencing.

   :homepage: http://sun.aei.polsl.pl/pgsa/
   :license: Creative Commons Attribution License
   :recipe: /`pgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa/meta.yaml>`_

   


.. conda:package:: pgsa

   |downloads_pgsa| |docker_pgsa|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pgsa

   and update with::

      conda update pgsa

   or use the docker container::

      docker pull quay.io/biocontainers/pgsa:<tag>

   (see `pgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_pgsa| image:: https://img.shields.io/conda/dn/bioconda/pgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/pgsa
   :alt:   (downloads)
.. |docker_pgsa| image:: https://quay.io/repository/biocontainers/pgsa/status
   :target: https://quay.io/repository/biocontainers/pgsa
.. _`pgsa/tags`: https://quay.io/repository/biocontainers/pgsa?tab=tags


.. raw:: html

    <script>
        var package = "pgsa";
        var versions = ["1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgsa/README.html