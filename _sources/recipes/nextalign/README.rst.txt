:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextalign'
.. highlight: bash

nextalign
=========

.. conda:recipe:: nextalign
   :replaces_section_title:
   :noindex:

   Viral genome clade assignment\, mutation calling\, and sequence quality checks

   :homepage: https://github.com/nextstrain/nextclade/tree/master/packages/nextalign_cli
   :documentation: https://github.com/nextstrain/nextclade
   
   :developer docs: https://github.com/nextstrain/nextclade
   :license: MIT / MIT
   :recipe: /`nextalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextalign/meta.yaml>`_

   


.. conda:package:: nextalign

   |downloads_nextalign| |docker_nextalign|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextalign

   and update with::

      conda update nextalign

   or use the docker container::

      docker pull quay.io/biocontainers/nextalign:<tag>

   (see `nextalign/tags`_ for valid values for ``<tag>``)


.. |downloads_nextalign| image:: https://img.shields.io/conda/dn/bioconda/nextalign.svg?style=flat
   :target: https://anaconda.org/bioconda/nextalign
   :alt:   (downloads)
.. |docker_nextalign| image:: https://quay.io/repository/biocontainers/nextalign/status
   :target: https://quay.io/repository/biocontainers/nextalign
.. _`nextalign/tags`: https://quay.io/repository/biocontainers/nextalign?tab=tags


.. raw:: html

    <script>
        var package = "nextalign";
        var versions = ["1.2.3","1.2.1","1.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextalign/README.html