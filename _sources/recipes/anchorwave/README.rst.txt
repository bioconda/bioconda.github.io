:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anchorwave'
.. highlight: bash

anchorwave
==========

.. conda:recipe:: anchorwave
   :replaces_section_title:
   :noindex:

   Sensitive alignment of genomes with high sequence diversity\, extensive structural polymorphism\, and whole\-genome duplication variation

   :homepage: https://github.com/baoxingsong/AnchorWave
   :license: MIT
   :recipe: /`anchorwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anchorwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anchorwave/meta.yaml>`_

   


.. conda:package:: anchorwave

   |downloads_anchorwave| |docker_anchorwave|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends gmap: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends minimap2: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anchorwave

   and update with::

      conda update anchorwave

   or use the docker container::

      docker pull quay.io/biocontainers/anchorwave:<tag>

   (see `anchorwave/tags`_ for valid values for ``<tag>``)


.. |downloads_anchorwave| image:: https://img.shields.io/conda/dn/bioconda/anchorwave.svg?style=flat
   :target: https://anaconda.org/bioconda/anchorwave
   :alt:   (downloads)
.. |docker_anchorwave| image:: https://quay.io/repository/biocontainers/anchorwave/status
   :target: https://quay.io/repository/biocontainers/anchorwave
.. _`anchorwave/tags`: https://quay.io/repository/biocontainers/anchorwave?tab=tags


.. raw:: html

    <script>
        var package = "anchorwave";
        var versions = ["1.2.1","1.2.0","1.1.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anchorwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anchorwave/README.html