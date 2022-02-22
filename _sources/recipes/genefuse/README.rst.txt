:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genefuse'
.. highlight: bash

genefuse
========

.. conda:recipe:: genefuse
   :replaces_section_title:
   :noindex:

   Gene fusion detection and visualization

   :homepage: https://github.com/OpenGene/genefuse
   :license: MIT
   :recipe: /`genefuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefuse/meta.yaml>`_

   


.. conda:package:: genefuse

   |downloads_genefuse| |docker_genefuse|

   :versions:
      
      

      ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genefuse

   and update with::

      conda update genefuse

   or use the docker container::

      docker pull quay.io/biocontainers/genefuse:<tag>

   (see `genefuse/tags`_ for valid values for ``<tag>``)


.. |downloads_genefuse| image:: https://img.shields.io/conda/dn/bioconda/genefuse.svg?style=flat
   :target: https://anaconda.org/bioconda/genefuse
   :alt:   (downloads)
.. |docker_genefuse| image:: https://quay.io/repository/biocontainers/genefuse/status
   :target: https://quay.io/repository/biocontainers/genefuse
.. _`genefuse/tags`: https://quay.io/repository/biocontainers/genefuse?tab=tags


.. raw:: html

    <script>
        var package = "genefuse";
        var versions = ["0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genefuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genefuse/README.html