:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mwga-utils'
.. highlight: bash

mwga-utils
==========

.. conda:recipe:: mwga-utils
   :replaces_section_title:
   :noindex:

   Collection of utilities for processing Multispecies Whole Genome Alignments

   :homepage: https://github.com/RomainFeron/mgwa_utils
   :license: GPL3
   :recipe: /`mwga-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mwga-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mwga-utils/meta.yaml>`_

   


.. conda:package:: mwga-utils

   |downloads_mwga-utils| |docker_mwga-utils|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mwga-utils

   and update with::

      conda update mwga-utils

   or use the docker container::

      docker pull quay.io/biocontainers/mwga-utils:<tag>

   (see `mwga-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_mwga-utils| image:: https://img.shields.io/conda/dn/bioconda/mwga-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/mwga-utils
   :alt:   (downloads)
.. |docker_mwga-utils| image:: https://quay.io/repository/biocontainers/mwga-utils/status
   :target: https://quay.io/repository/biocontainers/mwga-utils
.. _`mwga-utils/tags`: https://quay.io/repository/biocontainers/mwga-utils?tab=tags


.. raw:: html

    <script>
        var package = "mwga-utils";
        var versions = ["0.1.6","0.1.4","0.1.4","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mwga-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mwga-utils/README.html