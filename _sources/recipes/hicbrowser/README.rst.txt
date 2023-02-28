:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicbrowser'
.. highlight: bash

hicbrowser
==========

.. conda:recipe:: hicbrowser
   :replaces_section_title:
   :noindex:

   A simple web browser to visualize Hi\-C and other genomic tracks \(bigwig\, bed\, interactions\).

   :homepage: https://github.com/maxplanck-ie/HiCBrowser
   :license: GPL3
   :recipe: /`hicbrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicbrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicbrowser/meta.yaml>`_

   


.. conda:package:: hicbrowser

   |downloads_hicbrowser| |docker_hicbrowser|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends bx-python: 
   :depends flask: ``>=0.10.1``
   :depends hicexplorer: ``>=1.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicbrowser

   and update with::

      conda update hicbrowser

   or use the docker container::

      docker pull quay.io/biocontainers/hicbrowser:<tag>

   (see `hicbrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_hicbrowser| image:: https://img.shields.io/conda/dn/bioconda/hicbrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/hicbrowser
   :alt:   (downloads)
.. |docker_hicbrowser| image:: https://quay.io/repository/biocontainers/hicbrowser/status
   :target: https://quay.io/repository/biocontainers/hicbrowser
.. _`hicbrowser/tags`: https://quay.io/repository/biocontainers/hicbrowser?tab=tags


.. raw:: html

    <script>
        var package = "hicbrowser";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicbrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicbrowser/README.html