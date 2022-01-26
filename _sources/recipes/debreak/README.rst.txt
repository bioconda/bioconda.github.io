:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debreak'
.. highlight: bash

debreak
=======

.. conda:recipe:: debreak
   :replaces_section_title:
   :noindex:

   DeBreak\, Deciphering the exact breakpoints of structural variations using long sequencing reads

   :homepage: https://github.com/ChongLab/DeBreak
   :license: MIT / MIT
   :recipe: /`debreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak/meta.yaml>`_

   


.. conda:package:: debreak

   |downloads_debreak| |docker_debreak|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends minimap2: ``2.15.*``
   :depends pysam: ``0.16.0.1.*``
   :depends python: ``2.7.*``
   :depends samtools: ``1.9.*``
   :depends wtdbg: ``2.5.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install debreak

   and update with::

      conda update debreak

   or use the docker container::

      docker pull quay.io/biocontainers/debreak:<tag>

   (see `debreak/tags`_ for valid values for ``<tag>``)


.. |downloads_debreak| image:: https://img.shields.io/conda/dn/bioconda/debreak.svg?style=flat
   :target: https://anaconda.org/bioconda/debreak
   :alt:   (downloads)
.. |docker_debreak| image:: https://quay.io/repository/biocontainers/debreak/status
   :target: https://quay.io/repository/biocontainers/debreak
.. _`debreak/tags`: https://quay.io/repository/biocontainers/debreak?tab=tags


.. raw:: html

    <script>
        var package = "debreak";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debreak/README.html