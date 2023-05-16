:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidk'
.. highlight: bash

tidk
====

.. conda:recipe:: tidk
   :replaces_section_title:
   :noindex:

   Identify and find telomeres\, or telomeric repeats in a genome.

   :homepage: https://github.com/tolkit/telomeric-identifier
   :license: MIT
   :recipe: /`tidk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk/meta.yaml>`_

   


.. conda:package:: tidk

   |downloads_tidk| |docker_tidk|

   :versions:
      
      

      ``0.2.31-2``,  ``0.2.31-1``,  ``0.2.31-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tidk

   and update with::

      conda update tidk

   or use the docker container::

      docker pull quay.io/biocontainers/tidk:<tag>

   (see `tidk/tags`_ for valid values for ``<tag>``)


.. |downloads_tidk| image:: https://img.shields.io/conda/dn/bioconda/tidk.svg?style=flat
   :target: https://anaconda.org/bioconda/tidk
   :alt:   (downloads)
.. |docker_tidk| image:: https://quay.io/repository/biocontainers/tidk/status
   :target: https://quay.io/repository/biocontainers/tidk
.. _`tidk/tags`: https://quay.io/repository/biocontainers/tidk?tab=tags


.. raw:: html

    <script>
        var package = "tidk";
        var versions = ["0.2.31","0.2.31","0.2.31","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidk/README.html