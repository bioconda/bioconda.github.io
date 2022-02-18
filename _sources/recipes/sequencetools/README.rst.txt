:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequencetools'
.. highlight: bash

sequencetools
=============

.. conda:recipe:: sequencetools
   :replaces_section_title:
   :noindex:

   Tools for population genetics on sequencing data

   :homepage: https://github.com/stschiff/sequenceTools
   :license: MIT
   :recipe: /`sequencetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequencetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequencetools/meta.yaml>`_

   


.. conda:package:: sequencetools

   |downloads_sequencetools| |docker_sequencetools|

   :versions:
      
      

      ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.0.6-1``,  ``1.4.0.6-0``,  ``1.2.2-0``

      

   
   :depends gmp: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends samtools: 
   :depends xz: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequencetools

   and update with::

      conda update sequencetools

   or use the docker container::

      docker pull quay.io/biocontainers/sequencetools:<tag>

   (see `sequencetools/tags`_ for valid values for ``<tag>``)


.. |downloads_sequencetools| image:: https://img.shields.io/conda/dn/bioconda/sequencetools.svg?style=flat
   :target: https://anaconda.org/bioconda/sequencetools
   :alt:   (downloads)
.. |docker_sequencetools| image:: https://quay.io/repository/biocontainers/sequencetools/status
   :target: https://quay.io/repository/biocontainers/sequencetools
.. _`sequencetools/tags`: https://quay.io/repository/biocontainers/sequencetools?tab=tags


.. raw:: html

    <script>
        var package = "sequencetools";
        var versions = ["1.5.2","1.5.1","1.4.0.6","1.4.0.6","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequencetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequencetools/README.html