:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poseidon-trident'
.. highlight: bash

poseidon-trident
================

.. conda:recipe:: poseidon-trident
   :replaces_section_title:
   :noindex:

   A tool \(trident\) to work with modular genotype databases formatted using Poseidon.

   :homepage: https://poseidon-framework.github.io/#/
   :license: MIT
   :recipe: /`poseidon-trident <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident/meta.yaml>`_

   


.. conda:package:: poseidon-trident

   |downloads_poseidon-trident| |docker_poseidon-trident|

   :versions:
      
      

      ``0.28.0-0``,  ``0.26.3-1``,  ``0.26.3-0``,  ``0.26.1-1``,  ``0.26.1-0``,  ``0.21.0-0``,  ``0.18.1-0``

      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poseidon-trident

   and update with::

      conda update poseidon-trident

   or use the docker container::

      docker pull quay.io/biocontainers/poseidon-trident:<tag>

   (see `poseidon-trident/tags`_ for valid values for ``<tag>``)


.. |downloads_poseidon-trident| image:: https://img.shields.io/conda/dn/bioconda/poseidon-trident.svg?style=flat
   :target: https://anaconda.org/bioconda/poseidon-trident
   :alt:   (downloads)
.. |docker_poseidon-trident| image:: https://quay.io/repository/biocontainers/poseidon-trident/status
   :target: https://quay.io/repository/biocontainers/poseidon-trident
.. _`poseidon-trident/tags`: https://quay.io/repository/biocontainers/poseidon-trident?tab=tags


.. raw:: html

    <script>
        var package = "poseidon-trident";
        var versions = ["0.28.0","0.26.3","0.26.3","0.26.1","0.26.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poseidon-trident/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poseidon-trident/README.html