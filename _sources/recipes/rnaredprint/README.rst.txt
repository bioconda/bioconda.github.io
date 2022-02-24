:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaredprint'
.. highlight: bash

rnaredprint
===========

.. conda:recipe:: rnaredprint
   :replaces_section_title:
   :noindex:

   Tree\-decomposition based dynamic programming algorithm for multiple target RNA design

   :homepage: https://github.com/yannponty/RNARedPrint
   :license: GPL
   :recipe: /`rnaredprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaredprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaredprint/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-2784-7`

   


.. conda:package:: rnaredprint

   |downloads_rnaredprint| |docker_rnaredprint|

   :versions:
      
      

      ``0.3pre-3``,  ``0.3pre-2``,  ``0.3pre-1``,  ``0.3pre-0``

      

   
   :depends libcxx: ``>=12.0.1``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openjdk: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends scipy: 
   :depends viennarna: ``>=2.4``
   :depends viennarna: ``>=2.5.0,<2.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaredprint

   and update with::

      conda update rnaredprint

   or use the docker container::

      docker pull quay.io/biocontainers/rnaredprint:<tag>

   (see `rnaredprint/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaredprint| image:: https://img.shields.io/conda/dn/bioconda/rnaredprint.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaredprint
   :alt:   (downloads)
.. |docker_rnaredprint| image:: https://quay.io/repository/biocontainers/rnaredprint/status
   :target: https://quay.io/repository/biocontainers/rnaredprint
.. _`rnaredprint/tags`: https://quay.io/repository/biocontainers/rnaredprint?tab=tags


.. raw:: html

    <script>
        var package = "rnaredprint";
        var versions = ["0.3pre","0.3pre","0.3pre","0.3pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaredprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaredprint/README.html