:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minipolish'
.. highlight: bash

minipolish
==========

.. conda:recipe:: minipolish
   :replaces_section_title:
   :noindex:

   A tool for Racon polishing of miniasm assemblies

   :homepage: https://github.com/rrwick/Minipolish
   :license: GPLv3
   :recipe: /`minipolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish/meta.yaml>`_

   


.. conda:package:: minipolish

   |downloads_minipolish| |docker_minipolish|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends minimap2: 
   :depends python: ``>=3``
   :depends python-edlib: 
   :depends racon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minipolish

   and update with::

      conda update minipolish

   or use the docker container::

      docker pull quay.io/biocontainers/minipolish:<tag>

   (see `minipolish/tags`_ for valid values for ``<tag>``)


.. |downloads_minipolish| image:: https://img.shields.io/conda/dn/bioconda/minipolish.svg?style=flat
   :target: https://anaconda.org/bioconda/minipolish
   :alt:   (downloads)
.. |docker_minipolish| image:: https://quay.io/repository/biocontainers/minipolish/status
   :target: https://quay.io/repository/biocontainers/minipolish
.. _`minipolish/tags`: https://quay.io/repository/biocontainers/minipolish?tab=tags


.. raw:: html

    <script>
        var package = "minipolish";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minipolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minipolish/README.html