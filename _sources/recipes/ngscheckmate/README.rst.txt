:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngscheckmate'
.. highlight: bash

ngscheckmate
============

.. conda:recipe:: ngscheckmate
   :replaces_section_title:
   :noindex:

   Software package for identifying next generation sequencing \(NGS\) data files from the same individual.

   :homepage: https://github.com/parklab/NGSCheckMate
   :license: MIT
   :recipe: /`ngscheckmate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngscheckmate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngscheckmate/meta.yaml>`_

   


.. conda:package:: ngscheckmate

   |downloads_ngscheckmate| |docker_ngscheckmate|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bcftools: ``1.3.1.*``
   :depends python: ``2.7.18.*``
   :depends r: ``4.1.*``
   :depends samtools: ``1.14.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngscheckmate

   and update with::

      conda update ngscheckmate

   or use the docker container::

      docker pull quay.io/biocontainers/ngscheckmate:<tag>

   (see `ngscheckmate/tags`_ for valid values for ``<tag>``)


.. |downloads_ngscheckmate| image:: https://img.shields.io/conda/dn/bioconda/ngscheckmate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngscheckmate
   :alt:   (downloads)
.. |docker_ngscheckmate| image:: https://quay.io/repository/biocontainers/ngscheckmate/status
   :target: https://quay.io/repository/biocontainers/ngscheckmate
.. _`ngscheckmate/tags`: https://quay.io/repository/biocontainers/ngscheckmate?tab=tags


.. raw:: html

    <script>
        var package = "ngscheckmate";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngscheckmate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngscheckmate/README.html