:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mg-toolkit'
.. highlight: bash

mg-toolkit
==========

.. conda:recipe:: mg-toolkit
   :replaces_section_title:
   :noindex:

   Metagenomics toolkit.

   :homepage: https://github.com/EBI-metagenomics/emg-toolkit
   :license: APACHE / Apache-2.0
   :recipe: /`mg-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mg-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mg-toolkit/meta.yaml>`_

   


.. conda:package:: mg-toolkit

   |downloads_mg-toolkit| |docker_mg-toolkit|

   :versions:
      
      

      ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
   :depends jsonapi-client: ``>=0.9.9``
   :depends pandas: ``>=0.25.3``
   :depends python: ``>=3.5``
   :depends requests: ``>=2.24.0``
   :depends tqdm: ``>=4.49.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mg-toolkit

   and update with::

      conda update mg-toolkit

   or use the docker container::

      docker pull quay.io/biocontainers/mg-toolkit:<tag>

   (see `mg-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_mg-toolkit| image:: https://img.shields.io/conda/dn/bioconda/mg-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mg-toolkit
   :alt:   (downloads)
.. |docker_mg-toolkit| image:: https://quay.io/repository/biocontainers/mg-toolkit/status
   :target: https://quay.io/repository/biocontainers/mg-toolkit
.. _`mg-toolkit/tags`: https://quay.io/repository/biocontainers/mg-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "mg-toolkit";
        var versions = ["0.10.1","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mg-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mg-toolkit/README.html