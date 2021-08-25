:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calitas'
.. highlight: bash

calitas
=======

.. conda:recipe:: calitas
   :replaces_section_title:
   :noindex:

   A CRISPR\/Cas\-aware ALigner for In silico off\-TArget Search

   :homepage: https://github.com/editasmedicine/calitas
   :license: BSD-3-Clause-Clear
   :recipe: /`calitas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calitas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calitas/meta.yaml>`_

   


.. conda:package:: calitas

   |downloads_calitas| |docker_calitas|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install calitas

   and update with::

      conda update calitas

   or use the docker container::

      docker pull quay.io/biocontainers/calitas:<tag>

   (see `calitas/tags`_ for valid values for ``<tag>``)


.. |downloads_calitas| image:: https://img.shields.io/conda/dn/bioconda/calitas.svg?style=flat
   :target: https://anaconda.org/bioconda/calitas
   :alt:   (downloads)
.. |docker_calitas| image:: https://quay.io/repository/biocontainers/calitas/status
   :target: https://quay.io/repository/biocontainers/calitas
.. _`calitas/tags`: https://quay.io/repository/biocontainers/calitas?tab=tags


.. raw:: html

    <script>
        var package = "calitas";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calitas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calitas/README.html