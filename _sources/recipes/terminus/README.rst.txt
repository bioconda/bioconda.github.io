:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'terminus'
.. highlight: bash

terminus
========

.. conda:recipe:: terminus
   :replaces_section_title:
   :noindex:

   Terminus enables the discovery of data\-driven\, robust transcript groups from RNA\-seq data

   :homepage: https://github.com/COMBINE-lab/terminus
   :license: BSD 3-Clause
   :recipe: /`terminus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus/meta.yaml>`_

   


.. conda:package:: terminus

   |downloads_terminus| |docker_terminus|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``v0.1.0-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install terminus

   and update with::

      conda update terminus

   or use the docker container::

      docker pull quay.io/biocontainers/terminus:<tag>

   (see `terminus/tags`_ for valid values for ``<tag>``)


.. |downloads_terminus| image:: https://img.shields.io/conda/dn/bioconda/terminus.svg?style=flat
   :target: https://anaconda.org/bioconda/terminus
   :alt:   (downloads)
.. |docker_terminus| image:: https://quay.io/repository/biocontainers/terminus/status
   :target: https://quay.io/repository/biocontainers/terminus
.. _`terminus/tags`: https://quay.io/repository/biocontainers/terminus?tab=tags


.. raw:: html

    <script>
        var package = "terminus";
        var versions = ["0.1.0","0.1.0","0.1.0","v0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/terminus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/terminus/README.html