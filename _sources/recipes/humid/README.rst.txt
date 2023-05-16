:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'humid'
.. highlight: bash

humid
=====

.. conda:recipe:: humid
   :replaces_section_title:
   :noindex:

   HUMID \-\- High\-performance UMI Deduplicator

   :homepage: https://github.com/jfjlaros/HUMID
   :license: MIT
   :recipe: /`humid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humid/meta.yaml>`_

   


.. conda:package:: humid

   |downloads_humid| |docker_humid|

   :versions:
      
      

      ``1.0.37-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends isa-l: 
   :depends libcxx: ``>=14.0.4``
   :depends libdeflate: ``>=1.13,<1.14.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install humid

   and update with::

      conda update humid

   or use the docker container::

      docker pull quay.io/biocontainers/humid:<tag>

   (see `humid/tags`_ for valid values for ``<tag>``)


.. |downloads_humid| image:: https://img.shields.io/conda/dn/bioconda/humid.svg?style=flat
   :target: https://anaconda.org/bioconda/humid
   :alt:   (downloads)
.. |docker_humid| image:: https://quay.io/repository/biocontainers/humid/status
   :target: https://quay.io/repository/biocontainers/humid
.. _`humid/tags`: https://quay.io/repository/biocontainers/humid?tab=tags


.. raw:: html

    <script>
        var package = "humid";
        var versions = ["1.0.37","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/humid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/humid/README.html