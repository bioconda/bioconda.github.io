:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strcount'
.. highlight: bash

strcount
========

.. conda:recipe:: strcount
   :replaces_section_title:
   :noindex:

   A package to count the number of repeats in a Short Tandem Repeat Expansion from long reads.

   :homepage: https://github.com/sabiqali/strcount
   :license: MIT / MIT
   :recipe: /`strcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount/meta.yaml>`_

   


.. conda:package:: strcount

   |downloads_strcount| |docker_strcount|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends pysam: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strcount

   and update with::

      conda update strcount

   or use the docker container::

      docker pull quay.io/biocontainers/strcount:<tag>

   (see `strcount/tags`_ for valid values for ``<tag>``)


.. |downloads_strcount| image:: https://img.shields.io/conda/dn/bioconda/strcount.svg?style=flat
   :target: https://anaconda.org/bioconda/strcount
   :alt:   (downloads)
.. |docker_strcount| image:: https://quay.io/repository/biocontainers/strcount/status
   :target: https://quay.io/repository/biocontainers/strcount
.. _`strcount/tags`: https://quay.io/repository/biocontainers/strcount?tab=tags


.. raw:: html

    <script>
        var package = "strcount";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strcount/README.html