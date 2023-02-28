:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'altair-mf'
.. highlight: bash

altair-mf
=========

.. conda:recipe:: altair-mf
   :replaces_section_title:
   :noindex:

   Software for alignment\-free and spatial\-temporal analysis of multi\-FASTA data

   :homepage: https://cobilab.github.io/altair/
   :license: GPL / GPL v3 License
   :recipe: /`altair-mf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altair-mf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altair-mf/meta.yaml>`_

   


.. conda:package:: altair-mf

   |downloads_altair-mf| |docker_altair-mf|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install altair-mf

   and update with::

      conda update altair-mf

   or use the docker container::

      docker pull quay.io/biocontainers/altair-mf:<tag>

   (see `altair-mf/tags`_ for valid values for ``<tag>``)


.. |downloads_altair-mf| image:: https://img.shields.io/conda/dn/bioconda/altair-mf.svg?style=flat
   :target: https://anaconda.org/bioconda/altair-mf
   :alt:   (downloads)
.. |docker_altair-mf| image:: https://quay.io/repository/biocontainers/altair-mf/status
   :target: https://quay.io/repository/biocontainers/altair-mf
.. _`altair-mf/tags`: https://quay.io/repository/biocontainers/altair-mf?tab=tags


.. raw:: html

    <script>
        var package = "altair-mf";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/altair-mf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/altair-mf/README.html