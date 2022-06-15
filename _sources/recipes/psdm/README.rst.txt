:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psdm'
.. highlight: bash

psdm
====

.. conda:recipe:: psdm
   :replaces_section_title:
   :noindex:

   Compute a pairwise SNP distance matrix from one or two alignment\(s\)

   :homepage: https://github.com/mbhall88/psdm
   :license: MIT
   :recipe: /`psdm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psdm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psdm/meta.yaml>`_

   


.. conda:package:: psdm

   |downloads_psdm| |docker_psdm|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psdm

   and update with::

      conda update psdm

   or use the docker container::

      docker pull quay.io/biocontainers/psdm:<tag>

   (see `psdm/tags`_ for valid values for ``<tag>``)


.. |downloads_psdm| image:: https://img.shields.io/conda/dn/bioconda/psdm.svg?style=flat
   :target: https://anaconda.org/bioconda/psdm
   :alt:   (downloads)
.. |docker_psdm| image:: https://quay.io/repository/biocontainers/psdm/status
   :target: https://quay.io/repository/biocontainers/psdm
.. _`psdm/tags`: https://quay.io/repository/biocontainers/psdm?tab=tags


.. raw:: html

    <script>
        var package = "psdm";
        var versions = ["0.2.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psdm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psdm/README.html