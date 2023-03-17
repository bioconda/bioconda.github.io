:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zarp'
.. highlight: bash

zarp
====

.. conda:recipe:: zarp
   :replaces_section_title:
   :noindex:

   User\-friendly command\-line interface for the ZARP RNA\-Seq analysis pipeline

   :homepage: https://github.com/zavolanlab/zarp-cli
   :documentation: https://zavolanlab.github.io/zarp-cli
   
   :developer docs: https://github.com/zavolanlab/zarp-cli/tree/dev
   :license: APACHE / Apache License 2.0
   :recipe: /`zarp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp/meta.yaml>`_

   


.. conda:package:: zarp

   |downloads_zarp| |docker_zarp|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zarp

   and update with::

      conda update zarp

   or use the docker container::

      docker pull quay.io/biocontainers/zarp:<tag>

   (see `zarp/tags`_ for valid values for ``<tag>``)


.. |downloads_zarp| image:: https://img.shields.io/conda/dn/bioconda/zarp.svg?style=flat
   :target: https://anaconda.org/bioconda/zarp
   :alt:   (downloads)
.. |docker_zarp| image:: https://quay.io/repository/biocontainers/zarp/status
   :target: https://quay.io/repository/biocontainers/zarp
.. _`zarp/tags`: https://quay.io/repository/biocontainers/zarp?tab=tags


.. raw:: html

    <script>
        var package = "zarp";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zarp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zarp/README.html