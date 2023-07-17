:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mkdesigner'
.. highlight: bash

mkdesigner
==========

.. conda:recipe:: mkdesigner
   :replaces_section_title:
   :noindex:

   Genome\-wide design of markers for PCR\-based genotyping from NGS data.

   :homepage: https://github.com/KChigira/mkdesigner/
   :license: MIT
   :recipe: /`mkdesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner/meta.yaml>`_

   


.. conda:package:: mkdesigner

   |downloads_mkdesigner| |docker_mkdesigner|

   :versions:
      
      

      ``0.1.1-0``,  ``0.0.1-0``

      

   
   :depends bcftools: ``>=1.5,<2.0``
   :depends blast: ``>=2.14.0,<3.0.0``
   :depends gatk4: ``>=4.4.0.0,<5.0.0.0``
   :depends pandas: ``>=2.0.2,<3.0.0``
   :depends picard: ``>=2.18.29,<3.0.0``
   :depends python: ``>=3.8,<4.0``
   :depends r-base: ``>=4.2.3,<5.0.0``
   :depends samtools: ``>=1.6,<2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mkdesigner

   and update with::

      conda update mkdesigner

   or use the docker container::

      docker pull quay.io/biocontainers/mkdesigner:<tag>

   (see `mkdesigner/tags`_ for valid values for ``<tag>``)


.. |downloads_mkdesigner| image:: https://img.shields.io/conda/dn/bioconda/mkdesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mkdesigner
   :alt:   (downloads)
.. |docker_mkdesigner| image:: https://quay.io/repository/biocontainers/mkdesigner/status
   :target: https://quay.io/repository/biocontainers/mkdesigner
.. _`mkdesigner/tags`: https://quay.io/repository/biocontainers/mkdesigner?tab=tags


.. raw:: html

    <script>
        var package = "mkdesigner";
        var versions = ["0.1.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mkdesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mkdesigner/README.html