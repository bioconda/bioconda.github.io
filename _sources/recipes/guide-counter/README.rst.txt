:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guide-counter'
.. highlight: bash

guide-counter
=============

.. conda:recipe:: guide-counter
   :replaces_section_title:
   :noindex:

   Fast and accurate guide counting for CRISPR screens

   :homepage: https://github.com/fulcrumgenomics/guide-counter
   :license: MIT / MIT
   :recipe: /`guide-counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guide-counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guide-counter/meta.yaml>`_

   


.. conda:package:: guide-counter

   |downloads_guide-counter| |docker_guide-counter|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guide-counter

   and update with::

      conda update guide-counter

   or use the docker container::

      docker pull quay.io/biocontainers/guide-counter:<tag>

   (see `guide-counter/tags`_ for valid values for ``<tag>``)


.. |downloads_guide-counter| image:: https://img.shields.io/conda/dn/bioconda/guide-counter.svg?style=flat
   :target: https://anaconda.org/bioconda/guide-counter
   :alt:   (downloads)
.. |docker_guide-counter| image:: https://quay.io/repository/biocontainers/guide-counter/status
   :target: https://quay.io/repository/biocontainers/guide-counter
.. _`guide-counter/tags`: https://quay.io/repository/biocontainers/guide-counter?tab=tags


.. raw:: html

    <script>
        var package = "guide-counter";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guide-counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guide-counter/README.html