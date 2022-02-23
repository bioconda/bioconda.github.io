:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviathan'
.. highlight: bash

leviathan
=========

.. conda:recipe:: leviathan
   :replaces_section_title:
   :noindex:

   Linked\-reads based structural variant caller with barcode indexing

   :homepage: https://github.com/morispi/LEVIATHAN
   :license: AGPL-3.0-or-later
   :recipe: /`leviathan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviathan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviathan/meta.yaml>`_

   


.. conda:package:: leviathan

   |downloads_leviathan| |docker_leviathan|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends lrez: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install leviathan

   and update with::

      conda update leviathan

   or use the docker container::

      docker pull quay.io/biocontainers/leviathan:<tag>

   (see `leviathan/tags`_ for valid values for ``<tag>``)


.. |downloads_leviathan| image:: https://img.shields.io/conda/dn/bioconda/leviathan.svg?style=flat
   :target: https://anaconda.org/bioconda/leviathan
   :alt:   (downloads)
.. |docker_leviathan| image:: https://quay.io/repository/biocontainers/leviathan/status
   :target: https://quay.io/repository/biocontainers/leviathan
.. _`leviathan/tags`: https://quay.io/repository/biocontainers/leviathan?tab=tags


.. raw:: html

    <script>
        var package = "leviathan";
        var versions = ["1.0.2","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviathan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviathan/README.html