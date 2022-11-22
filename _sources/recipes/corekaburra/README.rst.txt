:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corekaburra'
.. highlight: bash

corekaburra
===========

.. conda:recipe:: corekaburra
   :replaces_section_title:
   :noindex:

   A commandline bioinformatics tool made to utilize syntenic information from genomes in the context of pan\-genomes

   :homepage: https://github.com/milnus/Corekaburra
   :documentation: https://github.com/milnus/Corekaburra/wiki
   
   :license: MIT / MIT
   :recipe: /`corekaburra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corekaburra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corekaburra/meta.yaml>`_

   


.. conda:package:: corekaburra

   |downloads_corekaburra| |docker_corekaburra|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends biopython: ``1.79``
   :depends gffutils: ``0.10.1``
   :depends networkx: ``2.6.3``
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install corekaburra

   and update with::

      conda update corekaburra

   or use the docker container::

      docker pull quay.io/biocontainers/corekaburra:<tag>

   (see `corekaburra/tags`_ for valid values for ``<tag>``)


.. |downloads_corekaburra| image:: https://img.shields.io/conda/dn/bioconda/corekaburra.svg?style=flat
   :target: https://anaconda.org/bioconda/corekaburra
   :alt:   (downloads)
.. |docker_corekaburra| image:: https://quay.io/repository/biocontainers/corekaburra/status
   :target: https://quay.io/repository/biocontainers/corekaburra
.. _`corekaburra/tags`: https://quay.io/repository/biocontainers/corekaburra?tab=tags


.. raw:: html

    <script>
        var package = "corekaburra";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corekaburra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corekaburra/README.html