:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnillumina'
.. highlight: bash

hmnillumina
===========

.. conda:recipe:: hmnillumina
   :replaces_section_title:
   :noindex:

   A parser for Illumina run

   :homepage: https://github.com/guillaume-gricourt/HmnIllumina
   :license: MIT
   :recipe: /`hmnillumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina/meta.yaml>`_

   HmnIllumina\: parsing Illumina InterOp folder to keep useful information


.. conda:package:: hmnillumina

   |downloads_hmnillumina| |docker_hmnillumina|

   :versions:
      
      

      ``1.4.3-0``

      

   
   :depends illumina-interop: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pytest: 
   :depends python: 
   :depends rapidjson: 
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmnillumina

   and update with::

      conda update hmnillumina

   or use the docker container::

      docker pull quay.io/biocontainers/hmnillumina:<tag>

   (see `hmnillumina/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnillumina| image:: https://img.shields.io/conda/dn/bioconda/hmnillumina.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnillumina
   :alt:   (downloads)
.. |docker_hmnillumina| image:: https://quay.io/repository/biocontainers/hmnillumina/status
   :target: https://quay.io/repository/biocontainers/hmnillumina
.. _`hmnillumina/tags`: https://quay.io/repository/biocontainers/hmnillumina?tab=tags


.. raw:: html

    <script>
        var package = "hmnillumina";
        var versions = ["1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnillumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnillumina/README.html