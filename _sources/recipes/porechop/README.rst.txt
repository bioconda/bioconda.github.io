:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porechop'
.. highlight: bash

porechop
========

.. conda:recipe:: porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads

   :homepage: https://github.com/rrwick/Porechop
   :license: GPL3
   :recipe: /`porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop/meta.yaml>`_

   


.. conda:package:: porechop

   |downloads_porechop| |docker_porechop|

   :versions:
      
      

      ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3_seqan2.1.1-3``,  ``0.2.3_seqan2.1.1-2``,  ``0.2.3_seqan2.1.1-1``,  ``0.2.3_seqan2.1.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install porechop

   and update with::

      conda update porechop

   or use the docker container::

      docker pull quay.io/biocontainers/porechop:<tag>

   (see `porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_porechop| image:: https://img.shields.io/conda/dn/bioconda/porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/porechop
   :alt:   (downloads)
.. |docker_porechop| image:: https://quay.io/repository/biocontainers/porechop/status
   :target: https://quay.io/repository/biocontainers/porechop
.. _`porechop/tags`: https://quay.io/repository/biocontainers/porechop?tab=tags


.. raw:: html

    <script>
        var package = "porechop";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.3_seqan2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porechop/README.html