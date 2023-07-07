:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcx'
.. highlight: bash

bioconductor-rcx
================

.. conda:recipe:: bioconductor-rcx
   :replaces_section_title:
   :noindex:

   R package implementing the Cytoscape Exchange \(CX\) format

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RCX.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcx/meta.yaml>`_

   Create\, handle\, validate\, visualize and convert networks in the Cytoscape exchange \(CX\) format to standard data types and objects. The package also provides conversion to and from objects of iGraph and graphNEL. The CX format is also used by the NDEx platform\, a online commons for biological networks\, and the network visualization software Cytocape.


.. conda:package:: bioconductor-rcx

   |downloads_bioconductor-rcx| |docker_bioconductor-rcx|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcx

   and update with::

      conda update bioconductor-rcx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcx:<tag>

   (see `bioconductor-rcx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcx
   :alt:   (downloads)
.. |docker_bioconductor-rcx| image:: https://quay.io/repository/biocontainers/bioconductor-rcx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcx
.. _`bioconductor-rcx/tags`: https://quay.io/repository/biocontainers/bioconductor-rcx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcx";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcx/README.html