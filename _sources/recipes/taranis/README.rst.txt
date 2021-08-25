:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taranis'
.. highlight: bash

taranis
=======

.. conda:recipe:: taranis
   :replaces_section_title:
   :noindex:

   Pipeline for wg\/cgMLST allele calling

   :homepage: https://github.com/BU-ISCIII/taranis
   :license: GPLv3
   :recipe: /`taranis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taranis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taranis/meta.yaml>`_

   Taranis is a allele calling software for cg\/wgMLST analysis using bacterial strain assemblies and an available cg\/wgMLST schema.


.. conda:package:: taranis

   |downloads_taranis| |docker_taranis|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0edge-0``

      

   
   :depends biopython: ``>=1.72``
   :depends blast: ``>=2.9``
   :depends mash: ``>=2``
   :depends numpy: ``>=1.20.3``
   :depends openpyxl: ``>=3.0.7``
   :depends pandas: ``>=1.2.4``
   :depends plotly: ``>=5.0.0``
   :depends prodigal: ``>=2.6.3``
   :depends progressbar: ``>=2.5``
   :depends prokka: ``>=1.14``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taranis

   and update with::

      conda update taranis

   or use the docker container::

      docker pull quay.io/biocontainers/taranis:<tag>

   (see `taranis/tags`_ for valid values for ``<tag>``)


.. |downloads_taranis| image:: https://img.shields.io/conda/dn/bioconda/taranis.svg?style=flat
   :target: https://anaconda.org/bioconda/taranis
   :alt:   (downloads)
.. |docker_taranis| image:: https://quay.io/repository/biocontainers/taranis/status
   :target: https://quay.io/repository/biocontainers/taranis
.. _`taranis/tags`: https://quay.io/repository/biocontainers/taranis?tab=tags


.. raw:: html

    <script>
        var package = "taranis";
        var versions = ["2.0.1","2.0.0edge"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taranis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taranis/README.html