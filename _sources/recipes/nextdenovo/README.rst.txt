:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextdenovo'
.. highlight: bash

nextdenovo
==========

.. conda:recipe:: nextdenovo
   :replaces_section_title:
   :noindex:

   String graph\-based de novo assembler for long reads \(CLR\, HiFi and ONT\)

   :homepage: https://github.com/Nextomics/NextDenovo
   :license: GNU General Public License v3.0
   :recipe: /`nextdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo/meta.yaml>`_

   


.. conda:package:: nextdenovo

   |downloads_nextdenovo| |docker_nextdenovo|

   :versions:
      
      

      ``2.5.2-0``,  ``2.5.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :depends paralleltask: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends readline: ``>=8.2,<9.0a0``
   :depends tk: ``>=8.6.12,<8.7.0a0``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextdenovo

   and update with::

      conda update nextdenovo

   or use the docker container::

      docker pull quay.io/biocontainers/nextdenovo:<tag>

   (see `nextdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_nextdenovo| image:: https://img.shields.io/conda/dn/bioconda/nextdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/nextdenovo
   :alt:   (downloads)
.. |docker_nextdenovo| image:: https://quay.io/repository/biocontainers/nextdenovo/status
   :target: https://quay.io/repository/biocontainers/nextdenovo
.. _`nextdenovo/tags`: https://quay.io/repository/biocontainers/nextdenovo?tab=tags


.. raw:: html

    <script>
        var package = "nextdenovo";
        var versions = ["2.5.2","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextdenovo/README.html