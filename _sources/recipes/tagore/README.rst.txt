:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagore'
.. highlight: bash

tagore
======

.. conda:recipe:: tagore
   :replaces_section_title:
   :noindex:

   A simple way to visualize features on human chromosome ideograms

   :homepage: https://github.com/jordanlab/tagore
   :license: GPL / GPLv3
   :recipe: /`tagore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagore/meta.yaml>`_

   


.. conda:package:: tagore

   |downloads_tagore| |docker_tagore|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends click: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tagore

   and update with::

      conda update tagore

   or use the docker container::

      docker pull quay.io/biocontainers/tagore:<tag>

   (see `tagore/tags`_ for valid values for ``<tag>``)


.. |downloads_tagore| image:: https://img.shields.io/conda/dn/bioconda/tagore.svg?style=flat
   :target: https://anaconda.org/bioconda/tagore
   :alt:   (downloads)
.. |docker_tagore| image:: https://quay.io/repository/biocontainers/tagore/status
   :target: https://quay.io/repository/biocontainers/tagore
.. _`tagore/tags`: https://quay.io/repository/biocontainers/tagore?tab=tags


.. raw:: html

    <script>
        var package = "tagore";
        var versions = ["1.1.0","1.0.2","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagore/README.html