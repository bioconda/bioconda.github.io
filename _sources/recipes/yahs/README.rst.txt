:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yahs'
.. highlight: bash

yahs
====

.. conda:recipe:: yahs
   :replaces_section_title:
   :noindex:

   YaHS\, yet another Hi\-C scaffolding tool.

   :homepage: https://github.com/c-zhou/yahs
   :license: MIT
   :recipe: /`yahs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahs/meta.yaml>`_

   


.. conda:package:: yahs

   |downloads_yahs| |docker_yahs|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yahs

   and update with::

      conda update yahs

   or use the docker container::

      docker pull quay.io/biocontainers/yahs:<tag>

   (see `yahs/tags`_ for valid values for ``<tag>``)


.. |downloads_yahs| image:: https://img.shields.io/conda/dn/bioconda/yahs.svg?style=flat
   :target: https://anaconda.org/bioconda/yahs
   :alt:   (downloads)
.. |docker_yahs| image:: https://quay.io/repository/biocontainers/yahs/status
   :target: https://quay.io/repository/biocontainers/yahs
.. _`yahs/tags`: https://quay.io/repository/biocontainers/yahs?tab=tags


.. raw:: html

    <script>
        var package = "yahs";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahs/README.html