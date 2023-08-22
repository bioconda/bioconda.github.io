:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadrep'
.. highlight: bash

tadrep
======

.. conda:recipe:: tadrep
   :replaces_section_title:
   :noindex:

   Targeted Detection and Reconstruction of Plasmids.

   :homepage: https://github.com/oschwengers/tadrep
   :license: GPL / GPL-3.0-only
   :recipe: /`tadrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadrep/meta.yaml>`_

   


.. conda:package:: tadrep

   |downloads_tadrep| |docker_tadrep|

   :versions:
      
      

      ``0.9.1-0``

      

   
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.12.0``
   :depends cd-hit: ``>=4.8.1``
   :depends matplotlib-base: ``>=3.7``
   :depends pygenomeviz: ``>=0.4``
   :depends pyrodigal: ``>=2.1.0``
   :depends python: ``>=3.8``
   :depends xopen: ``>=1.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadrep

   and update with::

      conda update tadrep

   or use the docker container::

      docker pull quay.io/biocontainers/tadrep:<tag>

   (see `tadrep/tags`_ for valid values for ``<tag>``)


.. |downloads_tadrep| image:: https://img.shields.io/conda/dn/bioconda/tadrep.svg?style=flat
   :target: https://anaconda.org/bioconda/tadrep
   :alt:   (downloads)
.. |docker_tadrep| image:: https://quay.io/repository/biocontainers/tadrep/status
   :target: https://quay.io/repository/biocontainers/tadrep
.. _`tadrep/tags`: https://quay.io/repository/biocontainers/tadrep?tab=tags


.. raw:: html

    <script>
        var package = "tadrep";
        var versions = ["0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadrep/README.html