:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cramino'
.. highlight: bash

cramino
=======

.. conda:recipe:: cramino
   :replaces_section_title:
   :noindex:

   A tool for very fast quality assessment of long read cram\/bam files.

   :homepage: https://github.com/wdecoster/cramino
   :license: MIT
   :recipe: /`cramino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino/meta.yaml>`_

   


.. conda:package:: cramino

   |downloads_cramino| |docker_cramino|

   :versions:
      
      

      ``0.9.7-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends openssl: ``>=1.1.1s,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cramino

   and update with::

      conda update cramino

   or use the docker container::

      docker pull quay.io/biocontainers/cramino:<tag>

   (see `cramino/tags`_ for valid values for ``<tag>``)


.. |downloads_cramino| image:: https://img.shields.io/conda/dn/bioconda/cramino.svg?style=flat
   :target: https://anaconda.org/bioconda/cramino
   :alt:   (downloads)
.. |docker_cramino| image:: https://quay.io/repository/biocontainers/cramino/status
   :target: https://quay.io/repository/biocontainers/cramino
.. _`cramino/tags`: https://quay.io/repository/biocontainers/cramino?tab=tags


.. raw:: html

    <script>
        var package = "cramino";
        var versions = ["0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cramino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cramino/README.html