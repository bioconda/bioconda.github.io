:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haslr'
.. highlight: bash

haslr
=====

.. conda:recipe:: haslr
   :replaces_section_title:
   :noindex:

   A fast tool for hybrid genome assembly of long and short reads

   :homepage: https://github.com/vpc-ccg/haslr
   :license: GPL3
   :recipe: /`haslr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haslr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haslr/meta.yaml>`_

   


.. conda:package:: haslr

   |downloads_haslr| |docker_haslr|

   :versions:
      
      

      ``0.8a1-3``,  ``0.8a1-2``,  ``0.8a1-1``,  ``0.8a1-0``

      

   
   :depends fastutils: ``>=0.2``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends minia: ``>=3.2.1``
   :depends minimap2: ``>=2.17``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haslr

   and update with::

      conda update haslr

   or use the docker container::

      docker pull quay.io/biocontainers/haslr:<tag>

   (see `haslr/tags`_ for valid values for ``<tag>``)


.. |downloads_haslr| image:: https://img.shields.io/conda/dn/bioconda/haslr.svg?style=flat
   :target: https://anaconda.org/bioconda/haslr
   :alt:   (downloads)
.. |docker_haslr| image:: https://quay.io/repository/biocontainers/haslr/status
   :target: https://quay.io/repository/biocontainers/haslr
.. _`haslr/tags`: https://quay.io/repository/biocontainers/haslr?tab=tags


.. raw:: html

    <script>
        var package = "haslr";
        var versions = ["0.8a1","0.8a1","0.8a1","0.8a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haslr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haslr/README.html