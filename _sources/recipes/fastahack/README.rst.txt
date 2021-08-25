:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastahack'
.. highlight: bash

fastahack
=========

.. conda:recipe:: fastahack
   :replaces_section_title:
   :noindex:

   fastahack \-\-\- \*fast\* FASTA file indexing\, subsequence and sequence extraction

   :homepage: https://github.com/ekg/fastahack
   :license: MIT
   :recipe: /`fastahack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastahack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastahack/meta.yaml>`_

   


.. conda:package:: fastahack

   |downloads_fastahack| |docker_fastahack|

   :versions:
      
      

      ``2016.07.2-3``,  ``2016.07.2-2``,  ``2016.07.2-1``,  ``2016.07.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastahack

   and update with::

      conda update fastahack

   or use the docker container::

      docker pull quay.io/biocontainers/fastahack:<tag>

   (see `fastahack/tags`_ for valid values for ``<tag>``)


.. |downloads_fastahack| image:: https://img.shields.io/conda/dn/bioconda/fastahack.svg?style=flat
   :target: https://anaconda.org/bioconda/fastahack
   :alt:   (downloads)
.. |docker_fastahack| image:: https://quay.io/repository/biocontainers/fastahack/status
   :target: https://quay.io/repository/biocontainers/fastahack
.. _`fastahack/tags`: https://quay.io/repository/biocontainers/fastahack?tab=tags


.. raw:: html

    <script>
        var package = "fastahack";
        var versions = ["2016.07.2","2016.07.2","2016.07.2","2016.07.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastahack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastahack/README.html