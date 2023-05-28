:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't1k'
.. highlight: bash

t1k
===

.. conda:recipe:: t1k
   :replaces_section_title:
   :noindex:

   T1K is a versatile methods to genotype highly polymorphic genes \(e.g. KIR\, HLA\) with RNA\-seq\, WGS or WES data.

   :homepage: https://github.com/mourisl/T1K
   :license: MIT
   :recipe: /`t1k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1k/meta.yaml>`_

   


.. conda:package:: t1k

   |downloads_t1k| |docker_t1k|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t1k

   and update with::

      conda update t1k

   or use the docker container::

      docker pull quay.io/biocontainers/t1k:<tag>

   (see `t1k/tags`_ for valid values for ``<tag>``)


.. |downloads_t1k| image:: https://img.shields.io/conda/dn/bioconda/t1k.svg?style=flat
   :target: https://anaconda.org/bioconda/t1k
   :alt:   (downloads)
.. |docker_t1k| image:: https://quay.io/repository/biocontainers/t1k/status
   :target: https://quay.io/repository/biocontainers/t1k
.. _`t1k/tags`: https://quay.io/repository/biocontainers/t1k?tab=tags


.. raw:: html

    <script>
        var package = "t1k";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t1k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t1k/README.html