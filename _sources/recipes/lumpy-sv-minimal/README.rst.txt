:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lumpy-sv-minimal'
.. highlight: bash

lumpy-sv-minimal
================

.. conda:recipe:: lumpy-sv-minimal
   :replaces_section_title:
   :noindex:

   A general probabilistic framework for structural variant discovery. This package contains only the lumpy executable

   :homepage: https://github.com/arq5x/lumpy-sv
   :license: MIT
   :recipe: /`lumpy-sv-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv-minimal/meta.yaml>`_

   


.. conda:package:: lumpy-sv-minimal

   |downloads_lumpy-sv-minimal| |docker_lumpy-sv-minimal|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lumpy-sv-minimal

   and update with::

      conda update lumpy-sv-minimal

   or use the docker container::

      docker pull quay.io/biocontainers/lumpy-sv-minimal:<tag>

   (see `lumpy-sv-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_lumpy-sv-minimal| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/lumpy-sv-minimal
   :alt:   (downloads)
.. |docker_lumpy-sv-minimal| image:: https://quay.io/repository/biocontainers/lumpy-sv-minimal/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv-minimal
.. _`lumpy-sv-minimal/tags`: https://quay.io/repository/biocontainers/lumpy-sv-minimal?tab=tags


.. raw:: html

    <script>
        var package = "lumpy-sv-minimal";
        var versions = ["0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv-minimal/README.html