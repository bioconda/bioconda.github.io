:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cage'
.. highlight: bash

cage
====

.. conda:recipe:: cage
   :replaces_section_title:
   :noindex:

   Changepoint Analysis for Efficient Variant Calling

   :homepage: https://github.com/adambloniarz/CAGe
   :license: Apache v2
   :recipe: /`cage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage/meta.yaml>`_

   


.. conda:package:: cage

   |downloads_cage| |docker_cage|

   :versions:
      
      

      ``2016.05.13-5``,  ``2016.05.13-4``,  ``2016.05.13-3``,  ``2016.05.13-2``,  ``2016.05.13-1``,  ``2016.05.13-0``,  ``2016.01.24-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python: 
   :depends sqlite: ``>=3.37.0,<4.0a0``
   :depends tclap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cage

   and update with::

      conda update cage

   or use the docker container::

      docker pull quay.io/biocontainers/cage:<tag>

   (see `cage/tags`_ for valid values for ``<tag>``)


.. |downloads_cage| image:: https://img.shields.io/conda/dn/bioconda/cage.svg?style=flat
   :target: https://anaconda.org/bioconda/cage
   :alt:   (downloads)
.. |docker_cage| image:: https://quay.io/repository/biocontainers/cage/status
   :target: https://quay.io/repository/biocontainers/cage
.. _`cage/tags`: https://quay.io/repository/biocontainers/cage?tab=tags


.. raw:: html

    <script>
        var package = "cage";
        var versions = ["2016.05.13","2016.05.13","2016.05.13","2016.05.13","2016.05.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cage/README.html