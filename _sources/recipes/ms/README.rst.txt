:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms'
.. highlight: bash

ms
==

.. conda:recipe:: ms
   :replaces_section_title:
   :noindex:

   Generates random independent samples according to a simple Wright\-Fisher neutral model.

   :homepage: http://home.uchicago.edu/rhudson1/source/mksamples.html
   :license: Unknown
   :recipe: /`ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms/meta.yaml>`_
   :links: biotools: :biotools:`ms`, doi: :doi:`10.1093/bioinformatics/18.2.337`

   


.. conda:package:: ms

   |downloads_ms| |docker_ms|

   :versions:
      
      

      ``2014_03_04-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ms

   and update with::

      conda update ms

   or use the docker container::

      docker pull quay.io/biocontainers/ms:<tag>

   (see `ms/tags`_ for valid values for ``<tag>``)


.. |downloads_ms| image:: https://img.shields.io/conda/dn/bioconda/ms.svg?style=flat
   :target: https://anaconda.org/bioconda/ms
   :alt:   (downloads)
.. |docker_ms| image:: https://quay.io/repository/biocontainers/ms/status
   :target: https://quay.io/repository/biocontainers/ms
.. _`ms/tags`: https://quay.io/repository/biocontainers/ms?tab=tags


.. raw:: html

    <script>
        var package = "ms";
        var versions = ["2014_03_04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms/README.html