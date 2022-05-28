:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhocall'
.. highlight: bash

rhocall
=======

.. conda:recipe:: rhocall
   :replaces_section_title:
   :noindex:

   Call regions of homozygosity and make tentative UPD calls.

   :homepage: https://github.com/dnil/rhocall
   :developer docs: https://github.com/dnil
   :license: GPL / GPLv3
   :recipe: /`rhocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall/meta.yaml>`_

   


.. conda:package:: rhocall

   |downloads_rhocall| |docker_rhocall|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rhocall

   and update with::

      conda update rhocall

   or use the docker container::

      docker pull quay.io/biocontainers/rhocall:<tag>

   (see `rhocall/tags`_ for valid values for ``<tag>``)


.. |downloads_rhocall| image:: https://img.shields.io/conda/dn/bioconda/rhocall.svg?style=flat
   :target: https://anaconda.org/bioconda/rhocall
   :alt:   (downloads)
.. |docker_rhocall| image:: https://quay.io/repository/biocontainers/rhocall/status
   :target: https://quay.io/repository/biocontainers/rhocall
.. _`rhocall/tags`: https://quay.io/repository/biocontainers/rhocall?tab=tags


.. raw:: html

    <script>
        var package = "rhocall";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhocall/README.html