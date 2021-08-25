:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcoretools'
.. highlight: bash

pbcoretools
===========

.. conda:recipe:: pbcoretools
   :replaces_section_title:
   :noindex:

   CLI tools and add\-ons for PacBio\'s core APIs

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcoretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools/meta.yaml>`_

   


.. conda:package:: pbcoretools

   |downloads_pbcoretools| |docker_pbcoretools|

   :versions:
      
      

      ``0.8.1-1``,  ``0.8.1-0``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
   :depends numpy: ``>=1.17``
   :depends pbcommand: ``>=2.1.1``
   :depends pbcore: ``>=2.1.2``
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.7,<3.8``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcoretools

   and update with::

      conda update pbcoretools

   or use the docker container::

      docker pull quay.io/biocontainers/pbcoretools:<tag>

   (see `pbcoretools/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcoretools| image:: https://img.shields.io/conda/dn/bioconda/pbcoretools.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcoretools
   :alt:   (downloads)
.. |docker_pbcoretools| image:: https://quay.io/repository/biocontainers/pbcoretools/status
   :target: https://quay.io/repository/biocontainers/pbcoretools
.. _`pbcoretools/tags`: https://quay.io/repository/biocontainers/pbcoretools?tab=tags


.. raw:: html

    <script>
        var package = "pbcoretools";
        var versions = ["0.8.1","0.8.1","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcoretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcoretools/README.html