:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mstmap'
.. highlight: bash

mstmap
======

.. conda:recipe:: mstmap
   :replaces_section_title:
   :noindex:

   Accurate construction of genetic maps \(Wu et al.\, PLoS Genetics\, 4\(10\)\:e1000212\, 2008\)

   :homepage: http://mstmap.org/
   :license: GPL3
   :recipe: /`mstmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mstmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mstmap/meta.yaml>`_
   :links: biotools: :biotools:`mstmap`, doi: :doi:`10.1371/journal.pgen.1000212`

   


.. conda:package:: mstmap

   |downloads_mstmap| |docker_mstmap|

   :versions:
      
      

      ``1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends tar: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mstmap

   and update with::

      conda update mstmap

   or use the docker container::

      docker pull quay.io/biocontainers/mstmap:<tag>

   (see `mstmap/tags`_ for valid values for ``<tag>``)


.. |downloads_mstmap| image:: https://img.shields.io/conda/dn/bioconda/mstmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mstmap
   :alt:   (downloads)
.. |docker_mstmap| image:: https://quay.io/repository/biocontainers/mstmap/status
   :target: https://quay.io/repository/biocontainers/mstmap
.. _`mstmap/tags`: https://quay.io/repository/biocontainers/mstmap?tab=tags


.. raw:: html

    <script>
        var package = "mstmap";
        var versions = ["1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mstmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mstmap/README.html