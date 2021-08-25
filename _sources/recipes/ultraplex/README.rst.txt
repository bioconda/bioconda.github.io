:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraplex'
.. highlight: bash

ultraplex
=========

.. conda:recipe:: ultraplex
   :replaces_section_title:
   :noindex:

   fastq demultiplexer

   :homepage: https://github.com/ulelab/ultraplex.git
   :license: MIT / MIT
   :recipe: /`ultraplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex/meta.yaml>`_

   


.. conda:package:: ultraplex

   |downloads_ultraplex| |docker_ultraplex|

   :versions:
      
      

      ``1.2.3-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.0.3-0``

      

   
   :depends dnaio: ``>=0.5.0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends pigz: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends xopen: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ultraplex

   and update with::

      conda update ultraplex

   or use the docker container::

      docker pull quay.io/biocontainers/ultraplex:<tag>

   (see `ultraplex/tags`_ for valid values for ``<tag>``)


.. |downloads_ultraplex| image:: https://img.shields.io/conda/dn/bioconda/ultraplex.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraplex
   :alt:   (downloads)
.. |docker_ultraplex| image:: https://quay.io/repository/biocontainers/ultraplex/status
   :target: https://quay.io/repository/biocontainers/ultraplex
.. _`ultraplex/tags`: https://quay.io/repository/biocontainers/ultraplex?tab=tags


.. raw:: html

    <script>
        var package = "ultraplex";
        var versions = ["1.2.3","1.1.5","1.1.4","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraplex/README.html