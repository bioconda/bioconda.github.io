:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grampa'
.. highlight: bash

grampa
======

.. conda:recipe:: grampa
   :replaces_section_title:
   :noindex:

   GRAMPA is a program to identify and place polyploidy events on a phylogeny and count duplications and losses in the presence of polyploidy.

   :homepage: https://github.com/gwct/grampa
   :documentation: https://gwct.github.io/grampa/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`grampa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa/meta.yaml>`_

   


.. conda:package:: grampa

   |downloads_grampa| |docker_grampa|

   :versions:
      
      

      ``1.3.1-0``

      

   
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grampa

   and update with::

      conda update grampa

   or use the docker container::

      docker pull quay.io/biocontainers/grampa:<tag>

   (see `grampa/tags`_ for valid values for ``<tag>``)


.. |downloads_grampa| image:: https://img.shields.io/conda/dn/bioconda/grampa.svg?style=flat
   :target: https://anaconda.org/bioconda/grampa
   :alt:   (downloads)
.. |docker_grampa| image:: https://quay.io/repository/biocontainers/grampa/status
   :target: https://quay.io/repository/biocontainers/grampa
.. _`grampa/tags`: https://quay.io/repository/biocontainers/grampa?tab=tags


.. raw:: html

    <script>
        var package = "grampa";
        var versions = ["1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grampa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grampa/README.html