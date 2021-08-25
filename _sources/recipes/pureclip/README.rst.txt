:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pureclip'
.. highlight: bash

pureclip
========

.. conda:recipe:: pureclip
   :replaces_section_title:
   :noindex:

   PureCLIP is a tool to detect protein\-RNA interaction footprints from single\-nucleotide CLIP\-seq data\, such as iCLIP and eCLIP.

   :homepage: https://github.com/skrakau/PureCLIP
   :license: GPLv3
   :recipe: /`pureclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1364-2`

   


.. conda:package:: pureclip

   |downloads_pureclip| |docker_pureclip|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bedtools: 
   :depends meme: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pureclip

   and update with::

      conda update pureclip

   or use the docker container::

      docker pull quay.io/biocontainers/pureclip:<tag>

   (see `pureclip/tags`_ for valid values for ``<tag>``)


.. |downloads_pureclip| image:: https://img.shields.io/conda/dn/bioconda/pureclip.svg?style=flat
   :target: https://anaconda.org/bioconda/pureclip
   :alt:   (downloads)
.. |docker_pureclip| image:: https://quay.io/repository/biocontainers/pureclip/status
   :target: https://quay.io/repository/biocontainers/pureclip
.. _`pureclip/tags`: https://quay.io/repository/biocontainers/pureclip?tab=tags


.. raw:: html

    <script>
        var package = "pureclip";
        var versions = ["1.3.1","1.3.0","1.2.0","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pureclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pureclip/README.html