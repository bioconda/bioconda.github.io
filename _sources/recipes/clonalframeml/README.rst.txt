:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clonalframeml'
.. highlight: bash

clonalframeml
=============

.. conda:recipe:: clonalframeml
   :replaces_section_title:
   :noindex:

   Efficient inferencing of recombination in bacterial genomes

   :homepage: https://github.com/xavierdidelot/ClonalFrameML
   :license: GPLv3
   :recipe: /`clonalframeml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml/meta.yaml>`_

   


.. conda:package:: clonalframeml

   |downloads_clonalframeml| |docker_clonalframeml|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``,  ``1.11-3``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clonalframeml

   and update with::

      conda update clonalframeml

   or use the docker container::

      docker pull quay.io/biocontainers/clonalframeml:<tag>

   (see `clonalframeml/tags`_ for valid values for ``<tag>``)


.. |downloads_clonalframeml| image:: https://img.shields.io/conda/dn/bioconda/clonalframeml.svg?style=flat
   :target: https://anaconda.org/bioconda/clonalframeml
   :alt:   (downloads)
.. |docker_clonalframeml| image:: https://quay.io/repository/biocontainers/clonalframeml/status
   :target: https://quay.io/repository/biocontainers/clonalframeml
.. _`clonalframeml/tags`: https://quay.io/repository/biocontainers/clonalframeml?tab=tags


.. raw:: html

    <script>
        var package = "clonalframeml";
        var versions = ["1.12","1.12","1.11","1.11","1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clonalframeml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clonalframeml/README.html