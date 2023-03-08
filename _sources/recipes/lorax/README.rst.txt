:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorax'
.. highlight: bash

lorax
=====

.. conda:recipe:: lorax
   :replaces_section_title:
   :noindex:

   A long\-read analysis toolbox for cancer genomics

   :homepage: https://github.com/tobiasrausch/lorax
   :license: BSD / BSD-3-Clause
   :recipe: /`lorax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax/meta.yaml>`_

   


.. conda:package:: lorax

   |downloads_lorax| |docker_lorax|

   :versions:
      
      

      ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libcxx: ``>=14.0.6``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lorax

   and update with::

      conda update lorax

   or use the docker container::

      docker pull quay.io/biocontainers/lorax:<tag>

   (see `lorax/tags`_ for valid values for ``<tag>``)


.. |downloads_lorax| image:: https://img.shields.io/conda/dn/bioconda/lorax.svg?style=flat
   :target: https://anaconda.org/bioconda/lorax
   :alt:   (downloads)
.. |docker_lorax| image:: https://quay.io/repository/biocontainers/lorax/status
   :target: https://quay.io/repository/biocontainers/lorax
.. _`lorax/tags`: https://quay.io/repository/biocontainers/lorax?tab=tags


.. raw:: html

    <script>
        var package = "lorax";
        var versions = ["0.3.7","0.3.7","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorax/README.html