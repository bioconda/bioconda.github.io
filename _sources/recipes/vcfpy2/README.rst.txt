:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfpy2'
.. highlight: bash

vcfpy2
======

.. conda:recipe:: vcfpy2
   :replaces_section_title:
   :noindex:

   Python 3 VCF library\, based on vcfpy.

   :homepage: https://github.com/robertopreste/vcfpy2
   :license: MIT / MIT
   :recipe: /`vcfpy2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy2/meta.yaml>`_

   


.. conda:package:: vcfpy2

   |downloads_vcfpy2| |docker_vcfpy2|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfpy2

   and update with::

      conda update vcfpy2

   or use the docker container::

      docker pull quay.io/biocontainers/vcfpy2:<tag>

   (see `vcfpy2/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfpy2| image:: https://img.shields.io/conda/dn/bioconda/vcfpy2.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfpy2
   :alt:   (downloads)
.. |docker_vcfpy2| image:: https://quay.io/repository/biocontainers/vcfpy2/status
   :target: https://quay.io/repository/biocontainers/vcfpy2
.. _`vcfpy2/tags`: https://quay.io/repository/biocontainers/vcfpy2?tab=tags


.. raw:: html

    <script>
        var package = "vcfpy2";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy2/README.html