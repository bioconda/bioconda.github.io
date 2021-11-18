:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphb_toolkit'
.. highlight: bash

staphb_toolkit
==============

.. conda:recipe:: staphb_toolkit
   :replaces_section_title:
   :noindex:

   A ToolKit of commonly used Public Health Bioinformatics Tools

   :homepage: https://staphb.org/staphb_toolkit/
   :documentation: https://staphb.org/staphb_toolkit
   
   :developer docs: https://github.com/StaPH-B/staphb_toolkit
   :license: GPL / GPLv3
   :recipe: /`staphb_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit/meta.yaml>`_

   


.. conda:package:: staphb_toolkit

   |downloads_staphb_toolkit| |docker_staphb_toolkit|

   :versions:
      
      

      ``1.3.7-0``,  ``1.3.6-0``

      

   
   :depends docker-py: ``>=4.1.0``
   :depends openjdk: 
   :depends pexpect: ``>=4.8``
   :depends psutil: ``>=5.6.3``
   :depends python: ``>=3.6``
   :depends spython: ``>=0.0.73``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install staphb_toolkit

   and update with::

      conda update staphb_toolkit

   or use the docker container::

      docker pull quay.io/biocontainers/staphb_toolkit:<tag>

   (see `staphb_toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_staphb_toolkit| image:: https://img.shields.io/conda/dn/bioconda/staphb_toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/staphb_toolkit
   :alt:   (downloads)
.. |docker_staphb_toolkit| image:: https://quay.io/repository/biocontainers/staphb_toolkit/status
   :target: https://quay.io/repository/biocontainers/staphb_toolkit
.. _`staphb_toolkit/tags`: https://quay.io/repository/biocontainers/staphb_toolkit?tab=tags


.. raw:: html

    <script>
        var package = "staphb_toolkit";
        var versions = ["1.3.7","1.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphb_toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphb_toolkit/README.html