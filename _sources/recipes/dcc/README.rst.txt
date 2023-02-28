:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcc'
.. highlight: bash

dcc
===

.. conda:recipe:: dcc
   :replaces_section_title:
   :noindex:

   DCC is a python package intended to detect and quantify circRNAs with high specificity

   :homepage: https://github.com/dieterich-lab/DCC
   :license: GPL-3.0
   :recipe: /`dcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcc/meta.yaml>`_

   


.. conda:package:: dcc

   |downloads_dcc| |docker_dcc|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends htseq: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dcc

   and update with::

      conda update dcc

   or use the docker container::

      docker pull quay.io/biocontainers/dcc:<tag>

   (see `dcc/tags`_ for valid values for ``<tag>``)


.. |downloads_dcc| image:: https://img.shields.io/conda/dn/bioconda/dcc.svg?style=flat
   :target: https://anaconda.org/bioconda/dcc
   :alt:   (downloads)
.. |docker_dcc| image:: https://quay.io/repository/biocontainers/dcc/status
   :target: https://quay.io/repository/biocontainers/dcc
.. _`dcc/tags`: https://quay.io/repository/biocontainers/dcc?tab=tags


.. raw:: html

    <script>
        var package = "dcc";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcc/README.html