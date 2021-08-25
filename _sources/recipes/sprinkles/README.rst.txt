:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sprinkles'
.. highlight: bash

sprinkles
=========

.. conda:recipe:: sprinkles
   :replaces_section_title:
   :noindex:

   Plugins\! Easy\!

   :homepage: http://an9.org/w/SprinklesPy
   :license: MIT License
   :recipe: /`sprinkles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles/meta.yaml>`_

   


.. conda:package:: sprinkles

   |downloads_sprinkles| |docker_sprinkles|

   :versions:
      
      

      ``0.4.6-1``,  ``0.4.6-0``

      

   
   :depends python: ``2.7*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sprinkles

   and update with::

      conda update sprinkles

   or use the docker container::

      docker pull quay.io/biocontainers/sprinkles:<tag>

   (see `sprinkles/tags`_ for valid values for ``<tag>``)


.. |downloads_sprinkles| image:: https://img.shields.io/conda/dn/bioconda/sprinkles.svg?style=flat
   :target: https://anaconda.org/bioconda/sprinkles
   :alt:   (downloads)
.. |docker_sprinkles| image:: https://quay.io/repository/biocontainers/sprinkles/status
   :target: https://quay.io/repository/biocontainers/sprinkles
.. _`sprinkles/tags`: https://quay.io/repository/biocontainers/sprinkles?tab=tags


.. raw:: html

    <script>
        var package = "sprinkles";
        var versions = ["0.4.6","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sprinkles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sprinkles/README.html