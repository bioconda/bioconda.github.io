:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapless'
.. highlight: bash

gapless
=======

.. conda:recipe:: gapless
   :replaces_section_title:
   :noindex:

   gapless assembly improvement tool

   :homepage: https://github.com/schmeing/gapless
   :license: MIT
   :recipe: /`gapless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapless/meta.yaml>`_

   Combined scaffolding\, gap\-closing and assembly correction with long reads\: https\:\/\/github.com\/schmeing\/gapless . To run the shell script minimap2 seqtk and racon must be installed separately. They are included in the bioconda channel.


.. conda:package:: gapless

   |downloads_gapless| |docker_gapless|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``>=1.1.0``
   :depends pillow: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gapless

   and update with::

      conda update gapless

   or use the docker container::

      docker pull quay.io/biocontainers/gapless:<tag>

   (see `gapless/tags`_ for valid values for ``<tag>``)


.. |downloads_gapless| image:: https://img.shields.io/conda/dn/bioconda/gapless.svg?style=flat
   :target: https://anaconda.org/bioconda/gapless
   :alt:   (downloads)
.. |docker_gapless| image:: https://quay.io/repository/biocontainers/gapless/status
   :target: https://quay.io/repository/biocontainers/gapless
.. _`gapless/tags`: https://quay.io/repository/biocontainers/gapless?tab=tags


.. raw:: html

    <script>
        var package = "gapless";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapless/README.html