:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasnek'
.. highlight: bash

metasnek
========

.. conda:recipe:: metasnek
   :replaces_section_title:
   :noindex:

   Misc functions for metagenomics pipelines

   :homepage: https://github.com/beardymcjohnface/metasnek
   :license: MIT
   :recipe: /`metasnek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnek/meta.yaml>`_

   


.. conda:package:: metasnek

   |downloads_metasnek| |docker_metasnek|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metasnek

   and update with::

      conda update metasnek

   or use the docker container::

      docker pull quay.io/biocontainers/metasnek:<tag>

   (see `metasnek/tags`_ for valid values for ``<tag>``)


.. |downloads_metasnek| image:: https://img.shields.io/conda/dn/bioconda/metasnek.svg?style=flat
   :target: https://anaconda.org/bioconda/metasnek
   :alt:   (downloads)
.. |docker_metasnek| image:: https://quay.io/repository/biocontainers/metasnek/status
   :target: https://quay.io/repository/biocontainers/metasnek
.. _`metasnek/tags`: https://quay.io/repository/biocontainers/metasnek?tab=tags


.. raw:: html

    <script>
        var package = "metasnek";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnek/README.html