:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solexaqa'
.. highlight: bash

solexaqa
========

.. conda:recipe:: solexaqa
   :replaces_section_title:
   :noindex:

   Quality statistics and visual representations for second\-generation sequencing data

   :homepage: http://solexaqa.sourceforge.net/
   :license: GPLv3
   :recipe: /`solexaqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-11-485`

   


.. conda:package:: solexaqa

   |downloads_solexaqa| |docker_solexaqa|

   :versions:
      
      

      ``3.1.7.1-5``,  ``3.1.7.1-4``,  ``3.1.7.1-3``,  ``3.1.7.1-2``,  ``3.1.7.1-1``,  ``3.1.7.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends icu: ``>=70.1,<71.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install solexaqa

   and update with::

      conda update solexaqa

   or use the docker container::

      docker pull quay.io/biocontainers/solexaqa:<tag>

   (see `solexaqa/tags`_ for valid values for ``<tag>``)


.. |downloads_solexaqa| image:: https://img.shields.io/conda/dn/bioconda/solexaqa.svg?style=flat
   :target: https://anaconda.org/bioconda/solexaqa
   :alt:   (downloads)
.. |docker_solexaqa| image:: https://quay.io/repository/biocontainers/solexaqa/status
   :target: https://quay.io/repository/biocontainers/solexaqa
.. _`solexaqa/tags`: https://quay.io/repository/biocontainers/solexaqa?tab=tags


.. raw:: html

    <script>
        var package = "solexaqa";
        var versions = ["3.1.7.1","3.1.7.1","3.1.7.1","3.1.7.1","3.1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solexaqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solexaqa/README.html