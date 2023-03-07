:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-server-worker'
.. highlight: bash

varfish-server-worker
=====================

.. conda:recipe:: varfish-server-worker
   :replaces_section_title:
   :noindex:

   Rust\-based tool for the heavy lifting in varfish\-server.


   :homepage: https://github.com/bihealth/varfish-server-worker
   :license: MIT
   :recipe: /`varfish-server-worker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker/meta.yaml>`_

   


.. conda:package:: varfish-server-worker

   |downloads_varfish-server-worker| |docker_varfish-server-worker|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varfish-server-worker

   and update with::

      conda update varfish-server-worker

   or use the docker container::

      docker pull quay.io/biocontainers/varfish-server-worker:<tag>

   (see `varfish-server-worker/tags`_ for valid values for ``<tag>``)


.. |downloads_varfish-server-worker| image:: https://img.shields.io/conda/dn/bioconda/varfish-server-worker.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-server-worker
   :alt:   (downloads)
.. |docker_varfish-server-worker| image:: https://quay.io/repository/biocontainers/varfish-server-worker/status
   :target: https://quay.io/repository/biocontainers/varfish-server-worker
.. _`varfish-server-worker/tags`: https://quay.io/repository/biocontainers/varfish-server-worker?tab=tags


.. raw:: html

    <script>
        var package = "varfish-server-worker";
        var versions = ["0.5.0","0.4.0","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-server-worker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-server-worker/README.html