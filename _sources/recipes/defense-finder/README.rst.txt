:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'defense-finder'
.. highlight: bash

defense-finder
==============

.. conda:recipe:: defense-finder
   :replaces_section_title:
   :noindex:

   Defense Finder\: allow for a systematic search of all known anti\-phage systems.

   :homepage: https://github.com/mdmparis/defense-finder
   :license: GPL-3.0
   :recipe: /`defense-finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defense-finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defense-finder/meta.yaml>`_

   


.. conda:package:: defense-finder

   |downloads_defense-finder| |docker_defense-finder|

   :versions:
      
      

      ``1.0.9-0``

      

   
   :depends click: ``>=8.0.3``
   :depends colorlog: ``>=6.3.0a1``
   :depends macsyfinder: ``>=2``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install defense-finder

   and update with::

      conda update defense-finder

   or use the docker container::

      docker pull quay.io/biocontainers/defense-finder:<tag>

   (see `defense-finder/tags`_ for valid values for ``<tag>``)


.. |downloads_defense-finder| image:: https://img.shields.io/conda/dn/bioconda/defense-finder.svg?style=flat
   :target: https://anaconda.org/bioconda/defense-finder
   :alt:   (downloads)
.. |docker_defense-finder| image:: https://quay.io/repository/biocontainers/defense-finder/status
   :target: https://quay.io/repository/biocontainers/defense-finder
.. _`defense-finder/tags`: https://quay.io/repository/biocontainers/defense-finder?tab=tags


.. raw:: html

    <script>
        var package = "defense-finder";
        var versions = ["1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/defense-finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/defense-finder/README.html