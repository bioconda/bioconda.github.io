:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmid'
.. highlight: bash

salmid
======

.. conda:recipe:: salmid
   :replaces_section_title:
   :noindex:

   Rapid tool to check taxonomic ID of single isolate samples. Currently only IDs Salmonella species and subspecies\, and some common contaminants \(Listeria\, Escherichia\).

   :homepage: https://github.com/hcdenbakker/SalmID
   :license: MIT
   :recipe: /`salmid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.1409766`

   


.. conda:package:: salmid

   |downloads_salmid| |docker_salmid|

   :versions:
      
      

      ``0.1.23-0``

      

   
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install salmid

   and update with::

      conda update salmid

   or use the docker container::

      docker pull quay.io/biocontainers/salmid:<tag>

   (see `salmid/tags`_ for valid values for ``<tag>``)


.. |downloads_salmid| image:: https://img.shields.io/conda/dn/bioconda/salmid.svg?style=flat
   :target: https://anaconda.org/bioconda/salmid
   :alt:   (downloads)
.. |docker_salmid| image:: https://quay.io/repository/biocontainers/salmid/status
   :target: https://quay.io/repository/biocontainers/salmid
.. _`salmid/tags`: https://quay.io/repository/biocontainers/salmid?tab=tags


.. raw:: html

    <script>
        var package = "salmid";
        var versions = ["0.1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmid/README.html