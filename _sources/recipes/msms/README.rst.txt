:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msms'
.. highlight: bash

msms
====

.. conda:recipe:: msms
   :replaces_section_title:
   :noindex:

   MSMS is a program written in the C programming language to compute molecular surfaces.

   :homepage: http://mgltools.scripps.edu/packages/MSMS/
   :license: Free for academic use.
   :recipe: /`msms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msms/meta.yaml>`_

   


.. conda:package:: msms

   |downloads_msms| |docker_msms|

   :versions:
      
      

      ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msms

   and update with::

      conda update msms

   or use the docker container::

      docker pull quay.io/biocontainers/msms:<tag>

   (see `msms/tags`_ for valid values for ``<tag>``)


.. |downloads_msms| image:: https://img.shields.io/conda/dn/bioconda/msms.svg?style=flat
   :target: https://anaconda.org/bioconda/msms
   :alt:   (downloads)
.. |docker_msms| image:: https://quay.io/repository/biocontainers/msms/status
   :target: https://quay.io/repository/biocontainers/msms
.. _`msms/tags`: https://quay.io/repository/biocontainers/msms?tab=tags


.. raw:: html

    <script>
        var package = "msms";
        var versions = ["2.6.1","2.6.1","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msms/README.html