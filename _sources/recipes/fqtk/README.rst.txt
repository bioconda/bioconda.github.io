:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtk'
.. highlight: bash

fqtk
====

.. conda:recipe:: fqtk
   :replaces_section_title:
   :noindex:

   A toolkit for working with FASTQ files.

   :homepage: https://github.com/fulcrumgenomics/fqtk
   :license: MIT
   :recipe: /`fqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk/meta.yaml>`_

   


.. conda:package:: fqtk

   |downloads_fqtk| |docker_fqtk|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqtk

   and update with::

      conda update fqtk

   or use the docker container::

      docker pull quay.io/biocontainers/fqtk:<tag>

   (see `fqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtk| image:: https://img.shields.io/conda/dn/bioconda/fqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtk
   :alt:   (downloads)
.. |docker_fqtk| image:: https://quay.io/repository/biocontainers/fqtk/status
   :target: https://quay.io/repository/biocontainers/fqtk
.. _`fqtk/tags`: https://quay.io/repository/biocontainers/fqtk?tab=tags


.. raw:: html

    <script>
        var package = "fqtk";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtk/README.html