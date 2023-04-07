:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'runjob'
.. highlight: bash

runjob
======

.. conda:recipe:: runjob
   :replaces_section_title:
   :noindex:

   Manage jobs or pipeline of bioinfomation.

   :homepage: https://github.com/yodeng/runjob
   :license: MIT
   :recipe: /`runjob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob/meta.yaml>`_

   Runjob is a program for managing a group of related bioinformatic jobs or pipelines running on a compute cluster.


.. conda:package:: runjob

   |downloads_runjob| |docker_runjob|

   :versions:
      
      

      ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``

      

   
   :depends configparser: ``>=5.0.2``
   :depends pip: 
   :depends prettytable: ``>=3.2.0``
   :depends psutil: ``>=5.7.0``
   :depends python: ``>=2.7.10,<3.11``
   :depends ratelimiter: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install runjob

   and update with::

      conda update runjob

   or use the docker container::

      docker pull quay.io/biocontainers/runjob:<tag>

   (see `runjob/tags`_ for valid values for ``<tag>``)


.. |downloads_runjob| image:: https://img.shields.io/conda/dn/bioconda/runjob.svg?style=flat
   :target: https://anaconda.org/bioconda/runjob
   :alt:   (downloads)
.. |docker_runjob| image:: https://quay.io/repository/biocontainers/runjob/status
   :target: https://quay.io/repository/biocontainers/runjob
.. _`runjob/tags`: https://quay.io/repository/biocontainers/runjob?tab=tags


.. raw:: html

    <script>
        var package = "runjob";
        var versions = ["2.10.4","2.10.3","2.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/runjob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/runjob/README.html