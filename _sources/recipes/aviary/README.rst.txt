:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aviary'
.. highlight: bash

aviary
======

.. conda:recipe:: aviary
   :replaces_section_title:
   :noindex:

   End\-to\-end metagenomics hybrid assembly and binning pipeline.

   :homepage: https://github.com/rhysnewell/aviary/
   :documentation: https://rhysnewell.github.io/aviary/
   
   :license: GPL3
   :recipe: /`aviary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary/meta.yaml>`_

   Aviary is an easy to use hybrid assembler and metagenomic pipeline

   For more details see documentation\: https\:\/\/rhysnewell.github.io\/aviary\/.


.. conda:package:: aviary

   |downloads_aviary| |docker_aviary|

   :versions:
      
      

      ``0.5.7-0``,  ``0.5.4-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``

      

   
   :depends bbmap: 
   :depends biopython: 
   :depends mamba: ``>=0.8.2``
   :depends numpy: 
   :depends pandas: ``>=1.2``
   :depends parallel: 
   :depends pigz: ``>=2.6``
   :depends python: ``>=3.8,<3.11``
   :depends ruamel.yaml: ``>=0.15.99``
   :depends snakemake: ``>=6.0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aviary

   and update with::

      conda update aviary

   or use the docker container::

      docker pull quay.io/biocontainers/aviary:<tag>

   (see `aviary/tags`_ for valid values for ``<tag>``)


.. |downloads_aviary| image:: https://img.shields.io/conda/dn/bioconda/aviary.svg?style=flat
   :target: https://anaconda.org/bioconda/aviary
   :alt:   (downloads)
.. |docker_aviary| image:: https://quay.io/repository/biocontainers/aviary/status
   :target: https://quay.io/repository/biocontainers/aviary
.. _`aviary/tags`: https://quay.io/repository/biocontainers/aviary?tab=tags


.. raw:: html

    <script>
        var package = "aviary";
        var versions = ["0.5.7","0.5.4","0.5.0","0.4.3","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aviary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aviary/README.html