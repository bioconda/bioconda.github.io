:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wfa2-lib'
.. highlight: bash

wfa2-lib
========

.. conda:recipe:: wfa2-lib
   :replaces_section_title:
   :noindex:

   Wavefront alignment algorithm library v2

   :homepage: https://github.com/smarco/WFA2-lib
   :license: MIT
   :recipe: /`wfa2-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa777`, doi: :doi:`10.1101/2022.04.14.488380`

   


.. conda:package:: wfa2-lib

   |downloads_wfa2-lib| |docker_wfa2-lib|

   :versions:
      
      

      ``2.3.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wfa2-lib

   and update with::

      conda update wfa2-lib

   or use the docker container::

      docker pull quay.io/biocontainers/wfa2-lib:<tag>

   (see `wfa2-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_wfa2-lib| image:: https://img.shields.io/conda/dn/bioconda/wfa2-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/wfa2-lib
   :alt:   (downloads)
.. |docker_wfa2-lib| image:: https://quay.io/repository/biocontainers/wfa2-lib/status
   :target: https://quay.io/repository/biocontainers/wfa2-lib
.. _`wfa2-lib/tags`: https://quay.io/repository/biocontainers/wfa2-lib?tab=tags


.. raw:: html

    <script>
        var package = "wfa2-lib";
        var versions = ["2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wfa2-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wfa2-lib/README.html