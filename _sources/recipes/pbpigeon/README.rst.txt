:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbpigeon'
.. highlight: bash

pbpigeon
========

.. conda:recipe:: pbpigeon
   :replaces_section_title:
   :noindex:

   PacBio transcript toolkit

   :homepage: https://github.com/PacificBiosciences/pigeon
   :license: BSD-3-Clause-Clear
   :recipe: /`pbpigeon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbpigeon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbpigeon/meta.yaml>`_

   


.. conda:package:: pbpigeon

   |downloads_pbpigeon| |docker_pbpigeon|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbpigeon

   and update with::

      conda update pbpigeon

   or use the docker container::

      docker pull quay.io/biocontainers/pbpigeon:<tag>

   (see `pbpigeon/tags`_ for valid values for ``<tag>``)


.. |downloads_pbpigeon| image:: https://img.shields.io/conda/dn/bioconda/pbpigeon.svg?style=flat
   :target: https://anaconda.org/bioconda/pbpigeon
   :alt:   (downloads)
.. |docker_pbpigeon| image:: https://quay.io/repository/biocontainers/pbpigeon/status
   :target: https://quay.io/repository/biocontainers/pbpigeon
.. _`pbpigeon/tags`: https://quay.io/repository/biocontainers/pbpigeon?tab=tags


.. raw:: html

    <script>
        var package = "pbpigeon";
        var versions = ["1.0.0","1.0.0","1.0.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbpigeon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbpigeon/README.html