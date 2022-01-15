:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sansa'
.. highlight: bash

sansa
=====

.. conda:recipe:: sansa
   :replaces_section_title:
   :noindex:

   Structural variant annotation

   :homepage: https://github.com/dellytools/sansa
   :license: BSD / BSD License
   :recipe: /`sansa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sansa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sansa/meta.yaml>`_

   


.. conda:package:: sansa

   |downloads_sansa| |docker_sansa|

   :versions:
      
      

      ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libcxx: ``>=11.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sansa

   and update with::

      conda update sansa

   or use the docker container::

      docker pull quay.io/biocontainers/sansa:<tag>

   (see `sansa/tags`_ for valid values for ``<tag>``)


.. |downloads_sansa| image:: https://img.shields.io/conda/dn/bioconda/sansa.svg?style=flat
   :target: https://anaconda.org/bioconda/sansa
   :alt:   (downloads)
.. |docker_sansa| image:: https://quay.io/repository/biocontainers/sansa/status
   :target: https://quay.io/repository/biocontainers/sansa
.. _`sansa/tags`: https://quay.io/repository/biocontainers/sansa?tab=tags


.. raw:: html

    <script>
        var package = "sansa";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.7","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sansa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sansa/README.html