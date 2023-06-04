:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiny-count'
.. highlight: bash

tiny-count
==========

.. conda:recipe:: tiny-count
   :replaces_section_title:
   :noindex:

   \\ A precision counting tool for hierarchical classification and quantification of small RNA\-seq reads. tiny\-count is part of the tinyRNA analysis pipeline.

   :homepage: https://github.com/MontgomeryLab/tinyRNA
   :license: GPLv3
   :recipe: /`tiny-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiny-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiny-count/meta.yaml>`_

   


.. conda:package:: tiny-count

   |downloads_tiny-count| |docker_tiny-count|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0_patch1-0``

      

   
   :depends htseq: ``2.0.2.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``1.23.1.*``
   :depends pandas: ``1.4.3.*``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends ruamel.yaml: ``0.17.16.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tiny-count

   and update with::

      conda update tiny-count

   or use the docker container::

      docker pull quay.io/biocontainers/tiny-count:<tag>

   (see `tiny-count/tags`_ for valid values for ``<tag>``)


.. |downloads_tiny-count| image:: https://img.shields.io/conda/dn/bioconda/tiny-count.svg?style=flat
   :target: https://anaconda.org/bioconda/tiny-count
   :alt:   (downloads)
.. |docker_tiny-count| image:: https://quay.io/repository/biocontainers/tiny-count/status
   :target: https://quay.io/repository/biocontainers/tiny-count
.. _`tiny-count/tags`: https://quay.io/repository/biocontainers/tiny-count?tab=tags


.. raw:: html

    <script>
        var package = "tiny-count";
        var versions = ["1.5.0","1.4.0","1.3.0","1.3.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiny-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiny-count/README.html