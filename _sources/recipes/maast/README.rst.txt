:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maast'
.. highlight: bash

maast
=====

.. conda:recipe:: maast
   :replaces_section_title:
   :noindex:

   Microbial agile accurate SNP Typer

   :homepage: https://github.com/zjshi/Maast
   :license: MIT / MIT
   :recipe: /`maast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast/meta.yaml>`_

   


.. conda:package:: maast

   |downloads_maast| |docker_maast|

   :versions:
      
      

      ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends biopython: ``>=1.58``
   :depends fasttree: 
   :depends lbzip2: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lz4: 
   :depends mash: 
   :depends mummer4: 
   :depends networkx: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maast

   and update with::

      conda update maast

   or use the docker container::

      docker pull quay.io/biocontainers/maast:<tag>

   (see `maast/tags`_ for valid values for ``<tag>``)


.. |downloads_maast| image:: https://img.shields.io/conda/dn/bioconda/maast.svg?style=flat
   :target: https://anaconda.org/bioconda/maast
   :alt:   (downloads)
.. |docker_maast| image:: https://quay.io/repository/biocontainers/maast/status
   :target: https://quay.io/repository/biocontainers/maast
.. _`maast/tags`: https://quay.io/repository/biocontainers/maast?tab=tags


.. raw:: html

    <script>
        var package = "maast";
        var versions = ["1.0.8","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maast/README.html