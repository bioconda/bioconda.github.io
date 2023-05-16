:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poseidon-xerxes'
.. highlight: bash

poseidon-xerxes
===============

.. conda:recipe:: poseidon-xerxes
   :replaces_section_title:
   :noindex:

   A tool \(xerxes\) to analyse genotype databases formatted using Poseidon.

   :homepage: https://poseidon-framework.github.io/#/
   :license: MIT
   :recipe: /`poseidon-xerxes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-xerxes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-xerxes/meta.yaml>`_

   


.. conda:package:: poseidon-xerxes

   |downloads_poseidon-xerxes| |docker_poseidon-xerxes|

   :versions:
      
      

      ``0.1.2.2-2``,  ``0.1.2.2-1``,  ``0.1.2.2-0``,  ``0.1.0.0-0``

      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poseidon-xerxes

   and update with::

      conda update poseidon-xerxes

   or use the docker container::

      docker pull quay.io/biocontainers/poseidon-xerxes:<tag>

   (see `poseidon-xerxes/tags`_ for valid values for ``<tag>``)


.. |downloads_poseidon-xerxes| image:: https://img.shields.io/conda/dn/bioconda/poseidon-xerxes.svg?style=flat
   :target: https://anaconda.org/bioconda/poseidon-xerxes
   :alt:   (downloads)
.. |docker_poseidon-xerxes| image:: https://quay.io/repository/biocontainers/poseidon-xerxes/status
   :target: https://quay.io/repository/biocontainers/poseidon-xerxes
.. _`poseidon-xerxes/tags`: https://quay.io/repository/biocontainers/poseidon-xerxes?tab=tags


.. raw:: html

    <script>
        var package = "poseidon-xerxes";
        var versions = ["0.1.2.2","0.1.2.2","0.1.2.2","0.1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poseidon-xerxes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poseidon-xerxes/README.html