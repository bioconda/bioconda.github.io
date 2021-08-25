:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gargammel-slim'
.. highlight: bash

gargammel-slim
==============

.. conda:recipe:: gargammel-slim
   :replaces_section_title:
   :noindex:

   Tool for simulating ancient DNA datasets

   :homepage: https://github.com/grenaud/gargammel
   :license: GPL-3.0-only
   :recipe: /`gargammel-slim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel-slim/meta.yaml>`_

   This a stripped version of Gargammel that only builds the programs 
   fragSim\, deamSim and adptSim. For a full Gargammel installation
   look at the gargammel package



.. conda:package:: gargammel-slim

   |downloads_gargammel-slim| |docker_gargammel-slim|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gargammel-slim

   and update with::

      conda update gargammel-slim

   or use the docker container::

      docker pull quay.io/biocontainers/gargammel-slim:<tag>

   (see `gargammel-slim/tags`_ for valid values for ``<tag>``)


.. |downloads_gargammel-slim| image:: https://img.shields.io/conda/dn/bioconda/gargammel-slim.svg?style=flat
   :target: https://anaconda.org/bioconda/gargammel-slim
   :alt:   (downloads)
.. |docker_gargammel-slim| image:: https://quay.io/repository/biocontainers/gargammel-slim/status
   :target: https://quay.io/repository/biocontainers/gargammel-slim
.. _`gargammel-slim/tags`: https://quay.io/repository/biocontainers/gargammel-slim?tab=tags


.. raw:: html

    <script>
        var package = "gargammel-slim";
        var versions = ["1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gargammel-slim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gargammel-slim/README.html