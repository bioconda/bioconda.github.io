:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enabrowsertools'
.. highlight: bash

enabrowsertools
===============

.. conda:recipe:: enabrowsertools
   :replaces_section_title:
   :noindex:

   enaBrowserTools is a set of scripts that interface with the ENA web services to download data from ENA easily

   :homepage: https://github.com/enasequence/enaBrowserTools
   :license: Apache-2.0
   :recipe: /`enabrowsertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enabrowsertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enabrowsertools/meta.yaml>`_

   


.. conda:package:: enabrowsertools

   |downloads_enabrowsertools| |docker_enabrowsertools|

   :versions:
      
      

      ``1.5.4-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install enabrowsertools

   and update with::

      conda update enabrowsertools

   or use the docker container::

      docker pull quay.io/biocontainers/enabrowsertools:<tag>

   (see `enabrowsertools/tags`_ for valid values for ``<tag>``)


.. |downloads_enabrowsertools| image:: https://img.shields.io/conda/dn/bioconda/enabrowsertools.svg?style=flat
   :target: https://anaconda.org/bioconda/enabrowsertools
   :alt:   (downloads)
.. |docker_enabrowsertools| image:: https://quay.io/repository/biocontainers/enabrowsertools/status
   :target: https://quay.io/repository/biocontainers/enabrowsertools
.. _`enabrowsertools/tags`: https://quay.io/repository/biocontainers/enabrowsertools?tab=tags


.. raw:: html

    <script>
        var package = "enabrowsertools";
        var versions = ["1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enabrowsertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enabrowsertools/README.html