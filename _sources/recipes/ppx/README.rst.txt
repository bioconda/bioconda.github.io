:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppx'
.. highlight: bash

ppx
===

.. conda:recipe:: ppx
   :replaces_section_title:
   :noindex:

   A Python interface to proteomics data repositories

   :homepage: https://github.com/wfondrie/ppx
   :documentation: https://ppx.readthedocs.io
   
   :license: MIT
   :recipe: /`ppx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppx/meta.yaml>`_

   


.. conda:package:: ppx

   |downloads_ppx| |docker_ppx|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: ``>=2.25.1``
   :depends tqdm: ``>=4.60.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ppx

   and update with::

      conda update ppx

   or use the docker container::

      docker pull quay.io/biocontainers/ppx:<tag>

   (see `ppx/tags`_ for valid values for ``<tag>``)


.. |downloads_ppx| image:: https://img.shields.io/conda/dn/bioconda/ppx.svg?style=flat
   :target: https://anaconda.org/bioconda/ppx
   :alt:   (downloads)
.. |docker_ppx| image:: https://quay.io/repository/biocontainers/ppx/status
   :target: https://quay.io/repository/biocontainers/ppx
.. _`ppx/tags`: https://quay.io/repository/biocontainers/ppx?tab=tags


.. raw:: html

    <script>
        var package = "ppx";
        var versions = ["1.2.2","1.2.1","1.2.0","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppx/README.html