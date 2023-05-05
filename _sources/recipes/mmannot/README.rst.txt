:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmannot'
.. highlight: bash

mmannot
=======

.. conda:recipe:: mmannot
   :replaces_section_title:
   :noindex:

   mmannot annotates reads\, or quantifies the features.  mmmannot takes special care of multi\-mapping reads.

   :homepage: https://github.com/mzytnicki/mmannot
   :license: GPL3/LGPL3
   :recipe: /`mmannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmannot/meta.yaml>`_

   


.. conda:package:: mmannot

   |downloads_mmannot| |docker_mmannot|

   :versions:
      
      

      ``1.1-0``,  ``1.0.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmannot

   and update with::

      conda update mmannot

   or use the docker container::

      docker pull quay.io/biocontainers/mmannot:<tag>

   (see `mmannot/tags`_ for valid values for ``<tag>``)


.. |downloads_mmannot| image:: https://img.shields.io/conda/dn/bioconda/mmannot.svg?style=flat
   :target: https://anaconda.org/bioconda/mmannot
   :alt:   (downloads)
.. |docker_mmannot| image:: https://quay.io/repository/biocontainers/mmannot/status
   :target: https://quay.io/repository/biocontainers/mmannot
.. _`mmannot/tags`: https://quay.io/repository/biocontainers/mmannot?tab=tags


.. raw:: html

    <script>
        var package = "mmannot";
        var versions = ["1.1","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmannot/README.html