:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wdltool'
.. highlight: bash

wdltool
=======

.. conda:recipe:: wdltool
   :replaces_section_title:

   Command line utilities for interacting with WDL

   :homepage: https://github.com/broadinstitute/wdltool
   :license: BSD
   :recipe: /`wdltool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wdltool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wdltool/meta.yaml>`_

   


.. conda:package:: wdltool

   |downloads_wdltool| |docker_wdltool|

   :versions: 0.14-1, 0.14-0, 0.9-0, 0.6-0
   
   :depends openjdk: >=8
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wdltool

   and update with::

      conda update wdltool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wdltool:<tag>

   (see `wdltool/tags`_ for valid values for ``<tag>``)


.. |downloads_wdltool| image:: https://img.shields.io/conda/dn/bioconda/wdltool.svg?style=flat
   :alt:   (downloads)
.. |docker_wdltool| image:: https://quay.io/repository/biocontainers/wdltool/status
   :target: https://quay.io/repository/biocontainers/wdltool
.. _`wdltool/tags`: https://quay.io/repository/biocontainers/wdltool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wdltool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wdltool/README.html