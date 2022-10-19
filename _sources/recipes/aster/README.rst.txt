:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aster'
.. highlight: bash

aster
=====

.. conda:recipe:: aster
   :replaces_section_title:
   :noindex:

   Accurate Species Tree EstimatoR series\; a family of optimation algorithms
   for species tree inference implemented in C\+\+

   :homepage: https://github.com/chaoszhang/ASTER
   :license: AGPL-3.0
   :recipe: /`aster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster/meta.yaml>`_

   


.. conda:package:: aster

   |downloads_aster| |docker_aster|

   :versions:
      
      

      ``1.10-0``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aster

   and update with::

      conda update aster

   or use the docker container::

      docker pull quay.io/biocontainers/aster:<tag>

   (see `aster/tags`_ for valid values for ``<tag>``)


.. |downloads_aster| image:: https://img.shields.io/conda/dn/bioconda/aster.svg?style=flat
   :target: https://anaconda.org/bioconda/aster
   :alt:   (downloads)
.. |docker_aster| image:: https://quay.io/repository/biocontainers/aster/status
   :target: https://quay.io/repository/biocontainers/aster
.. _`aster/tags`: https://quay.io/repository/biocontainers/aster?tab=tags


.. raw:: html

    <script>
        var package = "aster";
        var versions = ["1.10","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aster/README.html