:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvetti'
.. highlight: bash

cnvetti
=======

.. conda:recipe:: cnvetti
   :replaces_section_title:
   :noindex:

   CNVetti is a CNV caller from HTS data.

   :homepage: https://github.com/bihealth/cnvetti
   :license: GPL3
   :recipe: /`cnvetti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvetti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvetti/meta.yaml>`_

   


.. conda:package:: cnvetti

   |downloads_cnvetti| |docker_cnvetti|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends xz: ``>=5.2.4,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnvetti

   and update with::

      conda update cnvetti

   or use the docker container::

      docker pull quay.io/biocontainers/cnvetti:<tag>

   (see `cnvetti/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvetti| image:: https://img.shields.io/conda/dn/bioconda/cnvetti.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvetti
   :alt:   (downloads)
.. |docker_cnvetti| image:: https://quay.io/repository/biocontainers/cnvetti/status
   :target: https://quay.io/repository/biocontainers/cnvetti
.. _`cnvetti/tags`: https://quay.io/repository/biocontainers/cnvetti?tab=tags


.. raw:: html

    <script>
        var package = "cnvetti";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvetti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvetti/README.html