:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbtk'
.. highlight: bash

pbtk
====

.. conda:recipe:: pbtk
   :replaces_section_title:
   :noindex:

   pbtk \- PacBio BAM toolkit

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbtk/meta.yaml>`_

   


.. conda:package:: pbtk

   |downloads_pbtk| |docker_pbtk|

   :versions:
      
      

      ``3.0.0-0``,  ``1.0.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbtk

   and update with::

      conda update pbtk

   or use the docker container::

      docker pull quay.io/biocontainers/pbtk:<tag>

   (see `pbtk/tags`_ for valid values for ``<tag>``)


.. |downloads_pbtk| image:: https://img.shields.io/conda/dn/bioconda/pbtk.svg?style=flat
   :target: https://anaconda.org/bioconda/pbtk
   :alt:   (downloads)
.. |docker_pbtk| image:: https://quay.io/repository/biocontainers/pbtk/status
   :target: https://quay.io/repository/biocontainers/pbtk
.. _`pbtk/tags`: https://quay.io/repository/biocontainers/pbtk?tab=tags


.. raw:: html

    <script>
        var package = "pbtk";
        var versions = ["3.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbtk/README.html