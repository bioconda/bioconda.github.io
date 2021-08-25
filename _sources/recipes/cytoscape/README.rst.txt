:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytoscape'
.. highlight: bash

cytoscape
=========

.. conda:recipe:: cytoscape
   :replaces_section_title:
   :noindex:

   Cytoscape\: an open source platform for network analysis and visualization.

   :homepage: https://cytoscape.org
   :developer docs: https://github.com/cytoscape/cytoscape
   :license: GPL / LGPL
   :recipe: /`cytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape/meta.yaml>`_
   :links: biotools: :biotools:`cytoscape`, doi: :doi:`10.1101/gr.1239303`

   


.. conda:package:: cytoscape

   |downloads_cytoscape| |docker_cytoscape|

   :versions:
      
      

      ``3.8.2-0``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``

      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: ``>=2.13.1,<3.0a0``
   :depends freetype: ``>=2.10.4,<3.0a0``
   :depends openjdk: ``>=11``
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cytoscape

   and update with::

      conda update cytoscape

   or use the docker container::

      docker pull quay.io/biocontainers/cytoscape:<tag>

   (see `cytoscape/tags`_ for valid values for ``<tag>``)


.. |downloads_cytoscape| image:: https://img.shields.io/conda/dn/bioconda/cytoscape.svg?style=flat
   :target: https://anaconda.org/bioconda/cytoscape
   :alt:   (downloads)
.. |docker_cytoscape| image:: https://quay.io/repository/biocontainers/cytoscape/status
   :target: https://quay.io/repository/biocontainers/cytoscape
.. _`cytoscape/tags`: https://quay.io/repository/biocontainers/cytoscape?tab=tags


.. raw:: html

    <script>
        var package = "cytoscape";
        var versions = ["3.8.2","3.7.2","3.7.2","3.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytoscape/README.html