:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saintbioutils'
.. highlight: bash

saintbioutils
=============

.. conda:recipe:: saintbioutils
   :replaces_section_title:
   :noindex:

   A package of utility and miscellaneous functions for using in bioinformaticspipelines\, primarily in Python.

   :homepage: https://github.com/HobnobMancer/saintBioutils
   :license: MIT
   :recipe: /`saintbioutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saintbioutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saintbioutils/meta.yaml>`_

   


.. conda:package:: saintbioutils

   |downloads_saintbioutils| |docker_saintbioutils|

   :versions:
      
      

      ``0.0.24-0``,  ``0.0.23-0``

      

   
   :depends biopython: ``>=1.76``
   :depends python: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install saintbioutils

   and update with::

      conda update saintbioutils

   or use the docker container::

      docker pull quay.io/biocontainers/saintbioutils:<tag>

   (see `saintbioutils/tags`_ for valid values for ``<tag>``)


.. |downloads_saintbioutils| image:: https://img.shields.io/conda/dn/bioconda/saintbioutils.svg?style=flat
   :target: https://anaconda.org/bioconda/saintbioutils
   :alt:   (downloads)
.. |docker_saintbioutils| image:: https://quay.io/repository/biocontainers/saintbioutils/status
   :target: https://quay.io/repository/biocontainers/saintbioutils
.. _`saintbioutils/tags`: https://quay.io/repository/biocontainers/saintbioutils?tab=tags


.. raw:: html

    <script>
        var package = "saintbioutils";
        var versions = ["0.0.24","0.0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saintbioutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saintbioutils/README.html