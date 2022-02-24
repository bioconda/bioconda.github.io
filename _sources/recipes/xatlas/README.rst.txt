:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xatlas'
.. highlight: bash

xatlas
======

.. conda:recipe:: xatlas
   :replaces_section_title:
   :noindex:

   xAtlas is a fast and retrainable small variant caller that has been developed at the Baylor College of Medicine Human Genome Sequencing Center.

   :homepage: https://github.com/jfarek/xatlas
   :license: BSD-3-Clause
   :recipe: /`xatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas/meta.yaml>`_
   :links: doi: :doi:`10.1101/295071`

   


.. conda:package:: xatlas

   |downloads_xatlas| |docker_xatlas|

   :versions:
      
      

      ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends pthread-stubs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xatlas

   and update with::

      conda update xatlas

   or use the docker container::

      docker pull quay.io/biocontainers/xatlas:<tag>

   (see `xatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_xatlas| image:: https://img.shields.io/conda/dn/bioconda/xatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/xatlas
   :alt:   (downloads)
.. |docker_xatlas| image:: https://quay.io/repository/biocontainers/xatlas/status
   :target: https://quay.io/repository/biocontainers/xatlas
.. _`xatlas/tags`: https://quay.io/repository/biocontainers/xatlas?tab=tags


.. raw:: html

    <script>
        var package = "xatlas";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xatlas/README.html