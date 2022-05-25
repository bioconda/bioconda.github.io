:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curare'
.. highlight: bash

curare
======

.. conda:recipe:: curare
   :replaces_section_title:
   :noindex:

   A Customizable and Reproducible Analysis Pipeline for RNA\-Seq Experiments.

   :homepage: https://github.com/pblumenkamp/Curare
   :license: GPL3 / GPL3
   :recipe: /`curare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curare/meta.yaml>`_

   Curare is a freely available analysis pipeline for reproducible\, high\-throughput\,
   bacterial RNA\-Seq experiments. Define standardized pipelines customized for your
   specific workflow without the necessity of installing all the tools by yourself.
   Curare is implemented in Python and uses the power of Snakemake and Conda to build
   and execute the defined workflows. Its modulized structure and the simplicity of
   Snakemake enables developers to create new and advanced workflow steps.


.. conda:package:: curare

   |downloads_curare| |docker_curare|

   :versions:
      
      

      ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``

      

   
   :depends docopt: ``0.6.2.*``
   :depends mamba: ``0.13.*``
   :depends python: 
   :depends python: ``3.9.*``
   :depends pyyaml: ``5.4.1.*``
   :depends snakemake: ``6.3.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install curare

   and update with::

      conda update curare

   or use the docker container::

      docker pull quay.io/biocontainers/curare:<tag>

   (see `curare/tags`_ for valid values for ``<tag>``)


.. |downloads_curare| image:: https://img.shields.io/conda/dn/bioconda/curare.svg?style=flat
   :target: https://anaconda.org/bioconda/curare
   :alt:   (downloads)
.. |docker_curare| image:: https://quay.io/repository/biocontainers/curare/status
   :target: https://quay.io/repository/biocontainers/curare
.. _`curare/tags`: https://quay.io/repository/biocontainers/curare?tab=tags


.. raw:: html

    <script>
        var package = "curare";
        var versions = ["0.4.5","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curare/README.html