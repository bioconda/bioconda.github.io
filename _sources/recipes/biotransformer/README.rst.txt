:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotransformer'
.. highlight: bash

biotransformer
==============

.. conda:recipe:: biotransformer
   :replaces_section_title:
   :noindex:

   Predicts small molecule metabolism.

   :homepage: https://bitbucket.org/djoumbou/biotransformer
   :license: GPL2
   :recipe: /`biotransformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321‐018‐0324‐5`, doi: :doi:`10.1093/nar/gkv1229`

   BioTransformer is a software tool that predicts small molecule metabolism in mammals\, their gut microbiota\,
   as well as the soil\/aquatic microbiota. BioTransformer also assists scientists in metabolite identification\,
   based on the metabolism prediction.



.. conda:package:: biotransformer

   |downloads_biotransformer| |docker_biotransformer|

   :versions:
      
      

      ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biotransformer

   and update with::

      conda update biotransformer

   or use the docker container::

      docker pull quay.io/biocontainers/biotransformer:<tag>

   (see `biotransformer/tags`_ for valid values for ``<tag>``)


.. |downloads_biotransformer| image:: https://img.shields.io/conda/dn/bioconda/biotransformer.svg?style=flat
   :target: https://anaconda.org/bioconda/biotransformer
   :alt:   (downloads)
.. |docker_biotransformer| image:: https://quay.io/repository/biocontainers/biotransformer/status
   :target: https://quay.io/repository/biocontainers/biotransformer
.. _`biotransformer/tags`: https://quay.io/repository/biocontainers/biotransformer?tab=tags


.. raw:: html

    <script>
        var package = "biotransformer";
        var versions = ["1.1.5","1.1.5","1.1.5"];
    </script>





Notes
-----
Biotransformer is Java program that comes with a custom wrapper python script.
This python wrapper is called \"biotransformer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"biotransformer \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotransformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotransformer/README.html