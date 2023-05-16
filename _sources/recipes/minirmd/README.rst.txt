:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minirmd'
.. highlight: bash

minirmd
=======

.. conda:recipe:: minirmd
   :replaces_section_title:
   :noindex:

   Remove duplicate and near\-duplicate reads

   :homepage: https://github.com/yuansliu/minirmd
   :license: GPL-3.0-only
   :recipe: /`minirmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minirmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minirmd/meta.yaml>`_

   


.. conda:package:: minirmd

   |downloads_minirmd| |docker_minirmd|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minirmd

   and update with::

      conda update minirmd

   or use the docker container::

      docker pull quay.io/biocontainers/minirmd:<tag>

   (see `minirmd/tags`_ for valid values for ``<tag>``)


.. |downloads_minirmd| image:: https://img.shields.io/conda/dn/bioconda/minirmd.svg?style=flat
   :target: https://anaconda.org/bioconda/minirmd
   :alt:   (downloads)
.. |docker_minirmd| image:: https://quay.io/repository/biocontainers/minirmd/status
   :target: https://quay.io/repository/biocontainers/minirmd
.. _`minirmd/tags`: https://quay.io/repository/biocontainers/minirmd?tab=tags


.. raw:: html

    <script>
        var package = "minirmd";
        var versions = ["1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minirmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minirmd/README.html