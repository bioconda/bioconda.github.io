:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commet'
.. highlight: bash

commet
======

.. conda:recipe:: commet
   :replaces_section_title:
   :noindex:

   Comparing and combining multiple metagenomic datasets

   :homepage: https://colibread.inria.fr/software/commet/
   :license: GNU Affero General Public License
   :recipe: /`commet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet/meta.yaml>`_
   :links: biotools: :biotools:`commet`, doi: :doi:`10.1109/BIBM.2014.6999135`

   


.. conda:package:: commet

   |downloads_commet| |docker_commet|

   :versions:
      
      

      ``24.7.14-7``,  ``24.7.14-6``,  ``24.7.14-5``,  ``24.7.14-4``,  ``24.7.14-3``,  ``24.7.14-2``,  ``24.7.14-1``,  ``24.7.14-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install commet

   and update with::

      conda update commet

   or use the docker container::

      docker pull quay.io/biocontainers/commet:<tag>

   (see `commet/tags`_ for valid values for ``<tag>``)


.. |downloads_commet| image:: https://img.shields.io/conda/dn/bioconda/commet.svg?style=flat
   :target: https://anaconda.org/bioconda/commet
   :alt:   (downloads)
.. |docker_commet| image:: https://quay.io/repository/biocontainers/commet/status
   :target: https://quay.io/repository/biocontainers/commet
.. _`commet/tags`: https://quay.io/repository/biocontainers/commet?tab=tags


.. raw:: html

    <script>
        var package = "commet";
        var versions = ["24.7.14","24.7.14","24.7.14","24.7.14","24.7.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commet/README.html