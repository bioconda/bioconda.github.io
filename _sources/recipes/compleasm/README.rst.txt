:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compleasm'
.. highlight: bash

compleasm
=========

.. conda:recipe:: compleasm
   :replaces_section_title:
   :noindex:

   Compleasm\: a faster and more accurate reimplementation of BUSCO

   :homepage: https://github.com/huangnengCSU/compleasm
   :license: Apache License 2.0
   :recipe: /`compleasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compleasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compleasm/meta.yaml>`_

   


.. conda:package:: compleasm

   |downloads_compleasm| |docker_compleasm|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends dendropy: ``<4.6.0``
   :depends hmmer: 
   :depends miniprot: ``>=0.11``
   :depends pandas: 
   :depends python: 
   :depends sepp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install compleasm

   and update with::

      conda update compleasm

   or use the docker container::

      docker pull quay.io/biocontainers/compleasm:<tag>

   (see `compleasm/tags`_ for valid values for ``<tag>``)


.. |downloads_compleasm| image:: https://img.shields.io/conda/dn/bioconda/compleasm.svg?style=flat
   :target: https://anaconda.org/bioconda/compleasm
   :alt:   (downloads)
.. |docker_compleasm| image:: https://quay.io/repository/biocontainers/compleasm/status
   :target: https://quay.io/repository/biocontainers/compleasm
.. _`compleasm/tags`: https://quay.io/repository/biocontainers/compleasm?tab=tags


.. raw:: html

    <script>
        var package = "compleasm";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compleasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compleasm/README.html