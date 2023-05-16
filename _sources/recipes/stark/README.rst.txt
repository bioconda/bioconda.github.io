:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stark'
.. highlight: bash

stark
=====

.. conda:recipe:: stark
   :replaces_section_title:
   :noindex:

   A tool for bluntifying a bidirected de bruijn graph by removing overlaps.

   :homepage: https://github.com/hnikaein/stark
   :license: MIT / MIT
   :recipe: /`stark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark/meta.yaml>`_

   


.. conda:package:: stark

   |downloads_stark| |docker_stark|

   :versions:
      
      

      ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stark

   and update with::

      conda update stark

   or use the docker container::

      docker pull quay.io/biocontainers/stark:<tag>

   (see `stark/tags`_ for valid values for ``<tag>``)


.. |downloads_stark| image:: https://img.shields.io/conda/dn/bioconda/stark.svg?style=flat
   :target: https://anaconda.org/bioconda/stark
   :alt:   (downloads)
.. |docker_stark| image:: https://quay.io/repository/biocontainers/stark/status
   :target: https://quay.io/repository/biocontainers/stark
.. _`stark/tags`: https://quay.io/repository/biocontainers/stark?tab=tags


.. raw:: html

    <script>
        var package = "stark";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stark/README.html