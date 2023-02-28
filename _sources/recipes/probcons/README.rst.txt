:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probcons'
.. highlight: bash

probcons
========

.. conda:recipe:: probcons
   :replaces_section_title:
   :noindex:

   PROBCONS is a probabilistic consistency\-based multiple sequence alignment

   :homepage: http://probcons.stanford.edu/
   :license: Public Domain Software
   :recipe: /`probcons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probcons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probcons/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.2821705`

   


.. conda:package:: probcons

   |downloads_probcons| |docker_probcons|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probcons

   and update with::

      conda update probcons

   or use the docker container::

      docker pull quay.io/biocontainers/probcons:<tag>

   (see `probcons/tags`_ for valid values for ``<tag>``)


.. |downloads_probcons| image:: https://img.shields.io/conda/dn/bioconda/probcons.svg?style=flat
   :target: https://anaconda.org/bioconda/probcons
   :alt:   (downloads)
.. |docker_probcons| image:: https://quay.io/repository/biocontainers/probcons/status
   :target: https://quay.io/repository/biocontainers/probcons
.. _`probcons/tags`: https://quay.io/repository/biocontainers/probcons?tab=tags


.. raw:: html

    <script>
        var package = "probcons";
        var versions = ["1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probcons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probcons/README.html