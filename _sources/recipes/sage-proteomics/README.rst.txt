:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sage-proteomics'
.. highlight: bash

sage-proteomics
===============

.. conda:recipe:: sage-proteomics
   :replaces_section_title:
   :noindex:

   Proteomics searching so fast it feels like magic.

   :homepage: https://github.com/lazear/sage
   :documentation: https://lazear.github.io/sage/
   
   :license: MIT
   :recipe: /`sage-proteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics/meta.yaml>`_

   


.. conda:package:: sage-proteomics

   |downloads_sage-proteomics| |docker_sage-proteomics|

   :versions:
      
      

      ``0.9.4-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sage-proteomics

   and update with::

      conda update sage-proteomics

   or use the docker container::

      docker pull quay.io/biocontainers/sage-proteomics:<tag>

   (see `sage-proteomics/tags`_ for valid values for ``<tag>``)


.. |downloads_sage-proteomics| image:: https://img.shields.io/conda/dn/bioconda/sage-proteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/sage-proteomics
   :alt:   (downloads)
.. |docker_sage-proteomics| image:: https://quay.io/repository/biocontainers/sage-proteomics/status
   :target: https://quay.io/repository/biocontainers/sage-proteomics
.. _`sage-proteomics/tags`: https://quay.io/repository/biocontainers/sage-proteomics?tab=tags


.. raw:: html

    <script>
        var package = "sage-proteomics";
        var versions = ["0.9.4","0.9.0","0.8.1","0.8.0","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sage-proteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sage-proteomics/README.html