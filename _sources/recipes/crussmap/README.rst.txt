:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crussmap'
.. highlight: bash

crussmap
========

.. conda:recipe:: crussmap
   :replaces_section_title:
   :noindex:

   crussmap is a faster tool to convert genome coordinates between difference reference assemblies.


   :homepage: https://github.com/wjwei-handsome/crussmap
   :license: MIT
   :recipe: /`crussmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crussmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crussmap/meta.yaml>`_

   


.. conda:package:: crussmap

   |downloads_crussmap| |docker_crussmap|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crussmap

   and update with::

      conda update crussmap

   or use the docker container::

      docker pull quay.io/biocontainers/crussmap:<tag>

   (see `crussmap/tags`_ for valid values for ``<tag>``)


.. |downloads_crussmap| image:: https://img.shields.io/conda/dn/bioconda/crussmap.svg?style=flat
   :target: https://anaconda.org/bioconda/crussmap
   :alt:   (downloads)
.. |docker_crussmap| image:: https://quay.io/repository/biocontainers/crussmap/status
   :target: https://quay.io/repository/biocontainers/crussmap
.. _`crussmap/tags`: https://quay.io/repository/biocontainers/crussmap?tab=tags


.. raw:: html

    <script>
        var package = "crussmap";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crussmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crussmap/README.html