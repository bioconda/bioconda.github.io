:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bugseq-porechop'
.. highlight: bash

bugseq-porechop
===============

.. conda:recipe:: bugseq-porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads \(fork of artic\-network\/Porechop\)

   :homepage: https://gitlab.com/bugseq/porechop
   :license: GPL3
   :recipe: /`bugseq-porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bugseq-porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bugseq-porechop/meta.yaml>`_

   


.. conda:package:: bugseq-porechop

   |downloads_bugseq-porechop| |docker_bugseq-porechop|

   :versions:
      
      

      ``0.3.4pre-2``,  ``0.3.4pre-1``,  ``0.3.4pre-0``

      

   
   :depends libcxx: ``>=12.0.1``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bugseq-porechop

   and update with::

      conda update bugseq-porechop

   or use the docker container::

      docker pull quay.io/biocontainers/bugseq-porechop:<tag>

   (see `bugseq-porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_bugseq-porechop| image:: https://img.shields.io/conda/dn/bioconda/bugseq-porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/bugseq-porechop
   :alt:   (downloads)
.. |docker_bugseq-porechop| image:: https://quay.io/repository/biocontainers/bugseq-porechop/status
   :target: https://quay.io/repository/biocontainers/bugseq-porechop
.. _`bugseq-porechop/tags`: https://quay.io/repository/biocontainers/bugseq-porechop?tab=tags


.. raw:: html

    <script>
        var package = "bugseq-porechop";
        var versions = ["0.3.4pre","0.3.4pre","0.3.4pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bugseq-porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bugseq-porechop/README.html