:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromograph'
.. highlight: bash

chromograph
===========

.. conda:recipe:: chromograph
   :replaces_section_title:
   :noindex:

   Chromograph is a python package to create PNG images from genetics data such as BED and WIG files.

   :homepage: https://github.com/Clinical-Genomics/chromograph
   :license: MIT
   :recipe: /`chromograph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromograph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromograph/meta.yaml>`_

   


.. conda:package:: chromograph

   |downloads_chromograph| |docker_chromograph|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.15``
   :depends pandas: 
   :depends pyaml: 
   :depends python: ``>=3.7,<3.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromograph

   and update with::

      conda update chromograph

   or use the docker container::

      docker pull quay.io/biocontainers/chromograph:<tag>

   (see `chromograph/tags`_ for valid values for ``<tag>``)


.. |downloads_chromograph| image:: https://img.shields.io/conda/dn/bioconda/chromograph.svg?style=flat
   :target: https://anaconda.org/bioconda/chromograph
   :alt:   (downloads)
.. |docker_chromograph| image:: https://quay.io/repository/biocontainers/chromograph/status
   :target: https://quay.io/repository/biocontainers/chromograph
.. _`chromograph/tags`: https://quay.io/repository/biocontainers/chromograph?tab=tags


.. raw:: html

    <script>
        var package = "chromograph";
        var versions = ["1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromograph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromograph/README.html